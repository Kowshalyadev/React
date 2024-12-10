import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ProfileCards from "./addcards";

const initialData = [
    {
      id: 1,
      title: "Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
      image: "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
      price: 773,
      description: "Digital noise cancelling, Hi-Res Audio, Voice assistant, etc.",
      brand: "sony",
      model: "WH-1000XM3",
      color: "silver",
      category: "audio",
      discount: 11
    },
    {
        "id": 2,
        "title": "Microsoft Xbox X/S Wireless Controller Robot White",
        "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
        "price": 57,
        "description": "Experience the modernized design of the Xbox wireless controller in robot white, featuring sculpted surfaces and refined Geometry for enhanced comfort and effortless control during gameplay\r\nStay on target with textured grip on the triggers, bumpers, and back case and with a new hybrid D-pad for accurate, yet familiar input\r\nMake the controller your own by customizing button Mapping with the Xbox accessories app",
        "brand": "microsoft",
        "model": "Xbox X/S",
        "color": "white",
        "category": "gaming",
        "popular": true,
        "discount": 4
      },
      {
        "id": 3,
        "title": "Logitech G733 Lightspeed Wireless Gaming Headset with Suspension Headband, LIGHTSYNC RGB, Blue VO!CE mic Technology and PRO-G Audio Drivers - White",
        "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257709689-logitech heaphone.jpg",
        "price": 384,
        "description": "Total freedom with up to 20 m wireless range and LIGHTSPEED wireless audio transmission. Keep playing for up to 29 hours of battery life. 1 Play in stereo on PlayStation(R) 4.\r\nPersonalize your headset lighting across the full spectrum, 16. 8M colors. Play in colors with front-facing, dual-zone LIGHTSYNC RGB lighting and choose from preset animations or create your own with G HUB software.\r\nColorful, reversible suspension headbands are designed for comfort during long play sessions.\r\nAdvanced mic filters that make your voice sound richer, cleaner, and more professional. Customize with G HUB and find your sound.\r\nHear every audio cue with breathtaking clarity and get immerse in your game. PRO-G drivers are designed to significantly reduce distortion and reproduce precise, consistent, rich sound quality.\r\nSoft dual-layer memory foam that conforms to your head and reduces stress points for long-lasting comfort.\r\nG733 weighs only 278 g for long-lasting comfort.",
        "brand": "logitech G",
        "model": "G733 LIGHTSPEED",
        "color": "white",
        "category": "gaming",
        "popular": true,
        "discount": 3
      },
      {
        "id": 4,
        "title": "Sony WH-1000XM5 Wireless Industry Leading Active Noise Cancelling Headphones, 8 Mics for Clear Calling, 30Hr Battery, 3 Min Quick Charge = 3 Hours Playback, Multi Point Connectivity, Alexa-Silver",
        "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg",
        "price": 362,
        "description": "Industry Leading noise cancellation-two processors control 8 microphones for unprecedented noise cancellation. With Auto NC Optimizer, noise cancelling is automatically optimized based on your wearing conditions and environment.\r\nIndustry-leading call quality with our Precise Voice Pickup Technology uses four beamforming microphones and an AI-based noise reduction algorithm\r\nMagnificent Sound, engineered to perfection with the new Integrated Processor V1\r\nCrystal clear hands-free calling with 4 beamforming microphones, precise voice pickup, and advanced audio signal processing.",
        "brand": "song",
        "model": "WH1000XM5/SMIN",
        "color": "white",
        "category": "audio",
        "popular": true,
        "discount": 11
      },
      {
        "id": 5,
        "title": "Urbanista Los Angeles Sand Gold - World’s 1st Solar Powered Hybrid Active Noise Cancelling with Mic Premium Wireless Headphones, Unlimited Playtime",
        "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691056487173-headphon2.jpg",
        "price": 265,
        "description": "Welcome to the dawn of a new era with URBANISTA LOS ANGELES, the world’s first solar-charging premium wireless headphoneS powered by Powerfoyle solar cell material. Using ADVANCED GREEN TECHNOLOGY, Los Angeles converts all light, outdoor and indoor, into energy to deliver virtually infinite playtime. Los Angeles never stops charging when exposed to light, providing you with a nonstop audio experience. With Los Angeles, you’re always in complete control of your audio experience. Just the press of a button activates advanced hybrid Active Noise Cancelling, instantly reducing unwanted background noise, or switches on Ambient Sound Mode so you can stay aware of important surrounding sounds.",
        "brand": "urbanista",
        "model": "Los Angeles",
        "color": "sand gold",
        "category": "audio",
        "popular": true,
        "discount": 19
      }
    // You can add more items if needed
];

function Addcard() {
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0); // To track which card to add next

  // Function to handle adding a new card one at a time
  const addCard = () => {
    if (index < initialData.length) {
      setCards(prevCards => [...prevCards, initialData[index]]);
      setIndex(prevIndex => prevIndex + 1); // Move to the next card
    }
  };

  return (
    <div style={{backgroundColor:"black"}}>
      {/* Button to add cards */}
      <h1>show the card as per the button value.
      </h1>
      <Button variant="success" onClick={addCard}>Add Card</Button>

      {/* Container to render all the cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
          marginTop: "20px"
        }}
      >
        {cards.map((data, index) => (
          <ProfileCards key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default Addcard;
