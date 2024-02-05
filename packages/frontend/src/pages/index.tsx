import TitleContainer from "@/shared/components/TitleContainer/TitleContainer";
import React from "react";
import { useTranslation } from "react-i18next";

function index() {
  const { t } = useTranslation();
  return (
    <>
      <TitleContainer title={t("dashboard")} />
    </>
  );
}

export default index;
