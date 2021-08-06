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
  top: ${props => props.labelUp ? 0 : "1rem"};
  left: ${props => props.labelUp ? "1rem" : "1.25rem"};
  z-index: -1;
`;
const SelectorBox = styled.div`
  position: absolute;
  bottom: 18.5px;
  transition: width 0.2s ease-in;
  width: ${props => props.isFocused ? props.width : "0px"};
  border-bottom: 0.165rem solid
    ${props => props.color ? props.color : GREEN.GREEN400};
`;
const Selector = styled.div`
  width: ${props => props.width};
  height: 1.65rem;
  border: none;
  outline: none;
  box-sizing: border-box;
  border-bottom: 0.12rem solid ${GREY.GREY600};
  cursor: pointer;
`;
const Menu = styled.div`
  visibility: ${props => props.menuIsFocused ? "visible" : "hidden"};
  position: absolute;
  margin-top: 1.65rem;
  min-height: 0rem;
  max-height: 15rem;
  border-left: 0.0525rem solid
    ${props => props.color ? props.color : GREEN.GREEN400};
  border-right: 0.0525rem solid
    ${props => props.color ? props.color : GREEN.GREEN400};
  border-bottom: 0.0525rem solid
    ${props => props.color ? props.color : GREEN.GREEN400};
  overflow: auto;
  z-index: 10;
  background-color: white;
`;
const Ul = styled.ul`
  padding: 0;
`;
const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.menuIsFocused ? props.width : 0};
  height: 1.75rem;
  list-style: none;
  cursor: pointer;
  background-color: ${props => props.isSelected ? GREY.GREY300 : "white"};
  :hover {
    background-color: ${props => props.isSelected ? GREY.GERY300 : GREY.GREY200};
  }
`;
export default function Select({
  initValue = "",
  label,
  width = "8rem",
  list,
  color,
  onClick,
  onBlur,
  ...rest
}) {
  const [isFocused, setIsFocused] = React.useState(false);
  const [menuIsFocused, setMenuIsFocused] = React.useState(false);
  const [labelUp, setLabelUp] = React.useState(initValue ? true : false);
  const [value, setValue] = React.useState(initValue);
  const ref = React.useRef();
  React.useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setMenuIsFocused(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return /*#__PURE__*/React.createElement(Wrapper, _extends({}, rest, {
    onFocus: () => {
      setIsFocused(true);
      setMenuIsFocused(true);
      setLabelUp(true);
    },
    onBlur: () => {
      if (value === "") setLabelUp(false);
      setIsFocused(false);
    }
  }), /*#__PURE__*/React.createElement(Label, {
    labelUp: labelUp,
    isFocused: isFocused,
    color: color
  }, label), /*#__PURE__*/React.createElement(SelectorBox, {
    width: width,
    isFocused: isFocused,
    color: color
  }), /*#__PURE__*/React.createElement(Selector, {
    width: width,
    tabIndex: 0
  }, value), /*#__PURE__*/React.createElement(Menu, {
    menuIsFocused: menuIsFocused,
    width: width,
    color: color
  }, /*#__PURE__*/React.createElement(Ul, {
    tabIndex: 0,
    ref: ref,
    onBlur: e => {
      e.target.value = value;
      setMenuIsFocused(false);
      if (onBlur) onBlur(e);
    }
  }, list?.map((item, index) => /*#__PURE__*/React.createElement(Li, {
    key: index,
    isSelected: value === item ? true : false,
    width: width,
    menuIsFocused: menuIsFocused,
    onClick: e => {
      e.target.value = item;
      setValue(item);
      setMenuIsFocused(false);
      if (onClick) onClick(e);
    }
  }, item)))));
}