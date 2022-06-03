import type { FC } from "react";
import styled from "styled-components";
import Image from "next/image";
import { urlFor } from "../lib/client";
import Link from "next/link";
import { motion } from "framer-motion";
import Div from "./StyledDivComponent";

const Style = styled(Div)`
padding: .75em;
border: solid #E4E4E4 1px;
cursor: pointer;
transition: box-shadow .2s;
background-color: #fff;
.product {
  img {
    user-select: none;
    display: none;
  }
  .product-price {
    margin-top: .25em;
  }
  .product-name {
    font-size: .65rem;
    margin-top: 1em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
&:hover {
  box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, .2);
  .product-name {
  overflow: auto;
  text-overflow: clip;
  white-space: normal;
}
}
@media only screen and (min-width: 540px) {


}
@media only screen and (min-width: 1440px) {

.product {
  .product-price {
    font-size: 1.2rem;
  }
  .product-name {
    font-size: .8rem;
  }
}
}
`;
interface Prop {
  product: any
}
const Product: FC<Prop> = ({ product: {image, name, slug, price, lowImage} }: Prop) => {
 
  return (
    <motion.div
    whileHover={{ scale: 1.05 }} 
    >
      <Style>
        <Link href={`/shop/${slug?.current}`}>
          <div className="product">
            <Image
            alt={slug?.current}
            layout="responsive"
            sizes="25vw"
            placeholder="blur"
            blurDataURL={urlFor(lowImage ? lowImage.asset._ref : 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg').url()}
            width={250} 
            height={325} 
            src={urlFor(image ? image[0].asset._ref : 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg').url()}
            />
            <p className="product-name">{name}</p>
            <p className="product-price">R${price}</p>
          </div>
        </Link>
      </Style>
    </motion.div>
    
  )
}

export default Product;