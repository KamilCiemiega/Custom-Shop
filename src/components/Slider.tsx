import React, { useState, useEffect } from 'react';
import { css } from "@emotion/react";
import ClipLoader from 'react-spinners/ClipLoader';
import classes from './Slider.module.css';

interface DataType {
    id: string;
    image: string;
}

const override = css`
position: fixed;
z-index: 3;
left:50%;
top:50%;
margin: 0 auto;
`;

const Slider = () => {

    const [data, setData] = useState<DataType[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [slideIndex, setSlideIdnex] = useState<number>(0)


    const fetchDataHandler = async () => {
        try{
            const response = await fetch('https://custom-shop-6228c-default-rtdb.europe-west1.firebasedatabase.app/images.json');
            const responseData = await response.json();

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            
            const loadedImages = [];
            
            for(const key in responseData){
                loadedImages.push({
                    id:key,
                    image: responseData[key].image
                })
            }
            setData(loadedImages)
            setLoading(false);

        }catch{
            
        }
    }
    

    // useEffect(()=> {
    //     fetchDataHandler()
    //     const timer = setTimeout(() => {
    //         if(slideIndex !== data.length){
    //             setSlideIdnex(slideIndex + 1)
    //         } 
    //         else if (slideIndex === data.length){
    //             setSlideIdnex(1)
    //         }
    //     }, 5000);
    // return () => clearTimeout(timer);      
    // }, [slideIndex])

    useEffect(() => {
        fetchDataHandler()
    }, [])
    

const moveDot = (index:number) => {
    setSlideIdnex(index)
}

  return (
    <div className={classes.wrapper}>
        <ClipLoader color="#fcbe24" loading={loading} css={override} size={150}/>
        {data.map((elem, index) => {
            return(
                <div className={index === slideIndex ? classes.active : classes.slide}>
                    {index === slideIndex && (
                        <img src={elem.image} alt='image'/>
                    )}
                </div>
            );
        })}
        <div className={classes.containerDots}>
                {Array.from({length: 4}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? classes.dotActive : classes.dot}
                    ></div>
                ))}
        </div>
    </div>
  );
};

export default Slider;
