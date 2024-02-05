import { Ni18nOptions } from "ni18n"

const supportedLngs = ['en', 'vi']
export const ni18nConfig: Ni18nOptions = {
    fallbackLng: 'en',
    supportedLngs,
    ns: ['common'],
    react: {
        useSuspense: false,
    },
}