function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled from "styled-components";
import { darken } from "polished";
import { GREEN } from "../matieralColor";

const setSize = size => {
  let returnSize = ``;

  switch (size) {
    case "sm":
      returnSize = `
      font-size: 0.8125rem;
      min-width: 36px;
      max-height:24px;
      padding: 4px 18px;
      `;
      break;

    case "md":
      returnSize = `
      font-size: 0.8725rem;
      min-width: 48px;
      max-height:36px;
      padding: 6px 20px;
      `;
      break;

    case "lg":
      returnSize = `
      font-size: 0.9325rem;
      min-width: 64px;
      max-height:48px;
      padding: 8px 22px;
      `;
      break;

    default:
      returnSize = `
      font-size: 0.8725rem;
      min-width: 48px;
      max-height:36px;
      padding: 6px 20px;
      `;
      break;
  }

  return returnSize;
};

const Wrapper = styled.button`
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  outline: none;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 3px;
  background-color: ${props => props.color};
  ${props => `${setSize(props.size)}`};
  :hover {
    background-color: ${props => props.disabled ? props.color : `${darken(0.1, props.color)}`};
  }
  :active {
    background-color: ${props => props.disabled ? props.color : `${darken(0.3, props.color)}`};
  }
  text-transform: uppercase;
  cursor: pointer;
`;
const DisableBox = styled.div`
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0.25rem;
`;
export default function ({
  size = "md",
  color = GREEN.GREEN400,
  children,
  disabled = false,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Wrapper, _extends({}, rest, {
    size: size,
    color: color,
    disabled: disabled
  }), children, /*#__PURE__*/React.createElement(DisableBox, {
    style: {
      display: disabled ? "block" : "none"
    }
  }));
}