
import styled from 'styled-components';

export const Button= styled.button`
display: flex;
background-color: ${(p)=> p.color === "gray" ? "gray":"cadetblue"};
border: none;
padding: 12.5px 0;
justify-content: center;
align-items: center;
font-size: 18px;
color: #fff;
font-weight: normal;
border-radius: 2.5px;
width: ${(p)=> p.width === "100%" ?"100%": "35%"};
cursor: pointer;
`
export const Menustyled = styled.div`
position: absolute;
display: ${({open})=> open? "flex":"none"};
right: 0;
width: 100%;
margin: 0;
padding: 20px 0;
background-color:  #111;
flex-direction: column;
border-top: 1px solid #222;
border-bottom: 1px solid #222;
text-align: center;
z-index: 100;
`