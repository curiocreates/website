import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import Footer from "../Components/Footer"

import birthday from "../assets/occasions/birthday.jpg";
import anniversary from "../assets/occasions/Anniversary.jpg";
import congratulations from "../assets/occasions/congratulations.jpg";
import love from "../assets/occasions/love.jpg";

import boxImage from "../assets/BasicImages/Mystery-Gifting-box-1.JPG";

import dancingGirl from "../assets/Mirrors/dancing-girl.JPG";
import elephant from "../assets/Mirrors/elephant.JPG";
import featherBlue from "../assets/Mirrors/feather-blue.JPG";
import featherGreen from "../assets/Mirrors/feather-green.JPG";
import featherMulticolour from "../assets/Mirrors/feather-multicolour.JPG";
import featherViolet from "../assets/Mirrors/feather-violet.JPG";
import featherVioletYellow from "../assets/Mirrors/feather-violet-yellow.JPG";
import hand from "../assets/Mirrors/hand.JPG";
import haveAGoodTime from "../assets/Mirrors/have-a-good-time.JPG";
import iLoveUnicorn from "../assets/Mirrors/i-love-unicorn.JPG";
import peacocksBeige from "../assets/Mirrors/peacocks-beige.JPG";
import sleeptune from "../assets/Mirrors/sleeptune.JPG";
import teddyBlack from "../assets/Mirrors/teddy-black.JPG";
import teddyBlue from "../assets/Mirrors/teddy-blue.JPG";
import unicornBlue from "../assets/Mirrors/unicorn-blue.JPG";
import unicornMagico from "../assets/Mirrors/unicorn-magico.JPG";

import banner from "../assets/BasicImages/banner.jpg"

import AtomicHabits from "../assets/Books/Atomic-habits.JPG";
import DoEpicShitDone from "../assets/Books/Do-epic-shit-done.JPG";
import IkigaiHardcoverBook from "../assets/Books/Ikigai-hardcover-book.JPG";
import PsychologyOfMoney from "../assets/Books/psychology-of-money.JPG";
import RichDadPoorDad from "../assets/Books/Rich-dad-poor-dad.JPG";
import TheAlchemist from "../assets/Books/The-Alchemist.JPG";
import TheMonkWhoSoldHisFerrari from "../assets/Books/The-monk-who-sold-his-ferrari.JPG";
import ThePowerOfSubconsciousMind from "../assets/Books/The-power-of-subconscious-mind.JPG";

import CharcoalSoap from "../assets/Soaps/Charcoal-Soap.JPG";
import GoatmilkSoap from "../assets/Soaps/Goatmilk-Soap.JPG";
import RedSandalSoap from "../assets/Soaps/Red-Sandal-Soap.JPG";
import RoseSoap from "../assets/Soaps/Rose-Soap.JPG";

import BiegeTeddy from "../assets/SoftToys/Biege-Teddy.JPEG";
import BlueTeddy from "../assets/SoftToys/Blue-Teddy.JPEG";
import BrownTeddy from "../assets/SoftToys/Brown-Teddy.JPEG";
import PinkTeddy from "../assets/SoftToys/Pink-Teddy.JPEG";
import RedTeddy from "../assets/SoftToys/Red-Teddy.JPEG";
import YellowTeddy from "../assets/SoftToys/Yellow-Teddy.JPEG";

import VacuumBottleBiege from "../assets/Bottles/Vacuum-Bottle-Biege.JPEG";
import VacuumBottleBlack from "../assets/Bottles/Vacuum-Bottle-Black.JPEG";
import VacuumBottleBlue from "../assets/Bottles/Vacuum-Bottle-Blue.JPEG";
import VacuumBottlePeach from "../assets/Bottles/Vacuum-Bottle-Peach.JPEG";
import VacuumBottleRed from "../assets/Bottles/Vacuum-Bottle-Red.JPEG";

