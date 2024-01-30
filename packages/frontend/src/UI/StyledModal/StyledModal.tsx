import { Modal } from "antd";
import React, { PropsWithChildren, ReactNode, useState } from "react";

function StyledModal(props: PropsWithChildren) {
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
    <Modal
      title='Basic Modal'
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {props.children}
    </Modal>
  );
}

export default StyledModal;
