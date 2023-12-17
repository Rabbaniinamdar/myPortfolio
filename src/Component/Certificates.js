// ResponsiveDemo.js

import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import github from '../images/github.png';
import js from '../images/js.png';
import java from '../images/java-certifi.png';
import intro_Htmlcssjs from '../images/intro_Htmlcssjs.png';
import frontend from '../images/frontend.png';
import Html_css_js from '../images/Html_css_js.png';
import web_dev from '../images/web_dev.png';
import '../CSS/Certificates.css'
export default function ResponsiveDemo() {
    const ProductService = [
        {
            "img": Html_css_js,
            "name": "HTML, CSS, and Javascript for Web Developers", "from": "Johns Hopkins University,Coursera"
        },
        {
            "img": web_dev,
            "name": "A Beginners Guide to Web Development", "from": "Infosys Springboard"
        },
        {
            "img": github,
            "name": "Getting Started with Git and GitHub", "from": "IBM,Coursera"
        },
        {
            "img": frontend,
            "name": "Developing Front-End Apps with React ", "from": "IBM,Coursera"
        },
        {
            "img": intro_Htmlcssjs,
            "name": "Introduction to Web Development with HTML, CSS, JS", "from": "IBM,Coursera"
        },
        {
            "img": js,
            "name": "Programming with JavaScript", "from": "Meta,Coursera"
        },
        {
            "img": java,
            "name": "Introduction to Java", "from": "Learn Quest,Coursera"
        },

    ];

    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        { breakpoint: '199px', numVisible: 1, numScroll: 1 },
        { breakpoint: '991px', numVisible: 2, numScroll: 1 },
        { breakpoint: '767px', numVisible: 1, numScroll: 1 }
    ];

    useEffect(() => {
        setProducts(ProductService.slice(0, 9));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const productTemplate = (product) => {
        return (

            <div className="custom-product-item p-shadow-4">
                <div className="custom-product-image">
                    <img src={product.img} alt={product.name} className="custom-img" />
                </div>
                <div className="custom-product-details">
                    <h4 className="custom-heading">{product.name}</h4>
                    <h6 className="custom-price">{product.from}</h6>
                </div>
            </div>
        );
    };

    return (
        <section class="portfolio-card" id="portfolio">
            <h1 class="heading heading-card" id="certificates"> my <span>Certificates</span> </h1>
            <Carousel
                value={products}
                numScroll={1}
                numVisible={3}
                responsiveOptions={responsiveOptions}
                itemTemplate={productTemplate}
            />
        </section>
    );
}
