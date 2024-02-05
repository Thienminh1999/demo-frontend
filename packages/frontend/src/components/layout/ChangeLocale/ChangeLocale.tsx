'use client';
import React from 'react';
import { useTranslation } from 'react-i18next'
import Cookies from "js-cookie";
import { DEFAULT_LANGUAGE, MY_LANGUAGE } from "@/shared/constants/locale.constant";
import { Select } from 'antd';


export default function ChangeLocale() {
  const {i18n, t} = useTranslation();

  const switchLocaleAction = (value: string) => {
    Cookies.set(MY_LANGUAGE, value);
    i18n.changeLanguage(value);
    console.log('CURRENT LANG', i18n.resolvedLanguage);
  }

  return (
    <>
      <Select
        onChange={value => switchLocaleAction(value)}
        value={i18n.resolvedLanguage}
      >
        <Select.Option value="en">🇺🇸 {t('english')}</Select.Option>
        <Select.Option value="vi">🇻🇳 {t('vietnamese')}</Select.Option>
      </Select>
    </>
  );
}
