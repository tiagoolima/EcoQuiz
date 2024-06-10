import styled from "styled-components";

export const Tela = styled.div`
    background-color: #E0FFFF;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 480px) {
        overflow: hidden;
    }
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 70vh;

    @media (max-width: 480px) {
        height: 50vh;
    }
`;

export const Imagem = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    height: 70vh;

    @media (max-width: 768px) {
        width: 70vw;
        height: 50vh;
    }

    @media (max-width: 480px) {
        width: 80vw;
        height: 40vh;
    }
`;

export const ImagemLogo = styled.img`
    height: 9vh;
    margin: 10px auto;
    display: block;

    @media (max-width: 768px) {
        height: 7vh;
    }

    @media (max-width: 480px) {
        height: 5vh;
    }
`;
