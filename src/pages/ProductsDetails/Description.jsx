import React from "react";
import { Body1 } from "../../components/Typography";
import { DescriptionStyled } from "./style";

import { MdCheck } from 'react-icons/md'

const Description = () => {
  return (
    <DescriptionStyled>
      <Body1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </Body1>
      <table className="tabel">
        <tr>
          <td>Model</td>
          <td>#8786867</td>
        </tr>
        <tr>
          <td>Style</td>
          <td>Classic style</td>
        </tr>
        <tr>
          <td>Certificate</td>
          <td>ISO-898921212</td>
        </tr>
        <tr>
          <td>Size</td>
          <td>34mm x 450mm x 19mm</td>
        </tr>
        <tr>
          <td>Memory</td>
          <td>36GB RAM</td>
        </tr>
      </table>


      <ul className="list">
        <li><MdCheck fontSize={18} /> Some great feature name here</li>
        <li><MdCheck fontSize={18} /> Lorem ipsum dolor sit amet, consectetur </li>
        <li><MdCheck fontSize={18} /> Duis aute irure dolor in reprehenderit</li>
        <li><MdCheck fontSize={18} /> Some great feature name here</li>
      </ul>
    </DescriptionStyled>
  );
};

export default Description;
