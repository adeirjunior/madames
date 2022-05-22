import type { FC } from "react";
import styled from "styled-components";
import Image from "next/image";
import { urlFor } from "../lib/client";
import Link from "next/link";

const Style = styled.div`
padding: 1em;
`;
interface Prop {
  product: any
}
const Product: FC<Prop> = ({ product: {image, name, slug, price} }: Prop) => {

  return (
    <Style>
      <Link href={`/shop/${slug?.current}`}>
        <div>
          <Image
          alt="ao" 
          width={250} 
          height={250} 
          src={urlFor(image[0].asset._ref).url()}
          />
          <p>{name}</p>
          <p>R$ {price}</p>
        </div>
      </Link>
    </Style>
  )
}

export default Product;