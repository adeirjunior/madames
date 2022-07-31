import type { NextPage } from "next";
import { useRef, useState } from "react";
import { client } from "../../lib/client";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { urlFor } from "../../lib/client";
import styled from "styled-components";
import Head from "next/head";
import { useStateContext } from "../../global/context/StateContext";
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { DivProp } from "../../components/StyledComponents";

const Style = styled(DivProp)`
    background-color: #fff;
    .slider {
        max-width: 375px;
        .slick-slider {
            .slick-list {
                border-radius: 1.5em;
                overflow: hidden;
                transition: background-color .3s;
                box-sizing: border-box;
                height: fit-content;
                cursor: grab;
                &:hover {
                    background-color: #ffc0cb;
                }
            }
        }
        .small-controller {
            display: none;
            margin-top: 2em;
            .slick-slider .slick-list {
                cursor: default;
                &:hover {
                    background-color: transparent;
                }
                .slick-track .slick-slide {
                    cursor: pointer;
                    &.slick-current {
                        box-sizing: border-box;
                        border: 5px solid #24113E;
                    }
                    &:not(:last-child) {
                    
                        
                    }
                }
            }
        }
        @media only screen and (min-width: 500px){
            .slick-slider .slick-dots li {
                &, button, button:before {
                    display: none;
                }
            }
            .small-controller {
                display: block;
            }
        }
    }
    

    .quantity {
        .quantity-desc {
            display: grid;
            grid-template-columns: repeat(3, 25px);
            gap: 25px;
            grid-template-rows: 25px;
            .minus, .plus {
                cursor: pointer;
            }
            .num {
                cursor: default;
                user-select: none;
            }
        }
    }
    .add-to-cart {
        border: none;
        padding: 1em 0;
        color: #fff;
        width: 100%;
        font-size: .9rem;
        max-width: 280px;
        max-height: 46px;
        background-color: #24113E;
        font-family: Montserrat;
        text-transform: uppercase;
        font-weight: 800;
        cursor: pointer;
        margin: 1.5em 0;
        user-select: none;
    }
`;

const Item: NextPage = ({ product }: any) => {
    const sliderNav: any = useRef(null);
    const slider: any = useRef(null);
    const [btnText, setBtnText] = useState("Adicionar Ao Carrinho");
    const { image, lowImage, slug, name, desc, details, price } = product;
    const { qty, decQty, incQty, onAdd }: any = useStateContext();

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    const sliderNavSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
    }
    const btnClick = () => {
        if (btnText === "Adicionar Ao Carrinho") {
            setBtnText("✔")
            setTimeout(() => { setBtnText("Adicionar Ao Carrinho")}, 500)
        }
    }
    const loadImagesGallery = (images: []) => {
        return images.map((image: any, index: number) => (
            
                <Image
                key={index}
                height={200} 
                src={urlFor(image.asset._ref).url()} 
                alt={slug.current} 
                width={150} 
                blurDataURL={urlFor(lowImage.asset._ref).url()} 
                layout="responsive" 
                sizes="30vw" 
                placeholder="blur"
                /> 
           
        ))
    }
    return (
        <Style>
            <Head>
                <title>M&apos;adames | {name}</title>
                <meta name="description" content={desc} />
            </Head>
            <div className="slider">
                <Slider asNavFor={sliderNav.current} ref={slider} {...sliderSettings}>
                {image && loadImagesGallery(image)}
                </Slider>
                <div className="small-controller">
                    <Slider asNavFor={slider.current} ref={sliderNav} {...sliderNavSettings}>
                        {image.length !==1 && loadImagesGallery(image)}
                    </Slider>
                </div>
            </div>
            
            <h4>{name}</h4>
            <div>R${price}</div>
            <div className='quantity'>
                <h3>Quantity:</h3>
                <p className='quantity-desc'> 
                    <span className='minus' onClick={decQty}>
                        <AiOutlineMinus />
                    </span>
                    <span className='num'>
                        {qty}
                    </span>
                    <span className='plus' onClick={incQty}>
                        <AiOutlinePlus />
                    </span>
                </p> 
            </div>
            <button 
            type="button" 
            className='add-to-cart'
            onClick={() => {onAdd(product, qty); btnClick()}}
            >
                {btnText}
            </button>
        </Style>
    )
};

export default Item;

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

    const products = await client.fetch(query);
    const paths = products.map((product: any) => ({
        params: {
            slug: product.slug.current
        }
    }))
    return {
        paths,
        fallback: false
    } 
}
export const getStaticProps = async ({ params: { slug } }: any) => {
    const query = `*[_type == "product" && slug.current == "${slug}"][0]`;
    const productsQuery = '*[_type == "product"]';
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
    return {
        props: {
            product,
            products
        }
    }
}