import CrownClock from "../assets/PocketWatches/Crown-Clock.JPEG";
import HarryPotterClock from "../assets/PocketWatches/HarryPotter-Clock.JPEG";
import TheGreatestDadClock from "../assets/PocketWatches/The-Greatest-Dad-Clock.JPEG";
import TheGreatestMomClock from "../assets/PocketWatches/The-Greatest-Mom-Clock.JPEG";

// import loadingchr from "../assets/BasicImages/loading image.jpg";

import basic from "../assets/Perfumes/Basic.JPEG";
import Gold from "../assets/Perfumes/Gold.JPEG";
import Premium from "../assets/Perfumes/Premium-1.JPEG";
import Classic from "../assets/Perfumes/Premium-2.JPEG";

import AstronautBlack from "../assets/Keychains/Astronaut-Black.JPEG";
import BatmanBatmobile from "../assets/Keychains/Batman-Batmobile.JPEG";
import BatmanCar from "../assets/Keychains/Batman-Car.JPEG";
import Couple from "../assets/Keychains/Couple.JPEG";
import CoupleWedding from "../assets/Keychains/Couple-Wedding.JPEG";
import DoubleFaceKunaiWeapon from "../assets/Keychains/Double-Face-Kunai-Weapon.JPEG";
import Goku from "../assets/Keychains/Goku.JPEG";
import GreenCar from "../assets/Keychains/Green-car.JPEG";
import HarryPotter from "../assets/Keychains/HarryPotter.JPEG";
import ItachiKunaiWeapon from "../assets/Keychains/Itachi-Kunai-Weapon.JPEG";
import ItachiUchihaNaruto from "../assets/Keychains/Itachi-Uchiha-Naruto.JPEG";
import KakashiHatakeNaruto from "../assets/Keychains/Kakashi-Hatake-Naruto.JPEG";
import NarutoFaceMetal from "../assets/Keychains/Naruto-Face-Metal.JPEG";
import PrincessWhite from "../assets/Keychains/Princess-white.JPEG";
import PrinceWhite from "../assets/Keychains/Prince-White.JPEG";
import PubgAWMSniper from "../assets/Keychains/Pubg-AWM-Sniper.JPEG";
import ShinchanBlue from "../assets/Keychains/Shinchan-Blue.JPEG";
import ShinchanGreen from "../assets/Keychains/Shinchan-Green.JPEG";
import ShinchanSpin from "../assets/Keychains/Shinchan-Spin.JPEG";
import TankMetal from "../assets/Keychains/Tank-Metal.JPEG";
import UzumakiNaruto from "../assets/Keychains/Uzumaki-Naruto.JPEG";




