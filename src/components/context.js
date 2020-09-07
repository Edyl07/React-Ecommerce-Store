import React, {Component} from 'react';

import {storeProducts, detailProduct } from "../data";

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {

    state = {
        products : storeProducts,
        detailProduct : detailProduct
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
           const singleItem = {...item};
           tempProducts = [...tempProducts, singleItem];
        });

        this.setState(() => {
            return {products : tempProducts}
        });
    }

    handleDetails = () => {
        console.log('Hello from details');
    }

    addToCart = () => {
        console.log('Hello from Cart');
    }

    // tester = () => {
    //     console.log('State products : ', this.state.products[0].inCart);
    //     console.log('Data products : ', storeProducts[0].inCart);
    //
    //     const tempProduct = [...this.state.products];
    //     tempProduct[0].inCart = true;
    //
    //     this.setState(() => {
    //        return {products : tempProduct };
    //     }, () => {
    //         console.log('State products : ', this.state.products[0].inCart);
    //         console.log('Data products : ', storeProducts[0].inCart);
    //     });
    // }

    render() {
        return (
            <ProductContext.Provider value={{...this.state}}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer} ;