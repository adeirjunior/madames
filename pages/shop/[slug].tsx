import type { NextPage } from "next";
import { client } from "../../lib/client";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { urlFor } from "../../lib/client";
import styled from "styled-components";
import Head from "next/head";
import { useStateContext } from "../../global/context/StateContext";
import Zoom from 'next-image-zoom';

const Style = styled.div`
    background-color: #fff;
    .image-gallery {
        width: 150px;
        
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
    const { image, lowImage, slug, name, desc, details } = product;
    const { qty, decQty, incQty, onAdd }: any = useStateContext();
    return (
        <Style>
            <Head>
                <title>Madames | {name}</title>
                <meta name="description" content={desc} />
            </Head>
            <div className="image-gallery">
                <Zoom 
                height={200} 
                src={urlFor(image ? image[0].asset._ref : 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg').url()} 
                alt={slug.current} 
                width={150} 
                blurDataURL={urlFor(lowImage ? lowImage.asset._ref : 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg').url()} 
                layout="responsive" 
                sizes="30vw" 
                placeholder="blur"
                />
            </div>
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
            onClick={() => onAdd(product, qty)}
            >
                Adicionar Ao Carrinho
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

