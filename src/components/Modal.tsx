import React from 'react'
import "./Style.css";
import styled from "styled-components";


interface IModal {
    children: React.ReactNode
    onClose: () => void
}
export const Modal = ({ children, onClose }: IModal) => {
    return (
        <>
            <StyledOverlay onClick={onClose} />
            <StyledModal>
                <StyledModalClose >
                <StyledModalIconClose onClick={onClose}>Close Modal</StyledModalIconClose>
                </StyledModalClose>
                {children}
            </StyledModal>
        </>
    )
}

const StyledModal = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #FFF;
padding: 50px;
z-index: 1000;
`;

const StyledOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, .7);
z-index: 1000;
`;

const StyledModalClose = styled.div`
`;

const StyledModalIconClose = styled.button`
position: absolute;
top: 10%;
right: 10%;
width: 20px;
height: 20px;
color: #000;
cursor: pointer;
`;

