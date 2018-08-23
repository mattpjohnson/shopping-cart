import React from 'react';
import './style.css';

export const Input = ({ className, ...props }) => <input className={`mjs-input mjs-border--bold ${className || ''}`} {...props} />;