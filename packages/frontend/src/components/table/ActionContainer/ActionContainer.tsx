import React from "react";
import { Container } from "./ActionContainer.styles";
import StyledButton from "@/shared/components/StyledButton/StyledButton";
import FormContainer from "../FormContainer/FormContainer";
import { Modal } from "antd";
import { initialModalState, usePortStore } from "@/store/usePortStore";
import i18n from "@/locales/core/i18n";

function ActionContainer() {
  const { modalState, setModalState } = usePortStore();

  const showModal = () => {
    setModalState({
      ...modalState,
      isOpen: true
    });
  };

  const handleOk = () => {
    setModalState(initialModalState);
  };

  const handleCancel = () => {
    setModalState(initialModalState);
  };

  return (
    <Container>
      <StyledButton onClick={showModal}>{i18n.getText('common.addnewport')}</StyledButton>
      <Modal
        title={modalState.isEdit ? i18n.getText('common.editport') : i18n.getText('common.addnewport')}
        open={modalState.isOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <FormContainer onCancel={handleCancel} onSubmitForm={handleOk} />
      </Modal>
    </Container>
  );
}

export default ActionContainer;
