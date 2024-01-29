import React from "react";
import { Container } from "./TitleContainer.style";

type Props = {
  title: string;
};

function TitleContainer({ title }: Props) {
  return <Container>{title}</Container>;
}

export default TitleContainer;
