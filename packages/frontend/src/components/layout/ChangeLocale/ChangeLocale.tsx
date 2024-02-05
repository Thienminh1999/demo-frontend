"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import {
  MY_LANGUAGE,
} from "@/shared/constants/locale.constant";
import { usePortStore } from "@/store/usePortStore";

export default function ChangeLocale(props: any) {
  const { i18n, t } = useTranslation();
  const {setLocale, locale } = usePortStore();

  const switchLocaleAction = (value: string) => {
    Cookies.set(MY_LANGUAGE, value)
    setLocale(value);
    i18n.changeLanguage(value);
  };

  return (
    <>
      <select
        onChange={(e) => switchLocaleAction(e.target.value)}
        value={locale}
      >
        <option value='en'>US {t("english")}</option>
        <option value='vi'>VN {t("vietnamese")}</option>
      </select>
    </>
  );
}
