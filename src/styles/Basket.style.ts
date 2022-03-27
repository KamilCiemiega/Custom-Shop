import styled from "styled-components";
import { AiOutlineClose } from 'react-icons/ai';


export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  inset: 0px;
  background-color: rgba(11, 11, 11, 0.5);
  z-index: 1;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  transition: all 0.3s ease 0s;
`;

export const Right = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  top: 0px;
  bottom: 0px;
  right: 0px;
  z-index: 2
  height: 100vh;
  overflow: auto;
  box-shadow: rgb(54 54 54 / 20%) 2px 0px 10px,
    rgb(54 54 54 / 20%) -2px 0px 10px;
  background-color: ${({theme}) => theme.colors.basket}
`;

export const RightTop = styled.div`
display: flex;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: space-between;
    p{
      font-size: 25px;
      margin-left: 5%;
    }
`
export const Close = styled(AiOutlineClose)`
margin-right: 5%;
height: 25px;
width: 25px;
cursor:pointer;
`

export const After = styled.div`
width: 100%;
    height: 2px;
    background: ${({theme}) => theme.colors.navigation}
`
export const Button = styled.button`
border: none;
box-shadow: rgb(0 0 0 / 15%) 0px 2px 8px 0px;
cursor: pointer;
font-weight: 700;
border-radius: 50px;
background-color: rgb(39, 39, 39);
color: rgb(255, 255, 255);
padding: 17px 32px !important;
font-size: 1.4rem !important;
width:300px;
margin-top:60px;
transition: all 0.3s ease 0s;
&:hover{
  background: ${({theme}) => theme.colors.navigation}
}
`
