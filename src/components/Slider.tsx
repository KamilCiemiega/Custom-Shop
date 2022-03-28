import React, { useState, useEffect } from 'react';
import { css } from "@emotion/react";
import ClipLoader from 'react-spinners/ClipLoader';

interface Props {
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

const Slider: React.FC = () => {

    const [data, setData] = useState<Props[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [slideIndex, setSlideIdnex] = useState<number>(1)


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
            console.log(loadedImages)

        }catch{
            
        }
    }
    

    useEffect(()=> {
        fetchDataHandler()
    }, [])

const nextSlide = () => {
    if(slideIndex !== data.length){
        setSlideIdnex(slideIndex + 1)
    } 
    else if (slideIndex === data.length){
        setSlideIdnex(1)
    }
}

const prevSlide = () => {
    if(slideIndex !== 1){
        setSlideIdnex(slideIndex - 1)
    }
    else if (slideIndex === 1){
        setSlideIdnex(data.length)
    }
}

const moveDot = (index:number) => {
    setSlideIdnex(index)
}

  return (
    <div>
        <ClipLoader color="#fcbe24" loading={loading} css={override} size={150}/>
        {data.forEach((elem) => {
            return(
                console.log(elem)
            )
        })}
    </div>
  );
};

export default Slider;
