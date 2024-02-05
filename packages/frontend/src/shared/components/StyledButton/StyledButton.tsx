import React from "react";
import { ButtonContainer } from "./StyledButton.styles";
import { ButtonProps } from "antd/es/button/button";

function StyledButton(props: ButtonProps) {
  return (
    <ButtonContainer className={props.className} onClick={props.onClick}>
      {props.children}
    </ButtonContainer>
  );
}

export default StyledButton;
