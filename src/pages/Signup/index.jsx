import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AlertContext } from "../../AlertContext";
import AuthContext from "../../AuthContext";
import Button from "../../components/Buttons/Button";
import { Form } from "../../components/Form";
import Checkbox from "../../components/inputs/Checkbox";
import InputWithLabel from "../../components/inputs/InputWithLabel";
import { H4, H6, Label } from "../../components/Typography";
import AuthLayout from "../../layouts/AuthLayout";
import { PhoneStyled } from "./style";

import { SignUpSchema } from "./validate";

const initValues = {
  name: "",
  surename: "",
  email: "",
  password: "",
  rePassword: "",
  phone: "",
  agree: false,
};

const Signup = () => {
  const [data, setData] = useState(initValues);

  const { isAuth, setIsAuth } = useContext(AuthContext);
  const { setAlert } = useContext(AlertContext);

  const handelData = (elem) => {
    const { id, value } = elem;
    setData((prev) => {
      return { ...prev, [id]: value };
    });
  };

  const handelCheckbox = () => {
    setData((prev) => ({ ...prev, agree: !prev.agree }));
  };

  const sendData = (e) => {
    e.preventDefault();

    SignUpSchema.validate({
      name: data.name,
      surname : data.surename,
      email: data.email,
      password: data.password,
      password2: data.rePassword,
      phone: data.phone,
      agree: data.agree,
    })
      .then(async (isValid) => {
        if (isValid) {
          try {
            const res = await axios.post(
              `https://react-tt-api.onrender.com/api/users/signup`,
              { name: data.name, email: data.email, password: data.password }
            );
            localStorage.setItem("ec-user", JSON.stringify(res.data));
            setIsAuth(true);
            setAlert({isOpen : true, type : 'success', message : 'Signed up Successfully'})
          } catch (err) {
            setAlert({isOpen : true, type : 'error', message : err})
          }
        }
      })
      .catch((err) => {
        setAlert({isOpen : true, type : 'error', message : err.message})
      });
  };

  return (
    <AuthLayout>
      {isAuth && <Navigate to="/" />}
      <Form onSubmit={sendData}>
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

        <Label style={{ marginTop: 20, display: "block" }}>Phone</Label>
        <PhoneStyled>
          <select>
            <option>UZ +998</option>
          </select>
          <input
            type="text"
            placeholder="00-000-00-00"
            value={data.phone}
            onChange={(e) => handelData(e.target)}
            id="phone"
          />
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
          value={data.rePassword}
          onChange={(e) => handelData(e.target)}
          style={{
            marginTop: "20px",
          }}
        />

        <Button type="submit" style={{ marginTop: "25px" }}>
          Register now
        </Button>

        <Checkbox
          style={{ marginTop: "20px" }}
          value={data.agree}
          onClick={handelCheckbox}
          label={<TermsLabel />}
        />

        <hr style={{ border: "1px solid #E0E0E0", margin: "28px 0 20px" }} />

        <H6 style={{ textAlign: "center", fontWeight: "400" }}>
          Don’t have an account?{" "}
          <Link
            to="../login"
            style={{
              color: "#0D6EFD",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Logn in
          </Link>
        </H6>
      </Form>
    </AuthLayout>
  );
};

const TermsLabel = () => (
  <span>
    I agree with{" "}
    <Link to="./" style={{ color: "#0D6EFD", textDecoration: "none" }}>
      Terms and Conditions
    </Link>
  </span>
);

export default Signup;
