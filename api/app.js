import http from '~/composables/useRequest.js'

export const app = {
    login: (email, password) => {
        return http.post('auth/login', {email: email, password: password}, false);
    },

    logout: () => {
        return http.post('auth/logout');
    },
    
    me: () => {
        return http.post('auth/me');
    },
}