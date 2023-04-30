import styled from "styled-components";

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    `;
    
    
export const ModalOverLay = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #000000;
    opacity: 0.5
`;

export const ModalWindow = styled.div`
    position: absolute;
    width: 300px;
    height: 200px;
    background-color: white;
    border-radius: 15px;
    opacity: 1;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const ModalCloseButton = styled.button`
    background: transparent;
    border: none;
    padding: 5px;
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
`;

export const ModalText = styled.p`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;