const products = [

  // Soft Toys (First)
  { id: 1, name: "Biege Teddy", price: 299, category: "Soft Toys", images: [BiegeTeddy], inStock: true },
  { id: 2, name: "Blue Teddy", price: 299, category: "Soft Toys", images: [BlueTeddy], inStock: true },
  { id: 3, name: "Brown Teddy", price: 299, category: "Soft Toys", images: [BrownTeddy], inStock: true },
  { id: 4, name: "Pink Teddy", price: 299, category: "Soft Toys", images: [PinkTeddy], inStock: true },
  { id: 5, name: "Red Teddy", price: 299, category: "Soft Toys", images: [RedTeddy], inStock: true },
  { id: 6, name: "Yellow Teddy", price: 299, category: "Soft Toys", images: [YellowTeddy], inStock: true },

  // Cute Bottles
  { id: 7, name: "Vacuum Bottle Biege", price: 399, category: "Cute Bottles", images: [VacuumBottleBiege], inStock: true },
  { id: 8, name: "Vacuum Bottle Black", price: 399, category: "Cute Bottles", images: [VacuumBottleBlack], inStock: true },
  { id: 9, name: "Vacuum Bottle Blue", price: 399, category: "Cute Bottles", images: [VacuumBottleBlue], inStock: true },
  { id: 10, name: "Vacuum Bottle Peach", price: 399, category: "Cute Bottles", images: [VacuumBottlePeach], inStock: true },
  { id: 11, name: "Vacuum Bottle Red", price: 399, category: "Cute Bottles", images: [VacuumBottleRed], inStock: true },

  // Pocket Watches
  { id: 12, name: "Crown Clock", price: 399, category: "Pocket Watches", images: [CrownClock], inStock: true },
  { id: 13, name: "Harry Potter Clock", price: 399, category: "Pocket Watches", images: [HarryPotterClock], inStock: true },
  { id: 14, name: "The Greatest Dad Clock", price: 399, category: "Pocket Watches", images: [TheGreatestDadClock], inStock: true },
  { id: 15, name: "The Greatest Mom Clock", price: 399, category: "Pocket Watches", images: [TheGreatestMomClock], inStock: true },

  // Handmade Soaps
  { id: 16, name: "Charcoal Soap", price: 240, category: "Handmade-Soaps", images: [CharcoalSoap], inStock: true },
  { id: 17, name: "Goatmilk Soap", price: 240, category: "Handmade-Soaps", images: [GoatmilkSoap], inStock: true },
  { id: 18, name: "RedSandal Soap", price: 240, category: "Handmade-Soaps", images: [RedSandalSoap], inStock: true },
  { id: 19, name: "Rose Soap", price: 240, category: "Handmade-Soaps", images: [RoseSoap], inStock: true },

  // Books and Novels
  { id: 20, name: "Atomic Habits", price: 249, category: "Books and Novels", images: [AtomicHabits], inStock: true },
  { id: 21, name: "Do Epic Shit Done", price: 249, category: "Books and Novels", images: [DoEpicShitDone], inStock: true },
  { id: 22, name: "Ikigai HardcoverBook", price: 249, category: "Books and Novels", images: [IkigaiHardcoverBook], inStock: true },
  { id: 23, name: "Psychology Of Money", price: 249, category: "Books and Novels", images: [PsychologyOfMoney], inStock: true },
  { id: 24, name: "Rich Dad Poor Dad", price: 249, category: "Books and Novels", images: [RichDadPoorDad], inStock: true },
  { id: 25, name: "The Alchemist", price: 249, category: "Books and Novels", images: [TheAlchemist], inStock: true },
  { id: 26, name: "The Monk Who Sold His Ferrari", price: 249, category: "Books and Novels", images: [TheMonkWhoSoldHisFerrari], inStock: true },
  { id: 27, name: "The Power Of Subconscious Mind", price: 249, category: "Books and Novels", images: [ThePowerOfSubconsciousMind], inStock: true },

    // Beauty Mirrors (Fixed IDs)
    { id: 28, name: "Dancing Girl - Mirror", price: 299, category: "Beauty Mirrors", images: [dancingGirl], inStock: true },
    { id: 29, name: "Elephant - Mirror", price: 399, category: "Beauty Mirrors", images: [elephant], inStock: true },
    { id: 30, name: "Feather - Blue - Mirror", price: 349, category: "Beauty Mirrors", images: [featherBlue], inStock: true },
    { id: 31, name: "Feather - Green - Mirror", price: 199, category: "Beauty Mirrors", images: [featherGreen], inStock: true },
    { id: 32, name: "Feather - Multicolour - Mirror", price: 249, category: "Beauty Mirrors", images: [featherMulticolour], inStock: true },
    { id: 33, name: "Feather - Violet - Mirror", price: 299, category: "Beauty Mirrors", images: [featherViolet], inStock: true },
    { id: 34, name: "Feather - Violet Yellow - Mirror", price: 349, category: "Beauty Mirrors", images: [featherVioletYellow], inStock: true },
    { id: 35, name: "Hand - Mirror", price: 199, category: "Beauty Mirrors", images: [hand], inStock: true },
    { id: 36, name: "Have A Good Time - Mirror", price: 249, category: "Beauty Mirrors", images: [haveAGoodTime], inStock: true },
    { id: 37, name: "I Love Unicorn - Mirror", price: 299, category: "Beauty Mirrors", images: [iLoveUnicorn], inStock: true },
    { id: 38, name: "Peacocks - Beige - Mirror", price: 349, category: "Beauty Mirrors", images: [peacocksBeige], inStock: true },
    { id: 39, name: "Sleeptune - Mirror", price: 249, category: "Beauty Mirrors", images: [sleeptune], inStock: true },
    { id: 40, name: "Teddy - Black - Mirror", price: 349, category: "Beauty Mirrors", images: [teddyBlack], inStock: true },
    { id: 41, name: "Teddy - Blue - Mirror", price: 199, category: "Beauty Mirrors", images: [teddyBlue], inStock: true },
    { id: 42, name: "Unicorn - Blue - Mirror", price: 249, category: "Beauty Mirrors", images: [unicornBlue], inStock: true },
    { id: 43, name: "Unicorn - Magico - Mirror", price: 299, category: "Beauty Mirrors", images: [unicornMagico], inStock: true },
  
    // Curio Crates Signature Attars (Non-Alcoholic)
  { id: 44, name: "Mystic Oud", price: 499, category: "Perfumes", description: "A deep, mysterious blend of aged oud, evoking luxury and timeless elegance.", images: [Classic], inStock: true },
  { id: 45, name: "Choco Luxe", price: 349, category: "Perfumes", description: "A rich and velvety chocolate scent with warm amber undertones.", images: [Gold], inStock: true },
  { id: 46, name: "Arabian Majestic", price: 399, category: "Perfumes", description: "A bold Arabian oud infused with spicy and woody notes.", images: [Premium], inStock: true },
  { id: 47, name: "Flora Facinate", price: 499, category: "Perfumes", description: "A mesmerizing floral symphony of exotic roses and jasmine.", images: [Classic], inStock: true },
  { id: 48, name: "Flora Amaze", price: 499, category: "Perfumes", description: "A vibrant bouquet of fresh blossoms with a soft, sweet touch.", images: [Classic], inStock: true },
  { id: 49, name: "Flora Eternal Heaven", price: 449, category: "Perfumes", description: "A heavenly blend of florals and soft musk, pure and serene.", images: [Gold], inStock: true },
  { id: 50, name: "Femme Intense", price: 499, category: "Perfumes", description: "A powerful yet graceful mix of deep florals and creamy woods.", images: [Classic], inStock: true },
  { id: 51, name: "Silver Musk", price: 349, category: "Perfumes", description: "A smooth, fresh musk with hints of citrus and soft vanilla.", images: [Premium], inStock: true },
  { id: 52, name: "Sweet Ember", price: 299, category: "Perfumes", description: "A warm, romantic blend of sugared notes and sandalwood.", images: [basic], inStock: true },

  // Keychains
  { id: 53, name: "Astronaut Black", price: 299, category: "Keychains", images: [AstronautBlack], inStock: true },
  { id: 54, name: "Batman Batmobile", price: 349, category: "Keychains", images: [BatmanBatmobile], inStock: true },
  { id: 55, name: "Batman Car", price: 329, category: "Keychains", images: [BatmanCar], inStock: true },
  { id: 56, name: "Couple", price: 399, category: "Keychains", images: [Couple], inStock: true },
  { id: 57, name: "Couple Wedding", price: 429, category: "Keychains", images: [CoupleWedding], inStock: true },
  { id: 58, name: "Double Face Kunai Weapon", price: 349, category: "Keychains", images: [DoubleFaceKunaiWeapon], inStock: true },
  { id: 59, name: "Goku", price: 279, category: "Keychains", images: [Goku], inStock: true },
  { id: 60, name: "Green Car", price: 319, category: "Keychains", images: [GreenCar], inStock: true},
  { id: 61, name: "Harry Potter", price: 299, category: "Keychains", images: [HarryPotter], inStock: true },
  { id: 62, name: "Itachi Kunai Weapon", price: 349, category: "Keychains", images: [ItachiKunaiWeapon], inStock: true },
  { id: 63, name: "Itachi Uchiha - Naruto", price: 279, category: "Keychains", images: [ItachiUchihaNaruto], inStock: true},
  { id: 64, name: "Kakashi Hatake - Naruto", price: 279, category: "Keychains", images: [KakashiHatakeNaruto], inStock: true },
  { id: 65, name: "Naruto Face Metal", price: 349, category: "Keychains", images: [NarutoFaceMetal], inStock: true },
  { id: 66, name: "Princess White", price: 349, category: "Keychains", images: [PrincessWhite], inStock: true },
  { id: 67, name: "Prince White", price: 349, category: "Keychains", images: [PrinceWhite], inStock: true },
  { id: 68, name: "Pubg AWM Sniper", price: 399, category: "Keychains", images: [PubgAWMSniper], inStock: true },
  { id: 69, name: "Shinchan Blue", price: 249, category: "Keychains", images: [ShinchanBlue], inStock: true },
  { id: 70, name: "Shinchan Green", price: 249, category: "Keychains", images: [ShinchanGreen], inStock: true},
  { id: 71, name: "Shinchan Spin", price: 249, category: "Keychains", images: [ShinchanSpin], inStock: true },
  { id: 72, name: "Tank Metal", price: 379, category: "Keychains", images: [TankMetal], inStock: true },
  { id: 73, name: "Uzumaki - Naruto", price: 299, category: "Keychains", images: [UzumakiNaruto], inStock: true }

];


