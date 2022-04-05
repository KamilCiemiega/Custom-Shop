import React,{useState} from "react";
import classes from './SingleElem.module.css';
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlinePageview } from "react-icons/md"
import { AiOutlineClose } from "react-icons/ai"


interface Props {
    price:string,
    description:string,
    image:string,
    changeImage: string,
    modalImage:string
}

export const SingleElem = ({price, description,image,changeImage,modalImage}:Props) => {
    const [show, setShow] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return(
            <div 
                className={classes.wrapperElementsItem}
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}>
                    {show ? <img src={image}></img> 
                    : <img src={changeImage}></img>}
                    <p>{description}</p>
                    <p>{price}</p>   
                    {show &&
                    <div>
                    <div className={classes.wrapperElementsItemWishBlock}>
                    <button className={classes.whishListButton}>
                        <AiOutlineHeart className={classes.heartStyle}/>
                    </button>
                        <button className={classes.viewButton}>
                        <MdOutlinePageview className={classes.viewStyle} onClick={() => setShowModal(true)}/>
                    </button>
                    </div>
                    <button className={classes.addToCard}>Add To Card</button>
                    </div>
                    }
                    {showModal &&
                    <div className={classes.modal}>
                    <div className={classes.modalElement}>
                        <img src={modalImage}></img>
                        <div className={classes.modalText}>
                            <h1>Trendy woman black blazer</h1>
                            <div className={classes.modalTextPrice}>
                            <p>{price}</p>
                            <s>$120</s>
                            </div>
                            <p>Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elitet.</p>
                            <p>Vendor: Lereve</p>
                            <p>Categories: Hoodie</p>
                            <button>Add to Card</button>
                            <AiOutlineClose className={classes.closeIcon} onClick={() => setShowModal(false)}/>
                        </div>
                    </div>
                </div>
                    }
                    
                </div>
);
}