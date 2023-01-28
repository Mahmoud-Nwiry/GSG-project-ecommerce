import React from "react";
import { AuthCardStyled } from "./style";

import Avatar from "../../assets/images/avatar.png";
import { Body1 } from "../Typography";
import Button from "../Buttons/Button";

const AuthCard = () => {
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
      <Button>Join now</Button>
      <Button className="white">Log in</Button>
    </AuthCardStyled>
  );
};

export default AuthCard;
