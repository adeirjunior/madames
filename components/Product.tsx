import type { FC } from "react";
import styled from "styled-components";
import Image from "next/image";
import { urlFor } from "../lib/client";
import Link from "next/link";

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
`;
interface Prop {
  product: any
}
const Product: FC<Prop> = ({ product: {image, name, slug, price, lowImage} }: Prop) => {
 
  return (
    <Style>
      <Link href={`/shop/${slug?.current}`}>
        <div>
          <Image
          alt={slug?.current}
          layout="responsive"
          sizes="25vw"
          placeholder="blur"
          blurDataURL={urlFor(lowImage.asset._ref).url()}
          width={250} 
          height={325} 
          src={urlFor(image && image[0].asset._ref).url()}
          className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">R${price}</p>
        </div>
      </Link>
    </Style>
  )
}

export default Product;