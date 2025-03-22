import styled from "styled-components";
import { Logo, ControlPanel } from "./components";

const Discription = styled.div`
  font-style: italic;
`;
const HeaderContainer = ({ className }) => (
  <header className={className}>
    <Logo />
    <Discription>
      Веб-технологии
      <br />
      Написание кода
      <br />
      Разбор ошибок
    </Discription>
    <ControlPanel></ControlPanel>
  </header>
);

export const Header = styled(HeaderContainer)`
  position: fixed;
  justify-content: space-between;
  display: flex;
  top: 0;
  width: 1000px;
  height: 120px;
  padding: 20px 40px;
  background-color: #fff;
  box-shadow: 0px -2px 17px #000;
  z-index: 10;
`;
