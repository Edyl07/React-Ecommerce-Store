import React, {Component} from 'react';

import {detailProduct, storeProducts} from "../data";

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

    getItem = id => {
        return this.state.products.find(item => item.id === id);
    }

    handleDetails = (id) => {
        const product = this.getItem(id);
        this.setState(() => {return {detailProduct : product}})
    }

    addToCart = id => {
        console.log(`hello from add to card.id is ${id}`);
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
            <ProductContext.Provider value={{...this.state, handleDetails : this.handleDetails, addToCart : this.addToCart}}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer} ;