import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'whatwg-fetch';
import { BasketCheckout } from './containers/BasketCheckout';
import { ProductList } from './containers/ProductList';
import './App.css';

class App extends Component {
  state = {
    basket: {},
    products: [],
    productFromSku: {}
  };

  async componentWillMount() {
    this.addProductToBasket = this.addProductToBasket.bind(this);
    this.updateProductSkuCount = this.updateProductSkuCount.bind(this);

    const products = await fetch('http://localhost:9001/products').then(response => response.json());
    const productFromSku = products.reduce((lookup, product) => ({ ...lookup, [product.sku]: product }), {});
    this.setState({ products, productFromSku });
  }

  addProductToBasket(product) {
    const productCount = this.state.basket[product.sku] || 0;
    this.updateProductSkuCount(product.sku, productCount + 1);
  }

  updateProductSkuCount(sku, count) {
    count = Number(count);
    const { basket } = this.state;

    const productCount = Math.min(count, 10);
    const newBasket = { ...basket, [sku]: productCount };

    if (count <= 0) {
      delete newBasket[sku];
    }

    this.setState({ basket: newBasket });
  }

  render() {
    return (
      <Switch>
        <Route path="/checkout" component={() => <BasketCheckout basket={this.state.basket} productFromSku={this.state.productFromSku} updateProductSkuCount={this.updateProductSkuCount} />} />
  
        <Route path="" component={() => <ProductList basket={this.state.basket} products={this.state.products} addProductToBasket={this.addProductToBasket} />} />
      </Switch>
    );
  }
}

export default App;
