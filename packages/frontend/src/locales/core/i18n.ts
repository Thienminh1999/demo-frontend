import intl from './intl';

const i18n = {
  getText: (key: string, options = {}) => {
    return intl.get(key, options).defaultMessage(key);
  },
};

export default i18n;