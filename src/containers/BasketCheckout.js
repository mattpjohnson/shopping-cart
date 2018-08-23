import React from 'react';
import { BaseView } from '../components/BaseView';
import { BasketButton } from '../components/BasketButton';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Label } from '../components/Label';
import { Link } from '../components/Link';

export class BasketCheckout extends React.Component {
    state = { promoDiscount: 0 };

    render() {
        const { basket, productFromSku, updateProductSkuCount } = this.props;

        const subTotalAmount = Object.entries(basket)
            .reduce((total, [sku, count]) => total + productFromSku[sku].price * count, 0)
            .toFixed(2);
    
        return (
            <BaseView title="Basket / checkout view">
                <div className="flex">
                    <div className="flex-1">
                        <Link className="mjs-button--secondary" to="/">Continue shopping</Link>
                    </div>
            
                    <div>
                        <BasketButton basket={basket} />
                    </div>
                </div>
        
                <div className="mt-6">
                    {Object.entries(basket).map(([sku, count]) => {
                        const product = productFromSku[sku];
        
                        return (
                            <div className="flex mb-3" key={sku}>
                                <div className="flex-1">{product.name}</div>
                                <div className="w-48">
                                    <Input value={count} onChange={e => updateProductSkuCount(sku, e.target.value)} />
                                </div>
                                <div className="w-24">
                                    {count * product.price}
                                </div>
                                <div className="w-24">
                                    <Button onClick={() => updateProductSkuCount(sku, 0)}>Remove</Button>
                                </div>
                            </div>
                        )
                    })}
                </div>
        
                <div>
                    <Label>Enter Promo Code</Label>
        
                    <Input className="mr-6" />
        
                    <Button>Apply</Button>
                </div>
    
                <div className="flex mt-6">
                    <div className="flex-1 mr-3 text-right">
                        <Label>SubTotal</Label>
                    </div>
    
                    <div className="flex-1 ml-3">
                        {subTotalAmount}
                    </div>
                </div>
    
                <div className="flex mt-6">
                    <div className="flex-1 mr-3 text-right">
                        <Label>Promotional Discount Amount</Label>
                    </div>
    
                    <div className="flex-1 ml-3">
                        {this.state.promoDiscount}
                    </div>
                </div>
    
                <div className="flex mt-6">
                    <div className="flex-1 mr-3 text-right">
                        <Label>Basket Total</Label>
                    </div>
    
                    <div className="flex-1 ml-3">
                        {subTotalAmount - this.state.promoDiscount}
                    </div>
                </div>
        
                <div className="flex mt-6">
                    <div className="flex-1">
                        <Label>Please enter your credit card number</Label>
                    </div>
                    <Input className="flex-1" />
                </div>
    
                <Link to="/">Checkout</Link>
            </BaseView>
        );
    }
}