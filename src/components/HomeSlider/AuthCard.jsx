import React from "react";
import { AuthCardStyled } from "./style";

import Avatar from "../../assets/images/avatar.png";
import { Body1 } from "../Typography";
import Button from "../Buttons/Button";
import { useNavigate } from "react-router-dom";

const AuthCard = () => {

  const navigate = useNavigate();

  const login = () => navigate('/auth/login')
  const signup = () => navigate('/auth/signup')

  return (
    <AuthCardStyled>
      <div className="info">
        <div className="image">
          <img src={Avatar} alt="avatar" />
        </div>
        <Body1>
          Hi, user <br />
          let’s get stated
        </Body1>
      </div>
      <Button onClick={login}>Join now</Button>
      <Button className="white" onClick={signup}>Log in</Button>
    </AuthCardStyled>
  );
};

export default AuthCard;