const occasionCards = [
  { id: 1, name: "Birthday", image: birthday },
  { id: 2, name: "Anniversary", image: anniversary },
  { id: 3, name: "Congratulations", image: congratulations },
  { id: 4, name: " With Love", image: love }

];
const Banner = styled.div`
  background: url(${banner}) center/cover no-repeat;
  color: white;
  padding: 40px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  position: relative;
  width: 100%;
  height: 100px;
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative; /* or absolute if needed */
  gap: 5px;
  overflow-x: auto; /* Enables horizontal scrolling */
  white-space: nowrap;
  padding: 10px;
  scrollbar-width: 5px; /* Optional: Adjust scrollbar appearance */
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on mobile */
  
  &::-webkit-scrollbar {
    height: 5px; /* Adjust scrollbar height */
  }

  &::-webkit-scrollbar-thumb {
    background: orange; /* Customize scrollbar color */
    border-radius: 10px;
  }
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  background: ${(props) => (props.active ? "#ff9800" : "#f0f0f0")};
  color: ${(props) => (props.active ? "white" : "black")};
  cursor: pointer;
  &:hover {
    background: rgb(58, 32, 72);
  }
`;



const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Ensures proper centering */
  padding: 10px; /* Increased padding for better spacing */
  margin: auto;
  background: rgb(16, 16, 16);
  color: white;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden; /* Prevents unwanted horizontal scroll */
  position: relative;

  @media (max-width: 600px) {
    padding: 5px; /* Reduce padding on small screens */
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  gap: 0.25rem;
  left:0;
  right:0;
  justify-content: center;
  align-items: stretch;
  width: 100%; 

  @media (min-width: 601px) { 
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Adjust for desktop */
  }
  
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Card = styled.div`
  background:rgb(58, 32, 72);
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: 0.3s;
  cursor: pointer;
  width: 200px; /* Increased card size */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
`;

const ItemTitle = styled.h3`
  font-size: 1rem;
  margin: 0.5rem 0;
  color:#08080;
`;

const Price = styled.p`
  font-size: 1rem;
  margin: 0.25rem 0;
  margin-bottom : 0.25rem;
  margin-top: 0.25rem;
  color: #08080;
  
`;

const Button = styled.button`
  width: 100%;
  padding: 8px;
  margin-top: 8px;
  background: ${(props) => (props.selected ? "#ff9800" : "#f0f0f0")};
  color: ${(props) => (props.selected ? "white" : "black")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #ddd;
  }
`;
const BackButton = styled.button`
  background:  #f0a500;
  position: absolute;
  top: 0.5px;
  left: 30px;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  color: black;
  padding: 8px 15px;
  border-radius: 15px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const StepsContainer = styled.p`
  background:rgb(78, 34, 104);
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
  font-size: 16px;
`;
const OfferBox = styled.div`
  
  text-align: center;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: auto;
`;

const OfferText = styled.h4`
  margin: 0;
  font-size: 28px;
  color: beige;
  font-weight: bold;
  
`;

const SubText = styled.span`
  display: block;
  font-size: 16px;
  color:rgb(246, 240, 240);
  margin-top: 5px;
  font-size: 16px;
`;
const FixedBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 5px;
  right: 5px;
  width: (100px); /* Adjust for left/right margins */
  border-radius: 10px;
  background: rgb(22, 22, 22);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 10px 10px rgba(255, 255, 255, 0.1);
  min-height: 100px;
  padding: 10px 10px; /* Ensure padding consistency */
  text-align: center;
  max-width: 1200px; /* Prevent stretching on larger screens */
  margin: 0 auto;

  @media (min-width: 768px) {
  min-height: 120px; /* Adjust height for better visibility on desktop */
  padding: 15px 20px; /* Ensure proper spacing */
}

`;


const ProgressContainer = styled.div`
  margin-top: 16px;
  text-align: center;
`;

const ProgressBar = styled.div`
  width: 100%;
  background: #eee;
  border-radius: 8px;
  overflow: hidden;
  margin: 8px 0;
`;

const ProgressFill = styled.div`
  width: ${(props) => props.progress}%;
  background: orange;
  height: 8px;
  transition: width 0.3s ease;
`;

const ViewBoxButton = styled.button`
  background: purple;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background: darkviolet;
  }
`;

const BuyButton = styled.button`
  background: purple;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background: darkviolet;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;

const ModalContent = styled.div`
  background: linear-gradient(135deg, rgb(128, 0, 128), rgb(218, 165, 32));
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  text-align: center;
  
`;

const CloseButton = styled.button`
  background: purple;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background: darkviolet;
  }
