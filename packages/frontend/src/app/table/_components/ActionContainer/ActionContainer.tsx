import React from "react";
import { Container } from "./ActionContainer.styles";
import StyledButton from "@/UI/StyledButton/StyledButton";
import useStyledModal from "@/UI/StyledModal/StyledModal";

function ActionContainer() {
  return (
    <Container>
      <StyledButton>Add New Port</StyledButton>
    </Container>
  );
}

export default ActionContainer;
