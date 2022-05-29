import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../lib/client";
import { motion } from "framer-motion";

const Style = styled.div`
background: linear-gradient(to bottom, rgba(236, 71, 142, 1), rgba(236, 71, 142, 0));
width: 100%;
height: 200px;
.hero-banner-container {
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
  .image-and-discount {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    cursor: default;
    opacity: 0;
    .label {
      display: none;
      position: absolute;
      left: -25px;
      top: 15px;
      padding: .2em .5em;
      font-size: 1.5rem;
      color: #fff;
      font-weight: 800;
      background-color: #EC3535;
      z-index: 0;
    }
    img {
      z-index: 99;
    }
  }
  .banner-description {
    display: none;
    font-size: .75rem;
    text-align: end;
    h5 {
      font-weight: 500;
    }
    p {
      margin-top: 1em;
      font-size: .6rem;
    }
  }
}

@media only screen and (min-width: 425px) {
  .hero-banner-container {
    .image-and-discount {
      .label {
        display: block; 
      }
      img {
        width: 150px;
        height: auto;
      }
    }
    .banner-left-side {
      p {
        font-size: .85rem;
      }
      h4 {
        font-size: 1rem;
      }
      h3 {
        font-size: 3rem;
      }
      button {
        font-size: 1rem;
      }
    }
  }
}
@media only screen and (min-width: 720px) {
    border-radius: 1em; 
    margin-bottom: 2em;
    .hero-banner-container .banner-description {
      display: block;
    } 
  }
  @media only screen and (min-width: 900px) {
    margin-bottom: 4em;
    height: 300px;
    .hero-banner-container {
      .banner-description {
        h5 {
          font-size: .7rem;
        }
        p {
          font-size: .65rem;
        }
      }
      .image-and-discount {
        img {
          width: 200px;
          height: auto;
        }
        .label {
          top: 2em;
        }
      }
    }
  }
  @media only screen and (min-width: 1440px) {
    border-radius: 2em; 
    height: 400px;
    .hero-banner-container {
      .banner-left-side {
        h3 {
          font-size: 6rem;
        }
        h4 {
          font-size: 2.25rem;
        }
        p {
          font-size: 1rem;
          font-weight: 500;
        }
      }
      .banner-description {
        h5 {
          font-size: .85rem;
          font-weight: 600;
        }
        p {
          font-size: .7rem;
          font-weight: 500;
        }
      }
      .image-and-discount {
        img {
          width: 350px;
          height: auto;
          padding-bottom: 2em;
        }
        .label {
          top: 6em;
        }
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
        <motion.div 
        animate={{ opacity: 1, x: 10 }}
        transition={{ duration: .75 }}
        className="image-and-discount">
          <Image 
          layout="raw"
          sizes="30vw"
          priority
          alt="ao"
          src={urlFor(image && image.asset._ref).url()} 
          width={120} 
          height={175}
          />
          <span className="label">
            {discount}%
          </span>
        </motion.div>
        <div className="banner-description">
          <h5>Descrição</h5>
          <p>{desc}</p>
        </div>
      </div>
    </Style>
  )
}

export default HeroBanner;