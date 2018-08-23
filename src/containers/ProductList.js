import React from 'react';
import { Link } from '../components/Link';
import { BaseView } from '../components/BaseView';
import { BasketButton } from '../components/BasketButton';
import { Button } from '../components/Button';

export const ProductList = ({ basket, products, addProductToBasket }) => (
    <BaseView title="Product List View">
        <BasketButton basket={basket} />

        <ul>
            {products.map((product, i) => (
                <li key={i}>{product.name} {product.price} <Button onClick={() => addProductToBasket(product)}>Add to basket</Button></li>
            ))}
        </ul>

        <Link className="mjs-button--secondary" to="checkout">Proceed to checkout</Link>
    </BaseView>
);