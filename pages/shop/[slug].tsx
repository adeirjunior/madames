import type { NextPage } from "next";
import { client } from "../../lib/client";

const Item: NextPage = () => {

    return <>
    
    </>
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
    return {
        props: {
            paths,
            fallback: "blocking"
        }
    }
}
export const getStaticProps = async ({ params: { slug } }: any) => {
    const query = `*[_type == "product" && slug.current == "${slug}"][0]`;

    return {
        props: {

        }
    }
}