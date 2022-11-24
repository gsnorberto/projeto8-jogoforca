import styled from "styled-components";

export const Key = styled.button`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    margin: 5px;
    width: 40px;
    height: 40px;
    border: 1px solid #7AA7C7;
    border-radius: 3px;
    text-transform: uppercase;

    &.disabledButton{
        background-color: #798A9F;
        color: #9FAAB5;
    }
    &.enabledButton{
        background-color: #E1ECF4;
        color: #39739D;
        &:hover{
            cursor: pointer;
            background-color: #39739D;
            color: #E1ECF4;
        }
    }

    @media (max-width: 768px){
        width: 30px;
        height: 30px;
        margin: 3px;
    }
`