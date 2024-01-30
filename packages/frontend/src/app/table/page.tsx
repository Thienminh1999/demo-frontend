"use client";

import TitleContainer from "@/UI/TitleContainer/TitleContainer";
import React from "react";
import TableContainer from "./_components/TableContainer/TableContainer";
import { useTranslation } from 'next-i18next'

function Page() {
  const { t } = useTranslation('table')
  return (
    <>
      <TitleContainer title={t('table')} />
      <TableContainer />
    </>
  );
}

export default Page;
