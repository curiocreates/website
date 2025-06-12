import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import mystery from "../assets/BasicImages/Mystery-Gifting-box.jpg";
import love from "../assets/BasicImages/Mystery-Gifting-box.jpg";
import gift from "../assets/BasicImages/Mystery-Gifting-box.jpg";
import anime from "../assets/BasicImages/Mystery-Gifting-box.jpg";
import wallet from "../assets/BasicImages/Mystery-Gifting-box.jpg";

const ProductContainer = styled.section`
  padding: 40px 20px;
  text-align: center;
  background: linear-gradient(125deg, rgb(78, 42, 132), rgb(130, 188, 182), rgb(255, 215, 0));  color: #000;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 0.25rem;

 

  @media (max-width: 480px) {
  grid-template-columns: repeat(2, minmax(170px, 1fr)); /* Increase min size */
  gap: 0.25rem; /* Increase gap */
}
`;

const Card = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
  background: linear-gradient(30deg, rgb(78, 42, 132), rgb(94, 209, 198));
  border: 2px solid #FFD700; /* Gold Border */
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  padding-bottom: 1rem;
  position: relative;
  transition: transform 0.3s ease-in-out;
  margin-top: 3px;
  margin-bottom: 3px;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(194, 172, 47, 0.6); /* Turquoise Glow */
  }
`;
// const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border-radius: 10px;
//   overflow: hidden;
//   cursor: pointer;
// `;

// const CardImage = styled.img`
//   width: 100%;
//   height: auto;
//   object-fit: cover;
//   border-radius: 10px;
//   transition: transform 0.3s ease-in-out;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;
const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardTitle = styled.h3`
//   background: #FFD700; /* Gold */
//   color: #4B0082; /* Royal Purple */
  font-size: 1.2rem;
  font-weight: bold;
  padding: 5px;
  text-align: center;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const ShopNow = styled.button`
  display: inline-block;
  background: #FFD700; /* Gold */
  color: #4B0082; /* Royal Purple */
  font-size: 1rem;
  font-weight: bold;
  padding: 12px 30px;
  border: 2px solid #40E0D0; /* Turquoise Border */
  border-radius: 30px;
  cursor: pointer;
  font-family: 'Cinzel Decorative', serif;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 10px rgba(255, 215, 0, 0.5); /* Gold Glow */
  text-decoration: none;

  &:hover {
    background: linear-gradient(90deg, #FFD700, #40E0D0); /* Gold to Turquoise */
    color: #FFFFFF; /* White Text on Hover */
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(64, 224, 208, 0.8); /* Turquoise Glow */
  }

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background: black;
    margin-top: 3px;
  }
`;
const Heading=styled.h1`
  font-family: 'Cinzel Decorative', serif;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 10px rgba(255, 215, 0, 0.5); /* Gold Glow */
  text-decoration: none;
`;


const products = [
  { name: "Mystery Boxes", href: "/boxes", image: mystery },
  { name: "Mystic Love Boxes", href: "/valentine-boxes", image: love },
  { name: "Build Your Own Gifting Box", href: "/MysticGiftingBox", image: gift },
  { name: "Build Your Own Anime Box", href: "/AnimeLovers", image: anime },
  { name: "Wallet Crates", href: "/Leather-Wallets", image: wallet }
];

const ProductCards = () => {
  const navigate = useNavigate();

  return (
    <ProductContainer>
        <Heading>Our Boxes</Heading>
      <GridContainer>
        {products.map((product, index) => (
          <Card key={index} onClick={() => navigate(product.href)}>
            <CardImage src={product.image} alt={product.name} />
            {/* <CardContent> */}
              <CardTitle>{product.name}</CardTitle>
              <ShopNow>SHOP NOW</ShopNow>
            {/* </CardContent> */}
          </Card>
        ))}
      </GridContainer>
      
    </ProductContainer>
    
  );
};

export default ProductCards;