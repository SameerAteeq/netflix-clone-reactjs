import React, { useState, useEffect } from "react";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import user from "../../../assets/images/users/user.png";
import user1 from "../../../assets/images/users/1.png";
import user2 from "../../../assets/images/users/2.png";
import user3 from "../../../assets/images/users/3.png";
import "../../../style/CommonNav.css";
import Loader from "../loader";
const CommonNav = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/", { replace: true });
      setLoading(false);
    }, 1000);
  };
  useEffect(() => {
    return () => {
      clearTimeout();
    };
  }, []);

  if (loading) return <Loader />;
  return (
    <div className={`${show ? "navBlack" : ""} navbar`}>
      <div>
        <img
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/home")}
          src={logo}
          height="40px"
          width="120px"
        />
      </div>
      <div>
        <div className="d-flex align-items-center gap-2">
          <img src={user} width="40px" height="40px" />
          <DropdownButton
            autoClose={true}
            menuVariant="dark"
            variant="transparent"
            id="dropdown-basic-button"
            className="dropdown-menu-end "
            style={{ background: "transparent" }}
          >
            <Dropdown.Item
              style={{ borderBottom: "1px solid #444", padding: "5px" }}
              href="#"
              className="d-flex  align-items-center gap-2 user"
            >
              <img src={user1} width="40px" height="40px" />
              <p
                style={{
                  color: "white",
                  textAlign: "center",
                }}
              >
                User 1
              </p>
            </Dropdown.Item>
            <Dropdown.Item
              style={{ borderBottom: "1px solid #444", padding: "5px" }}
              href="#"
              className="d-flex align-items-center gap-1"
            >
              <img src={user2} width="40px" height="40px" />
              <p
                style={{
                  color: "white",
                  textUnderlineOffset: "1px",
                }}
              >
                User 2
              </p>
            </Dropdown.Item>
            <Dropdown.Item
              style={{ borderBottom: "1px solid #444", padding: "5px" }}
              href="#"
              className="d-flex align-items-center gap-1"
            >
              <img src={user3} width="40px" height="40px" />
              <p
                style={{
                  color: "white",
                }}
              >
                User 3
              </p>
            </Dropdown.Item>
            <Dropdown.Item
              onClick={handleClick}
              style={{
                color: "white",
                padding: "5px",
                textAlign: "center",
              }}
            >
              Sign Out
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </div>
  );
};

export default CommonNav;
