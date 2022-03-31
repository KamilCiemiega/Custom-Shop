import React from "react"
import classes from './ContactForm.module.css';
import { GoLocation } from "react-icons/go";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export const ContactForm = () => {
    return(
        <div className={classes.wrapper}>
            <form>
                <div className={classes.nameWrapper}>
                <div className={classes.flexName}>
                    <label>FIRST NAME</label>
                    <input className={classes.customerName} type="text" required/>
                </div>
                <div className={classes.flexLastName}>
                <label>LAST NAME</label>
                <input type="text" className={classes.customerName} required></input>
                </div>
                </div>
                <div className={classes.flexEmail}>
                <label>EMAIL</label>
                <input type="email" className={classes.email} required></input>
                </div>
                <div className={classes.flexText}>
                    <label>MESSAGE</label>
                    <input type="text" className={classes.text}></input>
                </div>
                <button type="submit">CONTACT US</button>
                <p>Contact Information</p>
                <div className={classes.location}>
                    <GoLocation className={classes.locationIcon}/>
                    <p>38-300 Kraków Sienkiewicza 12A</p>
                </div>
                <div className={classes.location}>
                    <BsFillTelephoneFill className={classes.locationIcon}/>
                    <p>+48 678 453 213</p>
                </div>
                <div className={classes.location}>
                    <AiOutlineMail className={classes.locationIcon}/>
                    <p>customShop@email.com</p>
                </div>
            </form>
        </div>
    )
}