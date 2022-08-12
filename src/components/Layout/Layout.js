import React, { useState } from "react";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

export default function Layout({ children }) {
  const [state, setstate] = useState(true);
  const [route, setRoute] = useState(true);
  let navigate = useNavigate();

  const handleNav = () => {
    setRoute(!route);
    if (!route) {
      navigate("/", { replace: true });
      setstate(true);
    } else if (route) {
      navigate("/page-two", { replace: true });
      setstate(false);
    }
  };

  return (
    <div>
      <Navbar
        button={
          <Button cta={handleNav} label={`Navigate to Page ${state ? 2 : 1}`} />
        }
      />
      <div className="container py-5">{children}</div>
    </div>
  );
}
