import React, { useState } from "react";
import { Container } from "./ActionContainer.styles";
import StyledButton from "@/UI/StyledButton/StyledButton";
import FormContainer from "../FormContainer/FormContainer";
import { Modal } from "antd";

function ActionContainer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Container>
      <StyledButton onClick={showModal}>Add New Port</StyledButton>
      <Modal
        title="Add New Port"
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <FormContainer onCancel={handleCancel} onSubmitForm={handleOk} />
      </Modal>
    </Container>
  );
}

export default ActionContainer;
