import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'ar', 'fr', 'es', 'de', 'pt', 'ru', 'zh', 'nl', 'pl', 'sv'],
    defaultLocale: 'en',
    localePrefix: 'never'
});

// RTL languages
export const rtlLocales = ['ar'];

export function isRtlLocale(locale: string): boolean {
    return rtlLocales.includes(locale);
}
