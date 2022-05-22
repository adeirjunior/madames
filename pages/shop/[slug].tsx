import type { NextPage } from "next";
import { client } from "../../lib/client";
import Image from "next/image";
import { urlFor } from "../../lib/client";

const Item: NextPage = ({ product: { image } }: any) => {

    return (
        <Image width={150} height={250} alt="ao" src={urlFor(image && image[0].asset._ref).url()}/>
    )
}

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
    console.log(paths)
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

