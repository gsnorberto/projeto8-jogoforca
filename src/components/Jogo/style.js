import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    max-width: 1170px;
    margin: 0 auto;
    padding: 30px;
`

export const HangmanImage = styled.img`
    max-width: 350px;
`

export const StartButton = styled.button`
    border: 0;
    background-color: #27AE60;
    margin-top: 30px;
    padding: 15px;
    color: #FFFFFF;
    font-size: 16px;
    border-radius: 8px;

    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }
`
export const Row = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`

export const Keys = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 650px;
    margin: 0 auto;
    margin-top: 50px;
`

export const Underline = styled.div`
    font-size: 35px;
    font-weight: 700;
`

