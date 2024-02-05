"use client";

import TitleContainer from "@/shared/components/TitleContainer/TitleContainer";
import React from "react";
import TableContainer from "@/components/table/TableContainer/TableContainer";
import { useTranslation } from 'react-i18next'
import ActionContainer from "@/components/table/ActionContainer/ActionContainer";

function Page() {
  const { t } = useTranslation();
  return (
    <>
      <TitleContainer title={t('table')} />
      <ActionContainer />
      <TableContainer />
    </>
  );
}

export default Page;
