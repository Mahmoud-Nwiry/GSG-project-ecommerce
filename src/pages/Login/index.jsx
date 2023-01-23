import { useState } from "react";
import Button from "../../components/Buttons/Button";
import ButtonWithIcon from "../../components/Buttons/ButtonWithIcon";
import Checkbox from "../../components/inputs/Checkbox";

import InputWithLabel from "../../components/inputs/InputWithLabel";
import OrLine from "../../components/OrLine";
import { H4, H6 } from "../../components/Typography";
import AuthLayout from "../../layouts/AuthLayout";

import GoogleIcon from "../../assets/images/google-icon.png";
import FacebookIcon from "../../assets/images/facebook-icon.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  const handelName = (newValue) => {
    setName(newValue);
  };
  const handelPassword = (newValue) => {
    setPassword(newValue);
  };

  const handelRemember = () => {
    setRemember((prev) => !prev);
  };

  return (
    <AuthLayout>
      <H4>Sign in</H4>
      <InputWithLabel
        label="Username"
        value={name}
        onChange={(e) => handelName(e.target.value)}
        type="text"
        placeholder="Email or Phone"
        style={{ marginTop: "20px" }}
      />

      <InputWithLabel
        label={<PasswordInputLabel />}
        value={password}
        onChange={(e) => handelPassword(e.target.value)}
        type="password"
        placeholder="Type here"
        style={{ marginTop: "20px" }}
      />

      <Checkbox
        style={{ marginTop: "20px" }}
        value={remember}
        onClick={handelRemember}
        label="Remember me"
      />

      <Button style={{ marginTop: "20px" }}>Log In</Button>

      <OrLine style={{ margin: "20px 0 18px" }} />

      <ButtonWithIcon
        icon={GoogleIcon}
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #E0E0E0",
          color: "#606060",
        }}
      >
        Continue with Google
      </ButtonWithIcon>

      <ButtonWithIcon
        icon={FacebookIcon}
        style={{ backgroundColor: "#4267B2", margin: '10px 0 30px'}}
      >
        Continue with Facebook
      </ButtonWithIcon>

      <H6 style={{textAlign : 'center', fontWeight : '500'}}>Don’t have an account? <Link to='../signup' style={{color : '#0D6EFD', textDecoration : 'none'}}>Register now</Link></H6>
    </AuthLayout>
  );
};

const PasswordInputLabel = () => (
  <p
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <span>Password</span>
    <span style={{ fontSize: "13px", color: "#0D6EFD" }}>Forget Password?</span>
  </p>
);

export default Login;
