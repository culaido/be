import { createI18n } from 'vue-i18n';

import zhTW from '@/locales/zhTW.ts';

export default defineNuxtPlugin(( nuxtApp ) => {

    const i18n = createI18n({
        legacy: false,
        lazy: true,
        warnHtmlMessage: false,
        globalInjection: true,
        useScope: 'global',
        locale: 'zh-TW',
        messages: {
            'zh-TW': zhTW,
        },
    });

    nuxtApp.vueApp.use(i18n);
});
