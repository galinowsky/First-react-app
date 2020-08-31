import React from 'react';
import styles from './Button.module.scss';
import PropTypes from "prop-types";

const Button = ({ children, href, secondary, onClick }) => {
  const buttonClass = secondary ? styles.buttonInverted : styles.button
  return (<>
  
    {
    
      href ? (
        <a
          href={href}
          target="_blank"
          className={buttonClass}
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
          <button className={buttonClass} onClick={onClick}>
            {children}
          </button>
        )
    }
  </>
  )


};
Button.defaultProps = {
  secondary: false,
}
export default Button;

