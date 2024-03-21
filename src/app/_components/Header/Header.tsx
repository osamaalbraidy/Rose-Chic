"use client";
import "./Header.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/Header Logo/Header Logo-01.png";
import { useState } from "react";
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import ProductsBagDetail from "../ProductsBagDetail/ProductsBagDetail";

const Header = () => {
    const [isXShape, setIsXShape] = useState(false);
    const [isInputOnn, setIsInputOnn] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [inShoppingBag, setInShoppingBag] = useState(3);

    const toggleMenu = () => {
        setIsXShape(!isXShape);
    };

    const toggleInputOver = () => {
        setIsInputOnn(true);
    };

    const toggleInputOut = () => {
        setIsInputOnn(false);
    };
    const toggleMouseOver = () => {
        setIsMouseOver(true);
    };

    const toggleMouseOut = () => {
        setIsMouseOver(false);
    };

    return (
        <div className="header">
            <div className="container nav ">
                <ul>
                    <li className="searchh search" onMouseOver={toggleInputOver} onMouseOut={toggleInputOut}>
                        <FaSearch />
                        <input
                            type="text"
                            className={`search-input ${isInputOnn ? "input-onn" : "input-off"}`}
                            placeholder="Search"
                            disabled={!isInputOnn}
                        />
                    </li>
                </ul>
                <ul className="lg-nav-links lg-nav-links-left">
                    <li>
                        <Link href="/">HOME</Link>
                    </li>
                    <li>
                        <Link href="/about">ABOUT</Link>
                    </li>
                </ul>
                <Link href={"/"} className="logo-container">
                    <Image src={logo} alt="" width={150} height={130} />
                </Link>
                <ul className="lg-nav-links lg-nav-links-right">
                    <li>
                        <Link href="/shop">SHOP</Link>
                    </li>
                    <li>
                        <Link href="/contact">CONTACT</Link>
                    </li>
                    <li></li>
                </ul>
                <div className={`button ${isXShape ? "close" : ""}`} onClick={toggleMenu}>
                    <span className={`line ${isXShape ? "rotate-left" : ""}`}></span>
                    <span className={`line ${isXShape ? "rotate-right" : ""}`}></span>
                    <span className={`line ${isXShape ? "fade-out" : ""}`}></span>
                </div>
                <ul className={`nav-links ${isXShape ? "show" : ""}`}>
                    <li className="searchh">
                        <FaSearch />
                        <input type="text" className={`search-input-2 input-onn`} placeholder="Search" />
                    </li>
                    <li>
                        <Link href="/">HOME</Link>
                    </li>
                    <li>
                        <Link href="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link href="/shop">SHOP</Link>
                    </li>
                    <li>
                        <Link href="/contact">CONTACT</Link>
                    </li>
                </ul>
                <ul className="ShoppingBag">
                    <li>
                        <Link href="" onMouseOver={toggleMouseOver} onMouseOut={toggleMouseOut}>
                            <FaShoppingBag />
                            <p>{inShoppingBag}</p>
                        </Link>
                        <div className={`bag-list ${isMouseOver?"show":""}`} onMouseOver={toggleMouseOver} onMouseOut={toggleMouseOut}>
                            <h1>In Your Bag</h1>
                            <ProductsBagDetail />
                        </div>
                    </li>
                    <li>
                        <Link href="">
                            <FaUser />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
