import styled from 'styled-components'
import { BsFillPencilFill } from 'react-icons/bs'

export const Img = styled.img`
    margin: auto;
    border-radius: 50%;
    width: 90px;
    height: 90px;
`

export const PencilIcon = styled(BsFillPencilFill)`
    position: absolute;
    top: 0;
    right: 0;
    color: grey;
    cursor: pointer;
`

export const H2 = styled.h2`
    text-align: center;
`

export const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
export const DivColumn = styled(Div)`
    flex-direction: column;
`

export const Label = styled.label`
    color: grey;
    text-align: left;
    width: 100%;
`

export const Input = styled.input`
    border: none;
    border-bottom: 1px solid grey;
    &::placeholder {
        content: 'Hola';
    }
    outline: none;
`

export const Button = styled.button`
    border: none;
    width: 60px;
    background-color: #4c7a34;
    color: white;
    text-align: center;
    padding: 7px 0;
    border-radius: 7px;
    margin: 5px auto;
    cursor: pointer;

    &:hover {
        background-color: #4c7a34;
    }
`
