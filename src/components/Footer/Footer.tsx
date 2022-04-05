import React from "react";
import classes from './Footer.module.css';
import { AiOutlineTwitter } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineInstagram } from "react-icons/ai"

export const Footer = () => {
    return(
        <div className={classes.wrapper}>
            <div className={classes.wrapperElements}>
            <div className={classes.aboutUs}>
                <p>About Us</p>
                <ul>
                    <li>About us</li>
                    <li>Community</li>
                    <li>Jobs</li>
                    <li>Shipping</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className={classes.ourServices}>
                <p>Our Services</p>
                <ul>
                    <li>Free Shipping</li>
                    <li>Free Returns</li>
                    <li>Our Franchising</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className={classes.information}>
                <p>Information</p>
                <ul>
                    <li>Payment methods</li>
                    <li>Shipping methods</li>
                    <li>Product Returns</li>
                    <li>Conformity of the products</li>
                    <li>Delivery & Shipping</li>
                </ul>
            </div>
            <div className={classes.socialMedia}>
                <div className={classes.styleSocial}>
                    <AiOutlineTwitter />
                </div>
                <div className={classes.styleSocial}>
                    <FaFacebookF />
                </div>
                <div className={classes.styleSocial}>
                    <AiOutlineInstagram />
                </div>
            </div>
            </div>
            <div className={classes.wrappedEnd}>
                <span></span>
                <div className={classes.wrappedEndElem}>
                    <p>© 2020 Shopmax - All Rights Reserved terms of Sale terms of Use privacy policy</p>
                </div>
            </div>
        </div>
    );
}