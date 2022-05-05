import styled from 'styled-components'
import { BsFillPencilFill } from 'react-icons/bs'

export const Img = styled.img`
    margin: auto;
    border-radius: 50%;
    width: 120px;
    height: 120px;
`

export const PencilIcon = styled(BsFillPencilFill)`
    position: absolute;
    top: 0;
    width: 20px;
    height: 20px;
    transform: translateX(70px);
    color: #686868;
    cursor: pointer;
`

export const Label = styled.label`
    color: grey;
    text-align: left;
    width: 100%;
    font-size: 18px;
    margin-top: 15px;
`

export const Input = styled.input`
    border: none;
    background-color: #e3dfc5;
    border-bottom: 1px solid #283618;
    height: 35px;
    font-size: 16px;
    width: 90%;
    outline: none;
    padding: 0 10px;
`

export const Button = styled.button`
    border: none;
    width: 80px;
    height: 35px;
    font-size: 16px;
    font-weight: bold;
    background-color: #606C38;
    color: white;
    text-align: center;
    padding: 7px 0;
    border-radius: 7px;
    margin: 20px auto;
    cursor: pointer;

    &:hover {
        background-color: #283618;
    }
`
