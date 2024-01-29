"use client";

import TitleContainer from "@/UI/TitleContainer/TitleContainer";
import React from "react";
import TableContainer from "./_components/TableContainer/TableContainer";
import { TableAPIs } from "./tableAPIs";
import { useQuery } from "@tanstack/react-query";

function Page() {
  const { data } = useQuery({
    queryKey: ["ports"],
    queryFn: () => TableAPIs.getAllPort(),
  });

  console.log(data);
  

  return (
    <>
      <TitleContainer title='Table' />
      <TableContainer />
    </>
  );
}

export default Page;
