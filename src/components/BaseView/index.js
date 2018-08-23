import React from 'react';
import './style.css';

export const BaseView = ({ title, className, ...props }) => (
    <div className={`mjs-baseview mjs-border--bold ${className || ''}`}>
        <div className="mjs-baseview__title mjs-border-bottom--bold">{title}</div>

        <div className="mjs-baseview__body" {...props} />
    </div>
);