import React from 'react';
import { Link as DomLink } from 'react-router-dom';
import './style.css';

export const Link = ({ className, ...props }) => <DomLink className={`mjs-link mjs-button mjs-border--bold ${className || ''}`} {...props} />;