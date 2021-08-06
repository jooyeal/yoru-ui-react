function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import styled from "styled-components";
import { GREEN, GREY } from "../matieralColor";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 18.5px 14px;
`;
const Label = styled.label`
  position: absolute;
  font-size: ${props => props.labelUp ? "1rem" : "0.9rem"};
  color: ${props => props.isFocused ? props.color ? props.color : GREEN.GREEN400 : GREY.GREY600};
  transition: all 0.1s ease-out;
  top: ${props => props.labelUp ? 0 : "0.5rem"};
  left: ${props => props.labelUp ? "1rem" : "1.25rem"};
`;
const InputBox = styled.div`
  position: absolute;
  bottom: 18.5px;
  width: ${props => props.isFocused ? props.width : "0px"};
  border-bottom: 0.165rem solid
    ${props => props.color ? props.color : GREEN.GREEN400};
  transition: width 0.2s ease-in;
  z-index: 1;
`;
const Input = styled.input`
  width: ${props => props.width};
  height: 1.65rem;
  border: none;
  outline: none;
  box-sizing: border-box;
  border-bottom: 0.12rem solid ${GREY.GREY600};
  background-color: #ffffff;
`;
export default function ({
  label,
  width = "8rem",
  color,
  ...rest
}) {
  const [isFocused, setIsFocused] = React.useState(false);
  const [labelUp, setLabelUp] = React.useState(false);
  const inputRef = React.useRef();
  return /*#__PURE__*/React.createElement(Wrapper, {
    onFocus: () => {
      setIsFocused(true);
      setLabelUp(true);
    },
    onBlur: () => {
      if (inputRef.current.value === "") setLabelUp(false);
      setIsFocused(false);
    }
  }, /*#__PURE__*/React.createElement(Label, {
    labelUp: labelUp,
    color: color,
    isFocused: isFocused
  }, label), /*#__PURE__*/React.createElement(InputBox, {
    width: width,
    isFocused: isFocused,
    color: color
  }), /*#__PURE__*/React.createElement(Input, _extends({
    ref: inputRef
  }, rest, {
    type: "text",
    width: width
  })));
}