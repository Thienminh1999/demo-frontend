import TitleContainer from "@/shared/components/TitleContainer/TitleContainer";
import React from "react";
import TableContainer from "@/components/table/TableContainer/TableContainer";
import ActionContainer from "@/components/table/ActionContainer/ActionContainer";
import i18n from "@/locales/core/i18n";

function Page() {
  return (
    <>
      <TitleContainer title={i18n.getText('common.portmanagement')} />
      <ActionContainer />
      <TableContainer />
    </>
  );
}

export default Page;
