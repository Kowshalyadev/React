import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import BasicExample from './potfolio/reactpotfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './homefcomp';
// import Mains from './data';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Parent from './driling/parentCom';
// import ConditionalRend from './conditinalRend/conditinalRend';
// import Offon from './conditinalRend/bubblesstate/bulbonoff';

// import Counter from './conditinalRend/statecomp';
// import Samplefrom from './conditinalRend/samplefrom/froms';
// import EvenOddChecker from './conditinalRend/samplefrom/evevoddform';
// import TodoList from './conditinalRend/samplefrom/Todoapp';
// import Counterfun from './counter/Counter';
// import Addcard from './conditinalRend/samplefrom/importaddcard';
// import Form from './forms/form/formss';
// import Profilecard from './profileusingfun/profilecard';
// import Apps from './apps';
// import UpdatingPhase from './mountingstate/updatingphase';
// import APP from './App';
// import Table from'./createTable';

// import Accordian from "./accodians/accodiansb";
// import Imagedisplay from './homeComp';
// import LifeCycle from './mountingstate/lifecycle';
// import Calculator from './calculator/calculattors/calculatorss';
// import Appps from './potfolio/profileui';
// import Useeffects from './forms/form/useEffect';
// import Cart from './forms/form/cartdisplay';
// import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
// import Cartaddo from './forms/form/carto';
// import UserProfile from './potfolio/UserProfile/Userprofilelist';
// import Webmain from './websites/webmain';
// import Movielist from './Routerdynamic/movielist';
// import Displaycards from './Project/movieproject/moviefinderdata';
// import Displaycardss from './Project/movieproject/duplicatedata';
// import Sampes from './Project/movieproject/sample';
import Routers from './Project/movieproject/routers';
// import MovieVedio from './Project/movieproject/mainVedio';
// import MovierFinderApp from './Project/movieproject/frontpages';
// import MovieDetails from './Project/movieproject/samplenextpage';
// import Signup from './Project/movieproject/signupPage';
// import MovierFinderApps from './moviefinder/signLoginroutes/signLoginroute';

