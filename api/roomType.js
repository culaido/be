import http from '~/composables/useRequest.js'

export const roomType = {
    index: () => {
        return http.post(`roomType`);
    },

}