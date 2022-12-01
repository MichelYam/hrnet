import React from 'react'
import styled from "styled-components";

interface IModal {
    children: React.ReactNode,
    onClose: () => void,
    open: boolean
}
export const Modal = ({ children, onClose, open }: IModal) => {
    if (!open) return null
    return (
        <>
            <StyledOverlay onClick={onClose} />
            <StyledModal>
                <StyledModalIconClose onClick={onClose}>Close Modal</StyledModalIconClose>
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
vertical-align: middle;
z-index: 1000;
max-width: 500px;
box-sizing: border-box;
width: 90%;
background: #fff;
padding: 15px 30px;
border-radius: 8px;
box-shadow: 0 0 10px #000;
text-align: left;
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

const StyledModalIconClose = styled.button`
position: absolute;
    top: -12.5px;
    right: -12.5px;
    display: block;
    width: 30px;
    height: 30px;
    border: 0;
    border-radius: 50%;
    text-indent: -9999px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("../../assets/img/close.png");
    cursor: pointer;
`;