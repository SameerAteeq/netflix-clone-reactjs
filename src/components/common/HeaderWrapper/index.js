import React from "react";
import "./headerWrapper.css";
const HeaderWrapper = ({ children, ...restprops }) => {
  return <header {...restprops}>{children}</header>;
};

export default HeaderWrapper;
