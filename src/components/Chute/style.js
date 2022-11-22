import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    max-width: 1170px;
    margin: 0 auto;
    padding: 30px;
`

export const Title = styled.div`
    font-size: 20px;
    margin-right: 12px;
`

export const Input = styled.input`
    height: 30px;
    width: 350px;
    margin-right: 12px;
    border: 1px solid #CCCCCC;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    outline: none;
    padding: 0 10px;
`

export const Button = styled.button`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: #3C76A1;
    border: 1px solid #3C76A1;
    background-color: #E1ECF4;
    border-radius: 3px;
    padding: 5px 15px;

    &:hover{
        background-color: #3C76A1;
        color: #FFFFFF;
        cursor: pointer;
    }
    
`
export const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`