import { View, Text, Modal, ModalProps } from "react-native";
import React from "react";

type Props = ModalProps & {
  isOpen: boolean;
};

export default function CustomModal({ isOpen, children, ...rest }: Props) {
  return (
    <Modal visible={isOpen} transparent statusBarTranslucent {...rest}>
      {children}
    </Modal>
  );
}
