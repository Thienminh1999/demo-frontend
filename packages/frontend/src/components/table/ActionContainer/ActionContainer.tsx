import React, { useState } from "react";
import { Container } from "./ActionContainer.styles";
import StyledButton from "@/shared/components/StyledButton/StyledButton";
import FormContainer from "../FormContainer/FormContainer";
import { Modal } from "antd";
import { useTranslation } from "react-i18next";

function ActionContainer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

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
      <StyledButton onClick={showModal}>{t('addnewport')}</StyledButton>
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
