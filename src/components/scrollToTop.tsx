import React, {useEffect, useState} from "react";
import { AiOutlineArrowUp } from "react-icons/ai"


export const ScrollToTop = () => {

const [backToTop, setBackToTop] = useState<boolean>(false)

useEffect(() => {
 window.addEventListener('scroll', () => {
    if (window.scrollY > 100){
        setBackToTop(true);
    }else {
        setBackToTop(false);
    }
 })   
}, [])

const scrollUp = () => {
   window.scrollTo({
       top:0,
       behavior: 'smooth'
   }) 
}

return(
    <div>
 {backToTop &&
        <button onClick={scrollUp} style={{
            position:'fixed',
            bottom: '50px',
            right: '50px',
            height: '50px',
            backgroundColor: 'rgb(238, 238, 238)',
            borderRadius: '4px',
            width: '50px',
            cursor: 'pointer',
            fontSize: '50px',
            border:'none',
            display: 'flex'
        }}><AiOutlineArrowUp /></button>
    }
    </div>
   
);
}