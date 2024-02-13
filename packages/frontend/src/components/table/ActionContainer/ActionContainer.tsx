import React, { useState } from "react";
import { Container } from "./ActionContainer.styles";
import StyledButton from "@/shared/components/StyledButton/StyledButton";
import FormContainer from "../FormContainer/FormContainer";
import { Modal } from "antd";
import { usePortStore } from "@/store/usePortStore";
import i18n from "@/locales/core/i18n";

function ActionContainer() {
  const { modalState, toggleModal } = usePortStore();

  const showModal = () => {
    toggleModal(true);
  };

  const handleOk = () => {
    toggleModal(false);
  };

  const handleCancel = () => {
    toggleModal(false);
  };
  return (
    <Container>
      <StyledButton onClick={showModal}>{i18n.getText('common.addnewport')}</StyledButton>
      <Modal
        title={i18n.getText('common.addnewport')}
        open={modalState}
        footer={null}
        onCancel={handleCancel}
      >
        <FormContainer onCancel={handleCancel} onSubmitForm={handleOk} />
      </Modal>
    </Container>
  );
}

export default ActionContainer;
