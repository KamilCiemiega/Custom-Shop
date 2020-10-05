import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content:center;
    justify-content:${props => props.space ? 'space-between' : ''};
    flex-wrap: wrap;
    width: 90%;
`
const Input = styled.input`
    border: 1px solid #eaeaea;
    border-radius: 8px;
    padding: 6px;
    font-size: 0.8rem;
    outline: none;
    color: #333;
    width: 90%;
`

const SearchBox = props => {
    return(
        <Form onSubmit={onclick}>
            <Input
                placeholder="Search for" >
            </Input>
        </Form>
    );
}

export default SearchBox;