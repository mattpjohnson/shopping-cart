import React from 'react';
import './style.css';

export const Label = ({ className, ...props }) => <label className={`mjs-label ${className || ''}`} {...props} />;