import styled from 'styled-components' ; 
import { css } from 'styled-components';

export type buttonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: buttonVariant
}

const buttonVariants = {
    primary: '#600085',
    secondary: '#6CE00B',
    danger: 'red',
    success: 'aqua'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px; 
    height: 40px;
    border: 0;
    border-radius: 8px;
    margin: 14px;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.primary};

    /* ${props => {
        return css`
        background-color: ${buttonVariants [props.variant]}
        `
    }} */
` 