import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import treasureBox from '../assets/Treasure-chest-Box.jpg';
import surpriseBox from '../assets/ultimate-surprise-box.jpg';
import goldBox from '../assets/gold-premium-box.jpg';
import customBox from '../assets/exclusive-custom-box.jpg';
import enigmaBox from '../assets/premium-enigma-box.jpg';

// Define available boxes
const boxes = [
  { img: [treasureBox], title: "Treasure Chest Box", price: "₹299", externalLink: "/payment-Gateway-issue" },
  { img: [surpriseBox], title: "Ultimate Surprise Box", price: "₹499", externalLink: "/payment-Gateway-issue"},
  { img: [goldBox], title: "Gold Premium Box", price: "₹999", externalLink: "/payment-Gateway-issue"},
  { img: [customBox], title: "Exclusive Custom Box", price: "₹1,499", externalLink: "/payment-Gateway-issue"},
  { img: [enigmaBox], title: "Premium Enigma Box", price: "₹2,999", externalLink: "/payment-Gateway-issue"},
];


const CustomizeBoxPage = () => {

  const { index } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const box = boxes[index];
  const purchaseLink = location.state?.purchaseLink || box?.externalLink;

  const [mainInterests, setMainInterests] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [isGifting, setIsGifting] = useState(false);
  const [recipientDetails, setRecipientDetails] = useState({ recipentname: '', age: '', gender: '' });
  const [personalizedNote, setPersonalizedNote] = useState('');
  const [preferredItems, setPreferredItems] = useState([]);
  const [specificTheme, setSpecificTheme] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userName, setUserName] = useState('');
  const [profession, setProfession] = useState(''); 
  
  const handlePreferredItemsChange = (item) => {
    setPreferredItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleProceed = () => {
    if (!box) {
      alert("Box information is missing. Please try again.");
      return;
    }

    // Validation
    if (!mainInterests) {
      alert("Please select an interest.");
      return;
    }

    if (!userName) {
      alert("Please enter your name.");
      return;
    }

    // Proceed with form submission
    setIsSubmitting(true);

    const recipientSummary = isGifting
      ? `Recipient Name: ${recipientDetails.recipentname || 'N/A'}\n
         Recipient Age: ${recipientDetails.age || 'N/A'}\n
         Recipient Gender: ${recipientDetails.gender || 'N/A'}\n`
      : 'Not Gifting';

    const interestsSummary = mainInterests || 'None selected';
    const preferredItemsSummary = preferredItems.length > 0 ? preferredItems.join(', ') : 'None selected';

    const formData = {
      id: Date.now(), // Unique identifier to prevent duplicates
      boxTitle: box.title,
      boxPrice: `${box.price}`,
      recipientDetails: recipientSummary,
      interests: interestsSummary,
      ageGroup: ageGroup || 'Not specified',
      preferredItems: preferredItemsSummary,
      personalizedNote: personalizedNote || 'No note provided',
      isGifting: isGifting ? 'Yes' : 'No',
      userName: userName || 'Anonymous', // Add user name to formData
      specificTheme: specificTheme || 'Not specified',
      profession: profession ,
    };

    emailjs
      .send('service_66e2uo9', 'template_ndb777t', formData, 'b5F6NgNmYXKTreTna')
      .then(() => {
        window.location.href = purchaseLink;
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert("Failed to send customization details. Please try again.");
      })
      // .finally(() => setIsSubmitting(false)); // Re-enable button
  };

  if (!box) {
    return <ErrorMessage>Box not found. Please check the URL.</ErrorMessage>;
  }

  return (
    <Container>
        <button onClick={() => navigate(-1)}> ← Back </button>;      
        <ProductSection>
        <ProductTitle>{box.title}</ProductTitle>
        <ProductPrice>{box.price}</ProductPrice>
        <Carousel>
          {box.img.map((image, idx) => (
            <Slide key={idx} src={image} alt={`Box Image ${idx}`} />
          ))}
        </Carousel>
      </ProductSection>

      <CustomizationSection>
        <SectionTitle>Customize Your Box</SectionTitle>
        <Options>
        <Option>
            <label htmlFor="userName">What's your good name?</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your good name"
            />
          </Option>
          <Option>
  <label htmlFor="profession">What is your Profession?</label>
  <select
    id="profession"
    value={profession}
    onChange={(e) => setProfession(e.target.value)}
  >
    <option value="">Select your profession</option>
    <option value="Student">Student</option>
    <option value="Working Professional">Working Professional</option>
    <option value="TFI Banisa">TFI Banisa</option>
  </select>
</Option>

          <Option>
            <label htmlFor="mainInterests">What are your main interests?</label>
            <select
              id="mainInterests"
              value={mainInterests}
              onChange={(e) => setMainInterests(e.target.value)}
            >
              <option value="">Select an interest</option>
              <option value="tech">Tech Gadgets</option>
              <option value="anime">Anime</option>
              <option value="gaming">Gaming</option>
              <option value="selfcare">Self-Care & Wellness</option>
              <option value="fashion">Fashion & Accessories</option>
              <option value="homedecor">Home Decor</option>
              <option value="diy">DIY & Crafting</option>
            </select>
          </Option>

          {(mainInterests === 'anime' || mainInterests === 'gaming') && (
            <Option>
              <label>Favorite anime/game (Optional):</label>
              <textarea
                rows="3"
                placeholder="Tell us about your favorite anime/game..."
                value={specificTheme}
                onChange={(e) => setSpecificTheme(e.target.value)}
              />
            </Option>
          )}

          <Option>
            <label>Which age group do you belong to?</label>
            <select
              id="ageGroup"
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
            >
              <option value="">Select an age group</option>
              <option value="below-18">Below 18</option>
              <option value="18-25">18 to 25 years</option>
              <option value="26-35">26 to 35 years</option>
              <option value="above-35">Above 35</option>
            </select>
          </Option>

          <Option>
            <label>Are you gifting this mystery box?</label>
            <div>
              <button
                type="button"
                onClick={() => setIsGifting(true)}
                style={{ backgroundColor: isGifting ? 'purple' : '#ddd' }}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setIsGifting(false)}
                style={{ backgroundColor: !isGifting ? 'purple' : '#ddd' }}
              >
                No
              </button>
            </div>
          </Option>

          {isGifting && (
            <Option>
              <label>Recipient Details:</label>
              <input
                type="text"
                placeholder="Name"
                value={recipientDetails.recipentname}
                onChange={(e) =>
                  setRecipientDetails({ ...recipientDetails, recipentname: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Age"
                value={recipientDetails.age}
                onChange={(e) =>
                  setRecipientDetails({ ...recipientDetails, age: e.target.value })
                }
              />
              <select
                value={recipientDetails.gender}
                onChange={(e) =>
                  setRecipientDetails({ ...recipientDetails, gender: e.target.value })
                }
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </Option>
          )}

          <Option>
            <label>Add a personalized note (Optional):</label>
            <textarea
              rows="4"
              placeholder="Write your message here..."
              value={personalizedNote}
              onChange={(e) => setPersonalizedNote(e.target.value)}
            />
          </Option>

          <Option>
            <label>Select preferred items:</label>
            {[ 
              "Collectibles (eg:Action figures,etc..)",
              "Books and Novels",
              "Fashion Accessories",
              "Tech Gadgets",
              "Self-Care Products(Beauty and Healthcare)",
              "Home Decor",
              "Crafting Kits",
              "Food & Snacks",
              "Surprise Me",
            ].map((item) => (
              <label key={item}>
                <input
                  type="checkbox"
                  checked={preferredItems.includes(item)}
                  onChange={() => handlePreferredItemsChange(item)}
                />
                {item}
              </label>
            ))}
          </Option>

          {/* Name input section */}
          
        </Options>

        <ProceedButton onClick={handleProceed} disabled={isSubmitting}>
          {isSubmitting ? "Processing..." : "Confirm and Proceed"}
        </ProceedButton>
      </CustomizationSection>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem;
  font-family: 'Arial', sans-serif;
  background-color:rgb(230,230,250);
  @media (max-width: 768px) {
    padding: 2rem;
`;
const ProductSection = styled.section`
  text-align: center;
  margin-bottom: 3rem;
`;
const ProductTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
  @media (max-width: 768px) {
    font-size: 2rem;
`;

const ProductPrice = styled.h2`
  font-size: 1.6rem;
  font-weight: normal;
  color: #777;
  margin-bottom: 1.5rem;
   @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Carousel = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  overflow: hidden;
   @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Slide = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 0 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
   @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;
const CustomizationSection = styled.section`
  background-color: #fff;
  padding: 4rem 2.5rem;
  border-radius: 12px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.05);
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;
const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #333;
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;
const Options = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Option = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  label {
    font-size: 1.1rem;
    font-weight: 600;
    color: #444;
  }
  select, input, textarea {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    color: #333;
  }
  textarea {
    resize: vertical;
  }
`;

const ProceedButton = styled.button`
  padding: 14px 30px;
  font-size: 1.3rem;
  background-color:rgb(88, 5, 79);
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  width: 100%;
  margin-top: 3rem;
  &:hover {
    background-color:rgb(88, 5, 79);
  }
  &:active {
    transform: scale(0.98);
  }
`;
const ErrorMessage = styled.div`
  color: red;
  font-size: 18px;
  text-align: center;
  margin: 20px;
`;


export default CustomizeBoxPage;