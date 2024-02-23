import React from "react";
import Cookies from "js-cookie";
import { MY_LANGUAGE } from "@/shared/constants/locale.constant";
import { usePortStore } from "@/store/usePortStore";
import i18n from "@/locales/core/i18n";
import useForceUpdate from "@/hooks/useForceUpdate";

export default function ChangeLocale() {
  const forceUpdate = useForceUpdate();
  const { setLocale, locale } = usePortStore();

  const switchLocaleAction = (value: string) => {
    Cookies.set(MY_LANGUAGE, value)
    setLocale(value);
    i18n.initialize(value)
    forceUpdate();
  };

  return (
    <div className="mx-auto p-4 bg-gray-100 shadow-md text-center">
      <div className="mb-2">
        <label className="font-bold">
          {i18n.getText('common.selectlanguage')}
        </label>
      </div>
      <div>
        <select
          className="p-1 w-40 border-2 rounded-md transition-all duration-300 focus:border-pink-600 hover:border-pink-600 focus-visible:outline-none focus-visible:border-pink-600"
          onChange={(e) => switchLocaleAction(e.target.value)}
          value={locale}
        >
          <option value='en-US'>{i18n.getText('common.english')}</option>
          <option value='vi-VN'>{i18n.getText('common.vietnamese')}</option>
        </select>
      </div>
    </div>
  );
}
