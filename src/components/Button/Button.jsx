import React from 'react';
import c from './Button.module.scss'

const Button = ({title,...props}) => {
  return <button {...props} className={c.button}>{title}</button>;
};

export default Button;
