import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../lib/client";

const Style = styled.div`
background: linear-gradient(to bottom, rgba(236, 71, 142, 1), rgba(236, 71, 142, 0));
width: 100%;
height: 12em;
.hero-banner-container {
  padding: 0 1em;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  height: 100%;
  img {
    user-select: none;
  }
  .banner-left-side {
    float: left;
    h3 {
      color: #fff;
      font-size: 2rem;
      font-weight: 800;
      text-transform: uppercase;
    }
    h4 {
      color: #000;
      font-weight: bold;
      font-size: .85rem;
    }
    p {
      margin: .25em 0;
      color: #000;
      font-size: .75rem;
    }
    button {
      background-color: #EC3535;
      border: none;
      font-weight: 800;
      font-size: .8rem;
      padding: .5em 1em;
      color: #fff;
      cursor: pointer;
      font-family: Montserrat;
      border-radius: .5em;
      margin: .5em 0;
      user-select: none;
    }
  }
}
`;

const HeroBanner = ({ banner }: any) => {
  const { image, product, discount, smallText, largeText1, buttonText, desc, saleTime } = banner;

  return (
    <Style>
      <div className="hero-banner-container">
        <div className="banner-left-side">
          <p>{smallText}</p>
          <h4>{saleTime}</h4>
          <h3>{largeText1}</h3>
          <Link href={`shop/${product}`}>
            <button>{buttonText}</button>
          </Link>
        </div>
        <div className="banner-description">

        </div>
        <Image 
        layout="raw"
        sizes="30vw"
        priority
        alt="ao"
        src={urlFor(image && image.asset._ref).url()} 
        width={120} 
        height={175}
        />
      </div>
    </Style>
  )
}

export default HeroBanner;