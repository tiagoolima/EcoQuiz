import styled from "styled-components"

export const ContainerButton = styled.div`
    position: relative;
    height: 11vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        height: 10vh;
    }

    @media (max-width: 480px) {
        height: 9vh;
    }
`

export const ButtonContainer = styled.button`
    padding: 20px;
    border-radius: 45px;
    border: 5px solid #000000;
    width: 10vw;
    height: 10vh;
    background-color: #006400;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }

    @media (max-width: 768px) {
        width: 20vw;
        height: 8vh;
        font-size: 20px;
    }

    @media (max-width: 480px) {
        width: 30vw;
        height: 7vh;
        font-size: 16px;
    }
`
