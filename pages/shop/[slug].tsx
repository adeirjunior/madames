import type { NextPage } from "next";
import { client } from "../../lib/client";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { urlFor } from "../../lib/client";
import styled from "styled-components";
import { useStateContext } from "../../global/context/StateContext";

const Style = styled.div`
    background-color: #fff;
`;

const Item: NextPage = ({ product }: any) => {
    const { image, lowImage, slug } = product;
    const { qty, decQty, incQty, onAdd }: any = useStateContext();
    return (
        <Style>
            <div>
                <Image
                layout="responsive"
                sizes="30vw"
                placeholder="blur"
                blurDataURL={urlFor(lowImage.asset._ref).url()}
                width={150} 
                height={200} 
                alt={slug.current}
                src={urlFor(image && image[0].asset._ref).url()}
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

