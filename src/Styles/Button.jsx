import styled from 'styled-components';

export const Button = styled.button`
display: inline-block;
padding:10px;
margin-top: 10px;
background-color: black;
color: white;
outline: none;
border: none;
border-radius: 4px;
transition:all .2s ease-in;
&:hover{
    background-color: grey;
}
a{
    text-decoration: none;
    color: white;
}
`