import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import logo from '../img/logo.svg';
import styled from 'styled-components';
import ButtonContainer from "./widgets/Button";

export default class Navbar extends Component {
    render() {
        return (
           <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-2">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                            <Link className="nav-link" to="/"> Products</Link>
                    </li>
                </ul>

               <Link className="ml-auto" to="/cart">
                   <ButtonContainer>
                       <span className="mr-2">
                           <i className="fas fa-cart-plus" />
                       </span>
                       My Cart
                   </ButtonContainer>
               </Link>
           </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
background : var(--mainBlue);
.nav-link{
color : var(--mainWhite) !important;
font-size : 1.3rem;
text-transform : capitalize !important;
}
`;

