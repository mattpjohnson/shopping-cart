import React from 'react';
import './style.css';

export const Button = ({ className, ...props }) => <button className={`mjs-button mjs-border--bold ${className || ''}`} {...props} />;