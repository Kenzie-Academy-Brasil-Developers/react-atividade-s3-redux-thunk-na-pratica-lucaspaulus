import styled from "styled-components"


export const Button = styled.button`
    width: 170px;
    height: 45px;
    background-color: #eb4706;
    color: white;
    border: none;
    margin-top: 15px;
    border-radius: 4px;
    font-size: 22px;
    padding: 0;
    box-sizing: border-box;
    font-variant: all-small-caps;
    cursor: pointer;
     

`

export const Input = styled.input`
    width: 170px;
    height: 25px;
    border-radius: 4px;
    border: 1.5px solid transparent;
    padding-left: 10px;
    outline: none;
    color: black;
    box-sizing: border-box;

    &:hover, :focus{
        border: 1.5px solid #eb4706;
    }



`