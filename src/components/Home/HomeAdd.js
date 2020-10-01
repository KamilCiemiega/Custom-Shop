import React, { useState } from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components';

const searchVariants = {
    closed: { x: '100vh', color: 'black', opacity: 0 },
    open: {
        x: 0,
        color: 'green',
        opacity: 1,
        transition: {
            type: 'spring',
            delay: 0.5
        }
    },
}

const H2 = styled(motion.h2).attrs(() => ({
    initial: "closed",
    searchVariants
}))`
  `;

const HomeAdd = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
            >
                Click here to make content visible
    </button>
    {isOpen &&(
        <motion.h2
        initial={'closed'}
        animate={'open'}>
        Hello
        </motion.h2>
    )}
            
            <div>
                Hello
        </div>
            <div>
                Hello
        </div>
            <div>
                Hello
        </div>
            <div>
                Hello
        </div>
            <div>
                Hello
        </div>
            <div>
                Hello
        </div>
            <div>
                Hello
        </div>
        </div>
    );
}

export default HomeAdd