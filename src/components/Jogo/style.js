import styled from "styled-components";

export const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    max-width: 1170px;
    margin: 0 auto;
    padding: 30px;

    @media (max-width: 768px){
        padding: 0;
        padding-top: 20px;
    }
`

export const HangmanImage = styled.img`
    max-width: 350px;
    @media (max-width: 768px){
        max-width: 150px;
    }
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

    @media (max-width: 768px){
        font-size: 12px;
        padding: 8px;
        margin-bottom: 15px;
    }
`
export const Row = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px){
        align-items: center;
        flex-direction: column;
    }
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 768px){
        align-items: center;
    }
    
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
    color: ${props => props.wordColor};

    @media (max-width: 768px){
        font-size: 25px;
    }
`

