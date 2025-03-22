import { useSelector } from "react-redux";
import { Button } from "../button/button";
import {
  selectModalOnConfirm,
  selectModalisOpen,
  selectModalonCancel,
  selectModalText,
} from "../../selectors";
import styled from "styled-components";

const ModalContainer = ({ className }) => {
  const isOpen = useSelector(selectModalisOpen);
  const text = useSelector(selectModalText);
  const onConfirm = useSelector(selectModalOnConfirm);
  const onCancel = useSelector(selectModalonCancel);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={className}>
      <div className="overlay"></div>
      <div className="box">
        <h3>{text}</h3>
        <div className="buttons">
          <Button width="120px" onClick={onConfirm}>
            Да
          </Button>
          <Button width="120px" onClick={onCancel}>
            Отмена
          </Button>
        </div>
      </div>
    </div>
  );
};
export const Modal = styled(ModalContainer)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;

  & .overlay {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
  }

  & .box {
    position: relative;
    top: 50%;
    background-color: #fff;
    border: 3px solid #000;
    padding: 0 20px 20px;
    margin: auto;
    width: 400px;
    z-index: 30;
    text-align: center;
    transform: translate(0, 50%);
  }

  & .buttons {
    display: flex;
    justify-content: center;
  }

  & .buttons button {
    margin: 0 5px;
  }
`;
