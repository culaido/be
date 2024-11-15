// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,

    compatibilityDate: '2024-04-03',
	devtools: { enabled: false },

    runtimeConfig: {
        public: {
            endpoint : 'http://api.landlord.test/property/b/api/'
        }
    },

    css: [
        "assets/css/style.css"
    ],

    app: {

        pageTransition: { name: 'page', mode: 'out-in' },

        head: {
            title : '',

            viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
            charset: 'utf-8',
            link: [
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css' },
                { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' },
            ],
            script: [

            ]
        }
    },

    modules: ['@nuxt/devtools', '@pinia/nuxt', 'dayjs-nuxt', '@nuxt/icon', '@pinia/nuxt', '@nuxtjs/google-fonts'],

    googleFonts: {
        preload: true,
        useStylesheet: true,

        families: {
            'Noto Sans TC': true,
        }
    },
    imports: {
        dirs: ["stores"],

        presets: [
            {from: 'vue-i18n', imports: ['useI18n']}
        ]
    },

    server: {
        host: '0.0.0.0',  // 或直接指定為 '127.0.0.1'
        port: 3000
    }
})
