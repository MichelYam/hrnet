import React, { ReactNode } from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types';
import * as CSS from 'csstype';

import close from '../../assets/img/close.png'

interface IProps {
    // Modal content
    children: ReactNode,
    onClose: () => void,
    open: boolean
    customStyle?: {
        content?: {}
        overlay?: {}
    }
}

const defaultStyles = {
    overlay: {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0, 0, 0, .7)",
        zIndex: "1000",
    },
    content: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        verticalAlign: "middle",
        zIndex: "1000",
        maxWidth: "500px",
        boxSizing: "border-box",
        width: "90%",
        background: "#fff",
        padding: "15px 30px",
        borderRadius: "8px",
        boxShadow: "0 0 10px #000",
        textAlign: "left",
    }
};
export const Modal = ({ children, onClose, open, customStyle }: IProps) => {
    if (!open) return null
    console.log("customStyle", customStyle);

    const custiomOverlay: CSS.Properties = customStyle?.overlay ? customStyle?.overlay : defaultStyles.overlay
    const custiomContent: CSS.Properties = customStyle?.content ? customStyle?.content : defaultStyles.content
    return (
        <>
            <div style={custiomOverlay} onClick={onClose} />
            <div style={custiomContent} >
                <StyledModalIconClose onClick={onClose} />
                {children}
            </div>
        </>
    )
}

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
    background-image: url(${close});
    cursor: pointer;
`;

Modal.prototype = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
}