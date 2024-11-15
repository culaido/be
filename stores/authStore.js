import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', {
    state: () => ({

        loggedIn   : false,

        user: {
            email   : null,
            name    : null,
        },

        token: {
            access  : null,
            refresh : null,
        },

        lang    : null,
    }),

    persist: true,

    actions: {
        SET_USER(v) {

            this.loggedIn = true;

            this.user = v;
        },

        SET_TOKEN(access, refresh) {
            this.token.access  = access;
            this.token.refresh = refresh;
        },

        SET_LANGUAGE (lang) {
            this.lang = lang;
        },

        LOGOUT() {
            this.loggedIn = false;
            this.user  = { };
            this.token = { };
        },

        UPDATE (v){

            if ( v.hasOwnProperty('email') )
                this.user.email = v.email;

            if ( v.hasOwnProperty('name') )
                this.user.name = v.name;
        }
    },
    getters: {
    }
});