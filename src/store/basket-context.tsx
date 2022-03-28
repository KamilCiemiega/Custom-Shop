import React, { useState, useContext } from 'react';

type BasketContextObj = {
    changeVisibility:() => void;
  show:boolean;
};

export const BasketContext = React.createContext<BasketContextObj>({
    changeVisibility:() => {},
  show:false,
});

//@ts-ignore
const BasketContextProvider = (props) => {
  const [show, setShow] = useState(false);

    const showBasketHandler = () => {
        setShow(prev=>!prev)
        console.log(show)
    }

  const contextValue: BasketContextObj = {
    changeVisibility:showBasketHandler,
    show
  };

  return (
    <BasketContext.Provider value={contextValue}>
      {props.children}
    </BasketContext.Provider>
  );
};

export const useBasketContext=()=>{
  const ctx=useContext(BasketContext);
  if(!ctx){
    throw new Error("Not wrapped in context")
  }
  return ctx;

}

export default BasketContextProvider;