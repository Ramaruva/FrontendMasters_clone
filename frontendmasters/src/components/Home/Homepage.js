import  styled, {css}from "styled-components";

export const Cbtn = styled.button`
height: 60px;
border-radius: 50px;
font-family: "Open Sans", sans-serif;
margin-right: 15px;
margin-left: 15px;
margin-bottom: 10px;
width: 250px;
cursor: pointer;
color: white;
font-size:20px;
border:none;
&:hover {
    background: rgb(212, 53, 48);
  }
background: rgb(192,45,40);
${props => props.primary && css`
    background:rgb(201,79,23);
    &:hover {
    background: rgb(231, 104, 46);
  }
   
  `}

`
export default Cbtn