import { InputStyled } from "./style";

const Input = ({ value, onChange, placeholder, type, style, ...other }) => {
  return (
    <InputStyled
      value={value}
      onChange={onChange}
      placeholder={placeholder || ""}
      type={type}
      {...(style ? (style = { style }) : "")}
      {...other}
    />
  );
};

export default Input;
