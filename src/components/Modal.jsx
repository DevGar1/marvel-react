import { ModalComponent, ModalContent } from "../styled/div";

const Modal = (props) => {
  const { children, hide } = props;
  return (
    <ModalComponent onClick={hide}>
      <ModalContent onClick={(event) => event.stopPropagation()}>{children}</ModalContent>
    </ModalComponent>
  );
};

export default Modal;
