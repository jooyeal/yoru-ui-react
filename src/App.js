import "./App.css";
import React from "react";
import Router from "./Router";
import HeaderBar from "./lib/HeaderBar";
import Icon from "./lib/Icon";
import IconButton from "./lib/IconButton";
import SideBar from "./lib/SideBar";
function App() {
  const [openSide, setOpenSide] = React.useState(false);
  return (
    <>
      <HeaderBar
        left={{
          content: (
            <IconButton onClick={() => setOpenSide((prev) => !prev)}>
              <Icon size="sm" color="#ffffff">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
              </Icon>
            </IconButton>
          ),
          align: "start",
        }}
        center={{ content: <div>YORU-UI</div>, align: "center" }}
        right={{ content: <div>right</div>, align: "end" }}
      ></HeaderBar>
      <div style={{ paddingTop: "4rem" }}>
        <Router>
          <SideBar
            routingList={[
              {
                title: "Yoru UI",
                content: [{ subTitle: "What is this?", to: "/" }],
              },
              {
                title: "Color List",
                content: [{ subTitle: "Material Color", to: "/materialcolor" }],
              },
              {
                title: "Component",
                content: [
                  { subTitle: "Button", to: "/component/button" },
                  { subTitle: "Icon", to: "/component/icon" },
                  { subTitle: "Select", to: "/component/select" },
                  { subTitle: "TextField", to: "/component/textfield" },
                  { subTitle: "HeaderBar", to: "/component/headerbar" },
                  { subTitle: "SideBar", to: "/component/sidebar" },
                  { subTitle: "CheckBox", to: "/component/checkbox" },
                  { subTitle: "Radio", to: "/component/radio" },
                  { subTitle: "ToolTip", to: "/component/tooltip" },
                  { subTitle: "Badge", to: "/component/badge" },
                ],
              },
              {
                title: "TestPage",
                content: [{ subTitle: "Test", to: "/testpage" }],
              },
            ]}
            open={openSide}
            onClose={() => setOpenSide(false)}
          ></SideBar>
        </Router>
      </div>
    </>
  );
}

export default App;
