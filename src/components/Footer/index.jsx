import React from "react";
import Countainer from "../Container";
import { FooterStyled } from "./style";

import Logo from "../../assets/images/logo.png";

import { socialLinks, links, forUser } from "../../mock/footer";
import LinksList from "./LinksList";

import ShopGoogle from '../../assets/images/shop-google.png';
import ShopApp from '../../assets/images/shop-app.png';
import { H6 } from "../Typography";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <FooterStyled>
      <Countainer>
        <FooterContent />
      </Countainer>

      <Copyright />

    </FooterStyled>
  );
};

const SocialLink = ({ icon, link }) => (
  <a href={link} rel="noreferrer" target="_blank">
    {icon}
  </a>
);

const FooterContent = () => (
    <div className="content">
          <div className="info">
            <img src={Logo} alt="logo" />
            <p>
              Best information about the company gies here but now lorem ipsum
              is
            </p>
            <div className="social-links">
              {socialLinks.map((link) => (
                <SocialLink key={link.id} icon={link.icon} link={link.link} />
              ))}
            </div>
          </div>

          <div className="lists">
            {links.map((item) => (
              <LinksList
                key={item.id}
                title={item.title}
                links={item.linksList}
              />
            ))}
          </div>
          
          <div className="lists">
          <LinksList
                title={forUser.title}
                links={forUser.linksList}
              />
        </div>
            

            <div className="shops">
                <H6>Get app</H6>
                <div className="image">
                    <img src={ShopGoogle} alt="shop google" />
                </div>
                <div className="image">
                    <img src={ShopApp} alt="shop app story" />
                </div>
            </div>

        </div>
)



export default Footer;
