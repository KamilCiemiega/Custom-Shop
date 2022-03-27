import React, { useState } from 'react';

type BasketContextObj = {
    changeVisibility:() => void;
  show:boolean;
};

export const BasketContext = React.createContext<BasketContextObj>({
    changeVisibility:() => {},
  show:false,
});

const BasketContextProvider: React.FC = (props) => {
  const [show, setShow] = useState(false);

    const showBasketHandler = () => {
        setShow(!show)
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

export default BasketContextProvider;