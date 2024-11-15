import { ofetch } from "ofetch";

export const req = async (method, url, params={}, needAuth=true, headers={} ) => {

    const cfg       = useRuntimeConfig();
    const AuthStore = useAuthStore();

    let fetch = async (method, url, params={}, needAuth=true) => {

        const token = AuthStore.token;
        const lang  = 'en-US';

        let opt = {
            retry: 3,
            retryDelay: 500, // ms

            method: method,

            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin' : '*',
                'Accept-Language': (lang) ? lang : 'en',
                ...headers,
            },

            ignoreResponseError: true,
        };

        if ( url.substr(0, 4) != 'http' )
            opt.baseURL = cfg.public.endpoint;

        if ( needAuth ) {
            opt.headers.Authorization = ( url == 'auth/refresh' )
                ? `Bearer ${token.refresh}`
                : `Bearer ${token.access}`;
        }

        if ( method == 'GET'  ) opt.params = params;
        if ( method == 'POST' ) opt.body = params;

        return await ofetch(url, opt);
    };

    let ret = await fetch(method, url, params, needAuth);

    if ( ret.hasOwnProperty('message') && ret.message == 'Unauthenticated.' ) {

        let newToken = await fetch('POST', 'auth/refresh', {}, true);

        if ( !newToken.status ) {
            AuthStore.LOGOUT();

            await navigateTo(cfg.public.authRedirect, {
                external: true
            });
        }

        AuthStore.SET_TOKEN(newToken.data.token.access, newToken.data.token.refresh);

        ret = await fetch(method, url, params, needAuth);
    }

    return ret;
};

export const get = async (url, params={}, auth=true) => {
    return await req('GET', url, params, auth);
};

export const post = async (url, params={}, auth=true) => {
    return await req('POST', url, params, auth);
};

export const put = async (url, params={}) => {
    return await req('PUT', url, params);
};


export default {get, post, req};
