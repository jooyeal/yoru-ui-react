function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Icon from "../Icon";
import IconButton from "../IconButton";
import { GREEN } from "../matieralColor";
const Wrapper = styled.div`
  z-index: 1500;
  position: fixed;
  top: 0;
  left: 0;
  visibility: ${props => props.open ? "visible" : "hidden"};
  width: ${props => props.open ? "17.5rem" : "0rem"};
  transition: all 0.3s ease-out;
  min-height: 100vh;
  background-color: ${GREEN.GREEN500};
  overflow-y: auto;
`;
const Header = styled.div`
  height: 3.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Content = styled.div`
  visibility: ${props => props.open ? "visible" : "hidden"};
  width: 17.5rem;
  transition: all 0.3s ease-out;
`;
const RoutingContainer = styled.div``;
const Title = styled.div`
  display: ${props => props.open ? "flex" : "none"};
  align-items: center;
  height: 3rem;
  :hover {
    background-color: ${GREEN.GREEN400};
  }
  cursor: pointer;
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: bold;
`;
const TitleText = styled.span`
  margin-left: 2rem;
`;
const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  height: ${props => props.content === "true" ? props.height : props.content === "true" ? props.height : "0rem"};
  transition: all 0.1s ease-out;
  background-color: ${GREEN.GREEN600};
`;
const SubTitleForHover = styled.div`
  display: ${props => props.open && props.content === "true" && props.top === "true" ? "block" : "none"};

  background-color: ${props => props.color};
  :hover {
    background-color: ${GREEN.GREEN400};
  }
`;
const SLink = styled(Link)`
  display: ${props => props.open && props.content === "true" && props.top === "true" ? "block" : "none"};
  text-decoration: none;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  align-items: center;
  margin-left: 4rem;
  height: 2rem;
`;

function Routing({
  openState,
  title,
  content,
  pathName
}) {
  const [contentOpen, setContentOpen] = React.useState(openState === false ? false : false);
  React.useEffect(() => {
    content.filter(item => item.to === pathName).length === 1 ? setContentOpen(true) : setContentOpen(false);
  }, [pathName, openState]);
  return /*#__PURE__*/React.createElement(RoutingContainer, {
    open: openState
  }, /*#__PURE__*/React.createElement(Title, {
    open: openState,
    onClick: () => setContentOpen(prev => !prev)
  }, /*#__PURE__*/React.createElement(TitleText, {
    open: openState
  }, title)), /*#__PURE__*/React.createElement(SubTitle, {
    content: `${contentOpen}`,
    top: `${openState}`,
    height: `${content.length * 2}rem`
  }, content.map((item, index) => /*#__PURE__*/React.createElement(SubTitleForHover, {
    open: openState,
    color: item.to === pathName ? GREEN.GREEN800 : "",
    content: `${contentOpen}`,
    top: `${openState}`,
    key: index
  }, /*#__PURE__*/React.createElement(SLink, {
    open: openState,
    content: `${contentOpen}`,
    top: `${openState}`,
    to: item.to
  }, item.subTitle)))));
}

export default withRouter(function SideBar({
  open = true,
  routingList = [{
    title: "title sample",
    content: [{
      subTitle: "to home",
      to: "/"
    }, {
      subTitle: "to react",
      to: "/react"
    }]
  }, {
    title: "title sample2",
    content: [{
      subTitle: "to javascript",
      to: "/javascript"
    }, {
      subTitle: "to css",
      to: "/css"
    }]
  }],
  onClose,
  ...rest
}) {
  const [openState, setOpenState] = React.useState(open);
  const [timeOpen, setTimeOpen] = React.useState();
  const ref = React.useRef();
  React.useEffect(() => {
    setOpenState(open);
    setTimeout(() => setTimeOpen(open), 200);
  }, [open]);
  React.useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpenState(false);
        onClose(e);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, ref]);
  return /*#__PURE__*/React.createElement(Wrapper, _extends({}, rest, {
    ref: ref,
    open: open
  }), /*#__PURE__*/React.createElement(Header, null, /*#__PURE__*/React.createElement(IconButton, {
    onClick: e => {
      setOpenState(false);
      if (onClose) onClose(e);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    style: {
      cursor: "pointer"
    },
    color: "#ffffff",
    size: "sm"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
  })))), /*#__PURE__*/React.createElement(Content, {
    open: timeOpen
  }, routingList.map((item, index) => /*#__PURE__*/React.createElement(Routing, {
    key: index,
    openState: timeOpen,
    title: item.title,
    content: item.content,
    pathName: rest.location.pathname
  }))));
});