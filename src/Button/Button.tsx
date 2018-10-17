import React from 'react';
import styled from 'styled-components';

export interface Props {
  /**
   * Text inside the button
   */
  label: string;
  /**
   * Function for handle the click event
   */
  onClick: () => void;
  /**
   * Enable the disabled styles
   */
  disabled?: boolean;
}


export const Button = ({ label, onClick, disabled = false }: Props) => {
  const noop = () => { };
  const StyledButton = styled.button`
    padding: 0px 20px;
    height: 49px;
    border-radius: 2px;
    border: 2px solid var(--ui-bkgd, #3d5567);
    display: inline-flex;
    background-color: var(--ui-bkgd, #3d5567);
    margin: auto;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    text-transform: uppercase;

    &:hover:not(:disabled){
      cursor: pointer;
    }

    &:disabled {
      --ui-bkgd: rgba(61, 85, 103, 0.3);
    }
  `;
  return (
    <StyledButton disabled={disabled} onClick={disabled ? noop : onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;