"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import {
  MY_LANGUAGE,
} from "@/shared/constants/locale.constant";
import { usePortStore } from "@/store/usePortStore";

export default function ChangeLocale() {
  const { i18n, t } = useTranslation();
  const { setLocale, locale } = usePortStore();

  const switchLocaleAction = (value: string) => {
    Cookies.set(MY_LANGUAGE, value)
    setLocale(value);
    i18n.changeLanguage(value);
  };

  return (
    <div className="mx-auto p-4 bg-gray-100 shadow-md text-center">
      <div className="mb-2">
        <label className="font-bold">
          {t('selectlanguage')}
        </label>
      </div>
      <div>
        <select
          className="p-1 w-40 border-2 rounded-md transition-all duration-300 focus:border-pink-600 hover:border-pink-600 focus-visible:outline-none focus-visible:border-pink-600"
          onChange={(e) => switchLocaleAction(e.target.value)}
          value={locale}
        >
          <option value='en'>{t('english')}</option>
          <option value='vi'>{t('vietnamese')}</option>
        </select>
      </div>
    </div>
  );
}
