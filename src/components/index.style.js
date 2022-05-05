import styled from 'styled-components'

export const DivFlexBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    padding: 10px 15px;
    margin: ${props => props.margin || '10px'};
    justify-content: ${props => props.justify || 'center'};
    align-items: center;
    width: ${props => props.widthStyle || '100'};
    height: ${props => props.height || 'fit-content'};
    border-bottom:  ${props => (props.border ? '1px solid grey' : 'none')};
`

export const H2 = styled.h2`
    margin: ${props => props.margin || 'auto'};
    color: #283618;
    border-bottom:  ${props => (props.border ? '1px solid grey' : 'none')};
    width: ${props => (props.widthStyle || '100%')};
    text-align: center;
    font-size: 25px;
`

export const Span = styled.span`
    color: ${props => (props.color || 'black')};
    font-size: 19px;
    border-bottom:  ${props => (props.border ? '1px solid grey' : 'none')};
    font-weight: ${props => (props.weigth || 'normal')};
`
