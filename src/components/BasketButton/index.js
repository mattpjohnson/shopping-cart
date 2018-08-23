import React from 'react';
import { Link } from '../Link';

export const BasketButton = ({ basket, ...props }) => {
    const count = Object.values(basket)
        .reduce((total, count) => total + count, 0);

    return (
        <Link className="mjs-button--secondary" to="/checkout" {...props}>
            Basket {count}
        </Link>
    );
}