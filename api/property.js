import http from '~/composables/useRequest.js'

export const property = {
    index: (property) => {
        return http.post(`property/${property}/property`);
    },

    update: (property, type, params) => {
        return http.post(`property/${property}/type/${type}/update`, { data: params} );
    },

}