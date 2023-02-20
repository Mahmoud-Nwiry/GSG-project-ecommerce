import React, { useEffect, useState } from "react";
import { AlertStyled } from "./style";

const Alert = ({ message, type, isOpen }) => {
  const [style, setStyle] = useState({ background: "#ccc", color: "#333" });

  useEffect(() => {
    setStyle((prev) => {
      if (type === "success")
        return { background: "#a6d9a9", color: "#439c47" };
      else if (type === "error")
        return { background: "#ff99b7", color: "#e50043" };
      else return { background: "#ccc", color: "#333" };
    });
  }, [isOpen, type]);

  return (
    <AlertStyled
      background={style.background}
      color={style.color}
      isOpen={isOpen}
    >
      {message}
    </AlertStyled>
  );
};

export default Alert;
