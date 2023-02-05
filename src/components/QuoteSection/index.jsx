import React, { useState } from "react";
import { Form } from "../Form";
import { Body1, H3 } from "../Typography";
import { QuoteSectionStyled } from "./style";
import Input from "../inputs/Input";
import Textarea from "../inputs/Textarea";
import Button from "../Buttons/Button";

const QuoteSection = () => {
  const [item, setItem] = useState("");

  const handelItem = (value) => {
    setItem(value);
  };

  return (
    <QuoteSectionStyled>
      <div className="text">
        <H3>An easy way to send requests to all suppliers</H3>
        <Body1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt.
        </Body1>
      </div>

      <Form style={{ padding: "20px 30px 25px 20px", width: "490px" }}>
        <h3>Send quote to suppliers</h3>
        <Input
          value={item}
          onChange={(e) => handelItem(e.target.value)}
          placeholder="What item you need?"
        />
        <Textarea
          value={item}
          onChange={(e) => handelItem(e.target.value)}
          placeholder="Type more details"
          style={{marginTop : '20px', resize: 'vertical'}}
          rows="3"
        />
        <div className="quantity">
        <Input
          value={item}
          onChange={(e) => handelItem(e.target.value)}
          placeholder="Quantity"
          style={{width : '50%',margin : '20px 0'}}
        />
        <select>
          <option value="pics">Pics</option>
        </select>
        </div>
        <Button style={{width: 'fit-content', display : 'block'}}>Send inquiry</Button>
      </Form>
    </QuoteSectionStyled>
  );
};

export default QuoteSection;
