import React from 'react'
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import {
  BottomFooter,
  BottomFooterWrapper,
  FooterContainer,
  TopFooter,
  Icons,
  BottomIcon,
  FooterWrapper,
} from "./styles";

const Links = [
  {
    title: "About Us",
    links: ["How it works", "Testimonials", "Careers", "Investors", "Terms of Service"],
  },
  {
    title: "Contact Us",
    links: ["Contact", "Support", "Destination", "Sponsorships"],
  },
  {
    title: "Videos",
    links: ["Submit Video", "Ambassadors", "Agency", "Influencer"],
  },
  {
    title: "Social Media",
    links: ["Instagram", "Facebook", "Youtube", "Twitter"],
  },
];

const Footer = () => {
  return (
    <FooterContainer>
    <FooterWrapper>
      <TopFooter onClick={() => window.scrollTo(0, 0)}>
        <p>Back to Top</p>
      </TopFooter>
      <BottomFooter>
        {Links.map((link, i) => (
          <BottomFooterWrapper key={i}>
            <h2>{link.title}</h2>
            {link.links.map((l) => (
              <p>{l}</p>
            ))}
          </BottomFooterWrapper>
        ))}
      </BottomFooter>
      <BottomIcon>
        <i>@ All rights resevered</i>
        <Icons>
          <AiFillFacebook />
          <AiFillLinkedin />
          <AiFillTwitterCircle />
          <AiFillYoutube />
        </Icons>
      </BottomIcon>
    </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer