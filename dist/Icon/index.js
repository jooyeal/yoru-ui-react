function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled from "styled-components";

const setSize = size => {
  let returnSize = "";

  switch (size) {
    case "sm":
      returnSize = "1.5rem";
      break;

    case "md":
      returnSize = "2.15rem";
      break;

    case "lg":
      returnSize = "2.75rem";
      break;

    default:
      returnSize = "2.15rem";
  }

  return returnSize;
};

const Wrapper = styled.svg`
  width: ${props => `${setSize(props.size)}`};
  fill: ${props => props.color};
`;
export default function Icon({
  size,
  color,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Wrapper, _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    "aria-hidden": "true",
    size: size,
    color: color
  }), children);
}