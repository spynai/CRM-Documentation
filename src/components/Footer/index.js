import React from "react";
import { Link } from "gatsby";
import FacebookImg from '../../images/facebook.webp';
import InstagramImg from '../../images/instagram.webp';
import TwitterImg from '../../images/twitter.webp';
import LinkedinImg from '../../images/linkedin.webp';
import {
  FooterSection,
  IntouchFooter,
  IntouchMedia,
  IntouchCopyrights,
  IntouchTerms,
  // AddressInfo
} from './styles';

const Footer = () => {

  const mediaLinks = [
    {
      id: 3,
      title: "instagram",
      link: "https://www.instagram.com/ai.fithub/?igshid=MmIzYWVlNDQ5Yg%3D%3D",
      image: InstagramImg
    },
    {
      id: 2,
      title: "facebook",
      link: "https://www.facebook.com/profile.php?id=100093714846212&mibextid=LQQJ4d",
      image: FacebookImg
    },
    {
      id: 4,
      title: "twitter",
      link: "https://twitter.com/aifithub?s=21",
      image: TwitterImg
    },
    // {
    //   id: 5,
    //   title: "youtube",
    //   link: "https://www.youtube.com/@spyncontent6734",
    //   image: YoutubeImg
    // },
    {
      id: 5,
      title: "linkedin",
      link: "https://www.linkedin.com/company/aifithub/",
      image: LinkedinImg
    }
  ]

  return (
    <FooterSection>
      <IntouchFooter id="footerSec">
        <IntouchMedia>
          {
            mediaLinks && mediaLinks.map(smLink =>
              <a
                className="media-link"
                href={smLink.link}
                target="_blank"
                without="true"
                rel="noopener noreferrer"
                key={smLink.id}
              >
                <img src={smLink.image} alt={smLink.title} />
              </a>
            )
          }
        </IntouchMedia>
        <IntouchCopyrights>Copyright © 2023 Fit Hub. All rights reserved.</IntouchCopyrights>
        <IntouchTerms>
          <Link to="/privacy-policy">
            Privacy Policy
          </Link>
          <Link to="/tos">
            Terms of Service
          </Link>
          {/* <a href="https://spyn.ai/provider-tos" target="_blank" without="true" rel="noopener noreferrer">
            Provider Terms of Service
          </a> */}
        </IntouchTerms>
      </IntouchFooter>
    </FooterSection>
  );
};

export default Footer
