import styled from "styled-components";
import { AiFillShopping } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillBasket2Fill } from "react-icons/bs";

type Props = {
  theme: number;
}

export const Nav = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100px;
  background-color: ${({theme}) => theme.colors.navigation}
`;

export const NavPrint = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin-left: 20px;
    cursor: pointer;
  }
`;
export const PenCil = styled(BsFillPencilFill)`
  margin-left: 15px;
`;

export const NavProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  p {
    margin-left: 20px;
    cursor: pointer;
  }
`;

export const NavLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin-left: 20px;
    cursor: pointer;
  }
`;

export const Logo = styled(AiFillShopping)`
  width: 50px;
  height: 50px;
`;

export const NavRight = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
`;
export const NavLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Search = styled(BiSearchAlt2)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
export const Heart = styled(AiOutlineHeart)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
export const Basket = styled(BsFillBasket2Fill)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
// export const NavIcon: React.FC<{iconName: string}> = (props) => {

// const StyledIcon = styled(iconName)`
//   width: 30px;
//   height: 30px;
//   cursor: pointer;
// `
// return <StyledIcon  icon={iconName}/>
// }