import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreaors from '../../../store/actions/index';
import styled, { css } from 'styled-components';

const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content:center;
    justify-content:${props => props.space ? 'space-between' : ''};
    cursor:${props => props.cursor ? props.cursor : ''};
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
const Button = styled.button`
    border:none;
    background:white;
`

const SearchBox = props => {
    

    return(
        <Form>
            <Input
                placeholder="Search for" >
            </Input>
        </Form>
    );
}

export default SearchBox;