// const data=
// [
//   {
//     "id": 1,
//     "title": "Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
//     "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
//     "price": 773,
//     "description": "Digital noise cancelling : Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation\r\nHi-Res Audio : A built-in amplifier integrated in HD Noise Cancelling Processor QN1 realises the best-in-class signal-to-noise ratio and low distortion for portable devices.\r\nDriver Unit : Powerful 40-mm drivers with Liquid Crystal Polymer (LCP) diaphragms make the headphones perfect for handling heavy beats and can reproduce a full range of frequencies up to 40 kHz.\r\nVoice assistant : Alexa enabled (In-built) for voice access to music, information and more. Activate with a simple touch. Frequency response: 4 Hz-40,000 Hz",
//     "brand": "sony",
//     "model": "WH-1000XM3",
//     "color": "silver",
//     "category": "audio",
//     "discount": 11
//   },
//   {
//     "id": 2,
//     "title": "Microsoft Xbox X/S Wireless Controller Robot White",
//     "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
//     "price": 57,
//     "description": "Experience the modernized design of the Xbox wireless controller in robot white, featuring sculpted surfaces and refined Geometry for enhanced comfort and effortless control during gameplay\r\nStay on target with textured grip on the triggers, bumpers, and back case and with a new hybrid D-pad for accurate, yet familiar input\r\nMake the controller your own by customizing button Mapping with the Xbox accessories app",
//     "brand": "microsoft",
//     "model": "Xbox X/S",
//     "color": "white",
//     "category": "gaming",
//     "popular": true,
//     "discount": 4
//   },
//   {
//     "id": 3,
//     "title": "Logitech G733 Lightspeed Wireless Gaming Headset with Suspension Headband, LIGHTSYNC RGB, Blue VO!CE mic Technology and PRO-G Audio Drivers - White",
//     "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257709689-logitech heaphone.jpg",
//     "price": 384,
//     "description": "Total freedom with up to 20 m wireless range and LIGHTSPEED wireless audio transmission. Keep playing for up to 29 hours of battery life. 1 Play in stereo on PlayStation(R) 4.\r\nPersonalize your headset lighting across the full spectrum, 16. 8M colors. Play in colors with front-facing, dual-zone LIGHTSYNC RGB lighting and choose from preset animations or create your own with G HUB software.\r\nColorful, reversible suspension headbands are designed for comfort during long play sessions.\r\nAdvanced mic filters that make your voice sound richer, cleaner, and more professional. Customize with G HUB and find your sound.\r\nHear every audio cue with breathtaking clarity and get immerse in your game. PRO-G drivers are designed to significantly reduce distortion and reproduce precise, consistent, rich sound quality.\r\nSoft dual-layer memory foam that conforms to your head and reduces stress points for long-lasting comfort.\r\nG733 weighs only 278 g for long-lasting comfort.",
//     "brand": "logitech G",
//     "model": "G733 LIGHTSPEED",
//     "color": "white",
//     "category": "gaming",
//     "popular": true,
//     "discount": 3
//   },
//   {
//     "id": 4,
//     "title": "Sony WH-1000XM5 Wireless Industry Leading Active Noise Cancelling Headphones, 8 Mics for Clear Calling, 30Hr Battery, 3 Min Quick Charge = 3 Hours Playback, Multi Point Connectivity, Alexa-Silver",
//     "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg",
//     "price": 362,
//     "description": "Industry Leading noise cancellation-two processors control 8 microphones for unprecedented noise cancellation. With Auto NC Optimizer, noise cancelling is automatically optimized based on your wearing conditions and environment.\r\nIndustry-leading call quality with our Precise Voice Pickup Technology uses four beamforming microphones and an AI-based noise reduction algorithm\r\nMagnificent Sound, engineered to perfection with the new Integrated Processor V1\r\nCrystal clear hands-free calling with 4 beamforming microphones, precise voice pickup, and advanced audio signal processing.",
//     "brand": "song",
//     "model": "WH1000XM5/SMIN",
//     "color": "white",
//     "category": "audio",
//     "popular": true,
//     "discount": 11
//   },
//   {
//     "id": 5,
//     "title": "Urbanista Los Angeles Sand Gold - World’s 1st Solar Powered Hybrid Active Noise Cancelling with Mic Premium Wireless Headphones, Unlimited Playtime",
//     "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691056487173-headphon2.jpg",
//     "price": 265,
//     "description": "Welcome to the dawn of a new era with URBANISTA LOS ANGELES, the world’s first solar-charging premium wireless headphoneS powered by Powerfoyle solar cell material. Using ADVANCED GREEN TECHNOLOGY, Los Angeles converts all light, outdoor and indoor, into energy to deliver virtually infinite playtime. Los Angeles never stops charging when exposed to light, providing you with a nonstop audio experience. With Los Angeles, you’re always in complete control of your audio experience. Just the press of a button activates advanced hybrid Active Noise Cancelling, instantly reducing unwanted background noise, or switches on Ambient Sound Mode so you can stay aware of important surrounding sounds.",
//     "brand": "urbanista",
//     "model": "Los Angeles",
//     "color": "sand gold",
//     "category": "audio",
//     "popular": true,
//     "discount": 19
//   }
// ]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <APP/> */}
    {/* <div 
    style={{
      display:"flex",
      flexWrap:"wrap",
      gap:"10px",
      // justifyContent:"center",
      alignContent:"center"
      }}></div> */}
    {/* {/* <App /> */}
    {/* <Apps
    /> */}

     {/* <Table /> */} 
    {/* <Home/> */}
    {/* <Imagedisplay /> */}
    {/* <Mains/> */}
    {/* <Profilecard name="kowshi" city="hyd"/> */}

    {/* <div 
    style={{
      display:"flex",
      flexWrap:"wrap",
      gap:"10px",
      // justifyContent:"center",
      alignContent:"center"
      }}>
    {data.map((a,b)=>{
      return(
      <div key={b}>
      <Profilecard 
      data={a}
      title={a.title} 
      desc={a.description} 
      info={a.color}
      img={a.image}
    /></div>)})}</div> */}

    {/* <Counter/> */}
     {/* <div 
    style={{
      display:"flex",
      flexWrap:"wrap",
      gap:"10px",
      justifyContent:"center",
      backgroundColor:"green",
      alignContent:"center"
      }}>
     <Samplefrom/>
     </div> */}

      {/* <div 
    style={{
      display:"flex",
      flexWrap:"wrap",
      gap:"10px",
      backgroundColor:"yellow",
      // justifyContent:"center",
      alignContent:"center"
      }}><EvenOddChecker/></div> */}

    {/* <TodoList/> */}

    {/* <UpdatingPhase/><br/><br/> */}

    {/* <Addcard/> */}

   {/* <div style={{
      // display:"flex",
      // flexWrap:"wrap",
      gap:"10px",
      backgroundColor:"red",
      justifyContent:"center",
      alignContent:"center"
      }}>
    <Counterfun/></div>

    <Form/> */}
    
   
    {/* <LifeCycle/> */}
    {/* </div> */}

    {/* {data.map((a,b)=>{
      return(
      // <div key={b}>
      <Accordian 
      title={a.title} 
      img={a.image}
    />)})} */}
    {/* </div> */}
{/* day 28/11 */}
   {/* <Parent/> */}
   {/* <Offon/> */}
  
   {/* <ConditionalRend login="admin"/>
   <Counter/> */}
   {/* <UpdatingPhase/> */}
   {/* <Calculator/> */}
   {/* <Appps/> */}
  
   {/* <Useeffects/> */}
   {/* {data.map((a,b)=>{
      return(
      // <div key={b}>
      <Accordian 
      title={a.title} 
      img={a.image}
    />)})} */}
   {/* <Cart/> */}
   {/* <Cartaddo/> */}
   {/* <UserProfile/> */}
    {/* <Movielist></Movielist> */}
   {/* <Webmain/> */}
   {/* <Displaycards/> */}
   {/* <Displaycardss/> */}
   {/* <Sampes/> */}
   <Routers/>
   {/* <MovieVedio/> */}
   {/* <MovierFinderApp/> */}
   {/* <MovieDetails/> */}
   {/* <Login/> */}
   {/* <MovierFinderApps/> */}
   {/* <Signup/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
