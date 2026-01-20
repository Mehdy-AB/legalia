import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    localePrefix: 'never'
});

// RTL languages
export const rtlLocales = ['ar'];

export function isRtlLocale(locale: string): boolean {
    return rtlLocales.includes(locale);
}
