import TitleContainer from "@/shared/components/TitleContainer/TitleContainer";
import { loadTranslations } from "ni18n";
import React from "react";
import { useTranslation } from "react-i18next";
import { ni18nConfig } from "../../ni18n.config";

function index() {
  const { t } = useTranslation();
  return (
    <>
      <TitleContainer title={t("dashboard")} />
    </>
  );
}

export default index;
