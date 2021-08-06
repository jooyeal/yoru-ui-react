import { darken } from "polished";
import React from "react";
import styled, { keyframes } from "styled-components";
const click = keyframes`
    0% {
        background-color: rgba(0, 0, 0, 0.05);
    }
    50% {
        background-color: rgba(0, 0, 0, 0.1);
    }
    100% {
        background-color: rgba(0, 0, 0, 0);
    }
`;
const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: 50%;
  :active {
    animation: ${click} 0.35s ease-out;
  }
  :hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  transition: transform 0.2s ease-out;
`;
export default function ({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Wrapper, rest, children);
}