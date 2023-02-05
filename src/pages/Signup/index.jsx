import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import Checkbox from "../../components/inputs/Checkbox";
import InputWithLabel from "../../components/inputs/InputWithLabel";
import { H4, H6, Label } from "../../components/Typography";
import AuthLayout from "../../layouts/AuthLayout";
import { PhoneStyled } from "./style";

const initValues = {
  name: "",
  surename: "",
  email: "",
  password: "",
  rePassword: "",
  agree: false,
};

const Signup = () => {
  const [data, setData] = useState(initValues);

  const handelData = (elem) => {
    const { id, value } = elem;
    setData((prev) => {
      return { ...prev, [id]: value };
    });
  };

  const handelCheckbox = () => {
    setData((prev) => ({ ...prev, agree: !prev.agree }));
  };

  return (
    <AuthLayout>
      <H4>Register</H4>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          gap: "10px",
        }}
      >
        <InputWithLabel
          label="Name"
          placeholder="Type here"
          type="text"
          id="name"
          value={data.name}
          onChange={(e) => handelData(e.target)}
        />
        <InputWithLabel
          label="Surename"
          placeholder="Type here"
          type="text"
          id="surename"
          value={data.surename}
          onChange={(e) => handelData(e.target)}
        />
      </div>

      <InputWithLabel
        label="Your e-mail "
        placeholder="example@mail.com"
        type="email"
        id="email"
        value={data.email}
        onChange={(e) => handelData(e.target)}
        style={{
          marginTop: "20px",
        }}
      />

      <Label style={{marginTop : 20, display: 'block'}}>Phone</Label>
      <PhoneStyled>
        <select>
          <option>UZ +998</option>
        </select>
        <input type="text" placeholder="00-000-00-00" />
      </PhoneStyled>

      <InputWithLabel
        label="Password"
        placeholder="At least 6 characters."
        type="password"
        id="password"
        value={data.password}
        onChange={(e) => handelData(e.target)}
        style={{
          marginTop: "20px",
        }}
      />

      <InputWithLabel
        label="Repeat password"
        placeholder="Type here"
        type="password"
        id="rePassword"
        value={data.email}
        onChange={(e) => handelData(e.target)}
        style={{
          marginTop: "20px",
        }}
      />

      <Button style={{ marginTop: "25px" }}>Register now</Button>

      <Checkbox
        style={{ marginTop: "20px" }}
        value={data.gree}
        onClick={handelCheckbox}
        label={<TermsLabel />}
      />

      <hr style={{border: '1px solid #E0E0E0', margin : '28px 0 20px'}} />

      <H6 style={{textAlign : 'center', fontWeight : '400'}}>Don’t have an account? <Link to='../login' style={{color : '#0D6EFD', textDecoration : 'none', fontWeight : '500'}}>Logn in</Link></H6>
    </AuthLayout>
  );
};


const TermsLabel = () => (
  <span>
    I agree with{" "}
    <Link to="./" style={{ color: "#0D6EFD" , textDecoration : "none"}}>
      Terms and Conditions
    </Link>
  </span>
)

export default Signup;
