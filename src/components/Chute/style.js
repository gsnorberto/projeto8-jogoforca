import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    max-width: 1170px;
    margin: 0 auto;
    padding: 40px;
    margin-bottom: 30px;
`

export const Title = styled.div`
    font-size: 20px;
    margin-right: 12px;
    @media (max-width: 768px){
        font-size: 17px;
    }
`

export const Input = styled.input`
    height: 30px;
    width: 350px;
    margin-right: 12px;
    border: 1px solid #CCCCCC;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    outline: none;
    padding: 0 10px;
    @media (max-width: 768px){
        margin: 10px;
        width: 60%;
    }
    @media (max-width: 400px){
        width: 80%;
    }
`

export const Button = styled.button`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: #3C76A1;
    border: 1px solid #7AA7C7;
    background-color: #E1ECF4;
    border-radius: 3px;
    padding: 5px 15px;

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
`
export const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    

    @media (max-width: 768px){
        flex-direction: column;
    }
`