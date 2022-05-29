import type { FC } from "react";
import styled from "styled-components";
import Image from "next/image";
import { urlFor } from "../lib/client";
import Link from "next/link";
import { motion } from "framer-motion";

const Style = styled.div`
padding: .75em;
border: solid #E4E4E4 1px;
cursor: pointer;
div {
.product-image {
  user-select: none;
}
.product-price {
  margin-top: .25em;
}
.product-name {
  font-size: .65rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
}
@media only screen and (min-width: 540px) {

  
}
`;
interface Prop {
  product: any
}
const Product: FC<Prop> = ({ product: {image, name, slug, price, lowImage} }: Prop) => {
 
  return (
    <motion.div
    whileHover={{ scale: 1.075 }} 
    >
      <Style>
        <Link href={`/shop/${slug?.current}`}>
          <div>
            <Image
            alt={slug?.current}
            layout="responsive"
            sizes="25vw"
            placeholder="blur"
            blurDataURL={urlFor(lowImage ? lowImage.asset._ref : 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg').url()}
            width={250} 
            height={325} 
            src={urlFor(image ? image[0].asset._ref : 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg').url()}
            className="product-image"
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