`;

const SelectedItem = styled.div`
  background: black;
  padding: 10px;
  border-radius: 8px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RemoveButton = styled.button`
  background: purple;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
`;

const SortSelect = styled.select`
  padding: 8px;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  background: white;
  cursor: pointer;
`;
const FixedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: rgb(16, 16, 16);
  padding: 10px 10px;
  position: sticky;
  top: 0;
  z-index: 1000;
  margin-bottom: 2px;
  padding-bottom:1px;
`;

const FilterWrapper = styled.div`
  overflow-x: auto;
  width: 100%;
  white-space: nowrap;
  background: rgb(16, 16, 16); /* Prevents overlap */
`;

const OccasionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.25rem;
`;
const GiftingBoxCard =styled.div`
  background:rgb(58, 32, 72);
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: 0.3s;
  cursor: pointer;
  width: 250px; /* Increased card size */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }
`;





const MysticGiftingBox = () => {
  const [userName, setUserName] = useState("");
  const [selectedBox, setSelectedBox] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isViewBoxOpen, setIsViewBoxOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("");
  const [isNamePopupOpen, setIsNamePopupOpen] = useState(false);
  

  const handleSort = (option) => {
    setSortBy(option);
  };
  

  // Apply Sorting
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "inStock") return b.inStock - a.inStock; 
    if (sortBy === "priceLow") return a.price - b.price;
    if (sortBy === "priceHigh") return b.price - a.price;
    if (sortBy === "nameAZ") return a.name.localeCompare(b.name);
    if (sortBy === "nameZA") return b.name.localeCompare(a.name);
    return 0;
  });

    // Function to filter products
    const filteredProducts = filter === "All" 
    ? sortedProducts 
    : sortedProducts.filter((p) => p.category === filter);

      const navigate = useNavigate();

  // const form = useRef();

  const sendEmail = (e) => {
    if (e && e.preventDefault) e.preventDefault(); // Prevent default if event exists
    if (selectedItems.length === 0) {
      alert("Please select at least 3 items.");
      return;
    }
    if (!userName.trim()) {
      setIsNamePopupOpen(true); // Open name popup if name is empty
      return;
    }
  
    const selectedProducts = selectedItems.map(item => `${item.name} - ₹${item.price}`).join(", ");
    const templateParams = {
      user_name: userName, 
      occasion: selectedOccasion?.name || "None",
      selected_items: selectedProducts,
      total_price: 999,
    };
  
    console.log("Sending email with:", templateParams);
  
    emailjs
      .send('service_66e2uo9', 'template_ndb777t', templateParams, 'b5F6NgNmYXKTreTna')
      .then(() => {
        window.location.href = "/payment-Gateway-issue"; // Change to actual checkout link
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send customization details. Please try again.");
      });
  };
  
  const handleSelectOccasion = (occasion) => {
    setSelectedOccasion(occasion);
  };

  const handleSelect = (product) => {
    if (selectedItems.some(item => item.category === product.category)) {
      alert(`You can only select one product from the ${product.category} category. please select product from other category`);
      return;
    }

    if (selectedItems.length < 5 && !selectedItems.some(item => item.id === product.id)) {
      setSelectedItems((prev) => [...prev, product]);
    }
  };  

  const handleRemove = (id) => {
    setSelectedItems((prev) => prev.filter((item) => item.id !== id));
  };
    const [isProcessing, setIsProcessing] = useState(false); // New state for button disable
  
  return (
    <Container>
       <Banner>
       <BackButton onClick={() => navigate(-1)}> ← Back </BackButton>
       <OfferBox>
      <OfferText>Buy 5 @ ₹ 999</OfferText>
      <SubText>+ A greeting card free</SubText>
      </OfferBox>
      </Banner>

      {!selectedBox ? (
        <>
          <h2>Select Your Gifting Box</h2>
          <GiftingBoxCard onClick={() => setSelectedBox(true)}>
          <Image src={boxImage} alt="Mystic Gifting Box" />
            <h3>Mystic Gifting Box @ ₹999</h3>
            <Button>Select</Button>
          </GiftingBoxCard>
        <StepsContainer>
        <p><strong>Step 1:</strong> Select Your Gifting Box.</p>
        <p><strong>Step 2:</strong> Select an Occasion Card.</p>
        <p><strong>Step 3:</strong> Add any 5 products to your box.</p>
        <p><strong>Step 4:</strong> Click "Buy Now" to proceed.</p>
        </StepsContainer>  
        </>
      ) :!selectedOccasion ? (
        <>
          <h3>Select an Occasion Card to begin</h3>
          <OccasionGrid>
            {occasionCards.map((occasion) => (
              <Card key={occasion.id} onClick={() => handleSelectOccasion(occasion)}>
                <Image src={occasion.image} alt={occasion.name} />
                <h3>{occasion.name}</h3>
              </Card>
            ))}
          </OccasionGrid>
        </>
      ) : (
        <>

       {/* Fixed Header (Offer Text + Sort By) */}
    <FixedHeader>
      <OfferText>Buy 5 @ ₹ 999</OfferText>

      <SortSelect onChange={(e) => handleSort(e.target.value)}>
        <option value="">Sort By</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="priceHigh">Price: High to Low</option>
        <option value="nameAZ">Name: A-Z</option>
        <option value="nameZA">Name: Z-A</option>
      </SortSelect>
    </FixedHeader>

    {/* Scrollable Filter Bar */}
    <FilterWrapper>
      <FilterBar>
        {["All", "Soft Toys","Cute Bottles","Pocket Watches", "Handmade-Soaps", "Beauty Mirrors", "Books and Novels","Perfumes","Keychains"].map((category) => (
          <FilterButton key={category} active={filter === category} onClick={() => setFilter(category)}>
            {category}
          </FilterButton>
        ))}
      </FilterBar>
    </FilterWrapper>
        
        <Grid>
        {filteredProducts.map((product) => (
          <Card key={product.id} >
          <Image src={product.images[0]} alt={product.name} />
          <ItemTitle>{product.name}</ItemTitle>
          <Price>₹{product.price}</Price>
          
          {selectedItems.some((item) => item.id === product.id) ? (
            <Button onClick={(e) => { e.stopPropagation(); handleRemove(product.id); }}>
              Remove
            </Button> 
          ) : (
            <Button 
              onClick={(e) => { e.stopPropagation(); handleSelect(product); }} 
              disabled={selectedItems.length >= 5 || !product.inStock} // Corrected condition
            >
              {product.inStock ? "Add to Box" : "Out of Stock"}
            </Button>
          )}
        </Card>
        
        ))}
         <FixedBar>
         <ProgressContainer>
        <p>Add {Math.max(0, 5 - selectedItems.length)} more items to unlock Buy Any 5 @ ₹999</p>
        <ProgressBar>
          <ProgressFill progress={(selectedItems.length / 5) * 100} />
        </ProgressBar>
      </ProgressContainer>
      {/* <FinalPrice>Total ₹999</FinalPrice> */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <ViewBoxButton onClick={() => setIsViewBoxOpen(true)}>View Box</ViewBoxButton>
      <BuyButton  onClick={() => { 
        if (!userName.trim()) {
        setIsNamePopupOpen(true); // Open name popup
        }   
     }}
      style={{ background: selectedItems.length === 5 ? "orange" : "white",}}disabled={selectedItems.length !== 5}> Buy Now
      </BuyButton> 
      </div>
      </FixedBar>
      </Grid> 
      {isViewBoxOpen && (
        <ModalOverlay>
          <ModalContent>
            <h1>Selected Items</h1>
            {selectedItems.length === 0 ? (
              <h3>No items in the box. Please Select the items</h3>
            ) : (
              selectedItems.map((item) => (
                <SelectedItem key={item.id}>
                  <span>{item.name}</span>
                  <RemoveButton onClick={() => handleRemove(item.id)}>Remove</RemoveButton>
                </SelectedItem>
              ))
            )}
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <CloseButton onClick={() => setIsViewBoxOpen(false)}>Hide Box</CloseButton>
             <BuyButton onClick={() => setIsNamePopupOpen(true)}
              style={{ background: selectedItems.length === 5 ? "orange" : "white",}}disabled={selectedItems.length !== 5}> Buy Now
            </BuyButton> 
            </div>

          </ModalContent>
        </ModalOverlay>
      )} 
      {/* Name Input Popup */}
      {isNamePopupOpen && (
      <ModalOverlay>
        <ModalContent>
          <h2>Enter Your Name</h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "100%",
              marginBottom: "10px",
            }}
          />
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>

          <BuyButton 
            onClick={() => { 
          if (userName.trim()) {
      setIsProcessing(true);
      sendEmail();
    } else {
      alert("Please enter your name.");
    }
        }}
        disabled={isProcessing} 
        style={{ background: isProcessing ? "gray" : "orange" }}
      >
      {isProcessing ? "Processing..." : "Proceed to Buy"}
    </BuyButton>

          </div>
        </ModalContent>
      </ModalOverlay>
      )}
      <Footer/>
      </>    
        
      )}
     
    </Container>
  );
};

export default MysticGiftingBox;