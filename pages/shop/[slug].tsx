import type { NextPage } from "next";
import { useState } from "react";
import { client } from "../../lib/client";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { urlFor } from "../../lib/client";
import styled from "styled-components";
import { useStateContext } from "../../global/context/StateContext";
import Image from 'next/image';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { DivProp } from "../../components/StyledComponents";
import { PortableText } from '@portabletext/react'
import currency from "currency.js";
import turnMoney from "../../lib/turnMoney";
import { Grid, Product } from "../../components";
import { NextSeo } from "next-seo";
import { productQuery, productsQuery } from "../../lib/queries";

const Style = styled(DivProp)`
    background-color: #fff;
    .slider {
        max-width: 375px;
        margin-bottom: 1.7em;
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
    
    .top-product-part {
        margin-left: 1em;
        .product-name, .product-price, .parcela, .product-color {
            margin-bottom: 15px;
        }
        .product-name {
            font-size: .9rem;
        }
        .product-price {
            font-size: 1.25rem;
            .descount {
                margin-left: 1em;
                font-size: .9rem;
                opacity: .7;
                text-decoration: line-through;
            }
        }
        .parcela {
            font-size: .9rem;
            opacity: .7;
        }
        .product-color {
            h3 {
                margin-bottom: .5em;
            }
            .colors {
                display: flex;
                div {cursor: pointer;}
                div:not(:last-child) {
                    margin-right: .5em;
                }
                .color {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    margin: 3px;
                }
            }
            .colors > div:first-child {
                border-radius: 50%; 
                border: 2px solid black; 
                box-sizing: border-box;
            }
        }
        .product-quantity {
            display: flex;
            font-size: .9em;
        .quantity-desc {
            display: grid;
            grid-template-columns: repeat(3, 25px);
            gap: 15px;
            grid-template-rows: 25px;
            padding-left: 2em;
            .minus, .plus {
                cursor: pointer;
            }
            .num {
                cursor: default;
                user-select: none;
            }
        }
    }
    }
    .btn-centralize {
        display: flex;
        justify-content: center;
        

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
    }
    .bottom-product-part{
        
    }
    .you-may-like {
        
        h3 {
            margin-left: 1em;
            margin-bottom: 2em;
            font-size: .9rem;
            font-weight: bold;
        }
    }
`;

const Item: NextPage = ({ product, products }: any) => {

    const [btnText, setBtnText] = useState("Adicionar Ao Carrinho");
    const { image, slug, name, desc, details, price } = product;
    const { qty, decQty, incQty, onAdd }: any = useStateContext();

    const allProducts: () => [] = () => products.map((product: any) => (<Product key={product._id} product={product}/>));
    
    const btnClick = () => {
        if (btnText === "Adicionar Ao Carrinho") {
            setBtnText("✓")
            setTimeout(() => { setBtnText("Adicionar Ao Carrinho")}, 1000)
        }
    }
    const parcel = (price: number, parcels: number) => {
        const money = String(currency(price, { symbol: "R$"}).distribute(parcels)[0].format());
        return `${parcels}x de ${money} sem juros`;
    }


    return (
        <Style>
            <NextSeo title={name} description={desc}/>
            <div className="slider">
                <Image
                    height={200} 
                    src={urlFor(image.asset._ref).url()} 
                    alt={slug.current} 
                    width={150}
                    layout="responsive" 
                    sizes="30vw"
                />
            </div>
            <div className="top-product-part">
                <h4 className="product-name">{name}</h4>
                <div className="product-price">{turnMoney(price)}<span className="descount">{turnMoney(100)}</span></div>
                <div className="parcela">{parcel(price, 2)}</div>
                <div className='product-quantity'>
                    <h3>quantidade:</h3>
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
            </div>
            <div className="btn-centralize">
                <button 
                type="button" 
                className='add-to-cart'
                onClick={() => {
                    btnText === "Adicionar Ao Carrinho" && onAdd(product, qty)
                    btnClick()
                }}
                >
                    {btnText}
                </button>
            </div>
            <div className="bottom-product-part">
                <PortableText value={details} />
            </div>
            <div className="you-may-like">
                <h3>Você tambem pode gostar</h3>
                <Grid productPage>
                    {allProducts()}
                </Grid>
            </div>
        </Style>
    )
};

export default Item;

export const getStaticPaths = async () => {

    const products = await client.fetch(productsQuery);
    const paths = products.map((product: any) => ({
        params: {
            slug: product.slug
        }
    }));
    return {
        paths,
        fallback: false
    } 
}

export const getStaticProps = async ({ params: { slug } }: any) => {

    const product = await client.fetch(productQuery(slug));
    const products = await client.fetch(productsQuery);

    return {
        props: {
            product,
            products
        }
    }
}

