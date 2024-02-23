import { LOCALE_DATA } from '@/shared/constants/locale.constant';
import intl from './intl';

const i18n = {
  initialize: (lang: string) => {
    return intl.init({
      // debug: true,
      currentLocale: lang,
      locales: LOCALE_DATA,
    })
  },
  getText: (key: string, options = {}) => {
    return intl.get(key, options).defaultMessage(key);
  },
};

export default i18n;