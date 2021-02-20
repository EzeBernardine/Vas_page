import React from "react";
import { useStyles } from "./styles";
import banner from "../../assets/subscribe-banner.png";
import Button from "../Button/index";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";

export const MiniFooter = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer_root}>
      <div className={classes.footer_sub}>
        <div className={classes.footer_banner}>
          <img src={banner} alt="" />
        </div>

        <div className={classes.footer_memeber}>
          <h2>
            Be a member <br /> of our community 🎉
          </h2>
          <p>
            We’d make sure you’re always first to know what’s happening on
            Vasiti—thus, the world.
          </p>
          <div className={classes.footer_search}>
            <input type="text" placeholder="enter your email address" />
            <Button text="SUBSCRIBE" bg="white" />
          </div>
        </div>
      </div>
    </div>
  );
};
const Footer = () => {
  const classes = useStyles();
  const footer = [
    {
      head: "Company",
      others: ["About us", "Term of Use", "Privacy Policy", "Press & Media"],
    },
    {
      head: "Products",
      others: ["Marketplace", "Magazine", "Seller", "Wholesale", "Services"],
    },
    {
      head: "Careers",
      others: [
        "Become a Campus Rep",
        "Become a Vasiti Influencer",
        "Become a Campus writer",
        "Become an Affiliate",
      ],
    },
    {
      head: "Get in touch",
      others: [
        "Contact us",
        "Partner with us",
        "Advertise with us",
        "Help/FAQs",
      ],
    },
  ];
  return (
    <div className={classes.footer_main_root}>
      <div className={classes.footer_main}>
        {footer.map(({ head, others }) => (
          <div className={classes.footer_row}>
            <h4>{head}</h4>
            <ul>
              {others.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className={classes.footer_row}>
          <h4>Join our community</h4>
          <ul>
            <div className={classes.footer_icons}>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://web.facebook.com/profile.php?id=100008556884999"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/LadyBCodes"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/ezebernardinemay/"
                >
                  <TiSocialInstagram />
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/EzeBernardine"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </div>
            <li>Email Newsletter</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
