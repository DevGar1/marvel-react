import styled from "styled-components";
import colors from "./colors";

export const PrimaryButton = styled.button`
  background-color: ${colors.primary};
  color: ${colors.primarySecond};
  border: none;
  border-radius: 15px;
  width: 80%;
  height: 40px;
  font-size: 2rem;

  a {
    color: white;
    text-decoration: none;
  }
`;


export const CheckButton = styled.button`
background-color: ${colors.primarySecond};
color: ${colors.primary};
width: 200px;
border-radius: 20px;
height: 30px;
border: none;
font-size: 1.5rem;
margin: 0 20px;
-webkit-box-shadow: 0px 9px 14px 8px rgba(0, 0, 0, 0.42);
box-shadow: 0px 9px 14px 8px rgba(0, 0, 0, 0.42);
&:hover {
  transform: scale(1.1);
}
`;