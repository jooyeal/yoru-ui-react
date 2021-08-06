import React from "react";
import styled from "styled-components";
import { GREEN } from "../matieralColor";
const Wrapper = styled.div`
  z-index: 100;
  position: fixed;
  display: flex;
  width: 100%;
  height: 3.5rem;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : GREEN.GREEN400};
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: bold;
`;
const Box = styled.div`
  display: flex;
  justify-content: ${props => props.align === "center" ? "center" : `flex-${props.align}`};
  align-items: center;
  width: 33.3%;
  margin: 0 14px;
`;
export default function ({
  left,
  center,
  right,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Wrapper, rest, /*#__PURE__*/React.createElement(Box, {
    align: left.align ? left.align : "start"
  }, left.content), /*#__PURE__*/React.createElement(Box, {
    align: center.align ? center.align : "center"
  }, center.content), /*#__PURE__*/React.createElement(Box, {
    align: right.align ? right.align : "start"
  }, right.content));
}