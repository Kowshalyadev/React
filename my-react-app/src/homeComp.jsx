import {Component} from "react";
import './homecomp.css';
import mobile from "./imges/mobile.jpg";
import laptop from "./imges/laptop.webp";
import airpods from "./imges/airpods.jpg";
import laptopbag from "./imges/laptopbag.jpg";
const obj=[{
    productname:"mobile",
    productprice:20000,
    productAvailability:true
},
{
    productname:"laptop",
    productprice:45000,
    productAvailability:false
}, 
{
     productname:"airpods",
     productprice:8000,
     productAvailability:true
 },
 {
     productname:"laptopbag",
     productprice:2000,
     productAvailability:false
 }
]

class Imagedisplay extends Component{

    render(){
        return(
            // <>
            // <h1 style={obj.productAvailability?style.a:style.ua}>{obj.productname}{obj.productprice}</h1>
            // </>
        <div className="firstmain">
            <div className="mainbox">
                {/* <div style={obj.productAvailability?style.a:style.ua }> */}
                <div className={obj[0].productAvailability?"available":"unavailable"}>
                <h1>{obj[0].productname}</h1>
                <div>
                <img src={mobile} alt="mobileimg" title="Product Avalable" className="images"/></div>
                
                <h1>{obj[0].productprice}</h1>
                </div>

                <div className={obj[1].productAvailability?"available":"unavailable"}>
                <h1>{obj[1].productname}</h1>
                <img src={laptop} alt="mobileimg" title="Product Unavalable" className="images"/>
                <h1>{obj[1].productprice}</h1>
                </div>

                <div className={obj[2].productAvailability?"available":"unavailable"}>
                <h1>{obj[2].productname}</h1>
                <img src={airpods} alt="airpodes" title="Product Avalable" className="images"/>
                <h1>{obj[2].productprice}</h1>
                </div>

                <div className={obj[3].productAvailability?"available":"unavailable"}>
                <h1>{obj[3].productname}</h1>
                <img src={laptopbag} alt="laptopbag" title="Product Avalable" className="images"/>
                <h1>{obj[3].productprice}</h1>
                </div>

            </div>
        </div>
        )
    }
}
// const style={
//     a:{color:"green"},
//     ua:{color:"red"}
// }
export default Imagedisplay;