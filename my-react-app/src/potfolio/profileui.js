
import UserProfile from "./UserProfile";
const userDetails=[
{
    image:'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?cs=srgb&dl=conifers-daylight-environment-1666021.jpg&fm=jpg',
    name:'Kowshaly',
    role:'Software Developer',
},
{
    image:'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?cs=srgb&dl=conifers-daylight-environment-1666021.jpg&fm=jpg',
    name:'Kowshaly1',
    role:'Software Developer',
},{
    image:'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?cs=srgb&dl=conifers-daylight-environment-1666021.jpg&fm=jpg',
    name:'Kowshaly2',
    role:'Software Developer',
},{
    image:'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?cs=srgb&dl=conifers-daylight-environment-1666021.jpg&fm=jpg',
    name:'Kowshaly3',
    role:'Software Developer',
}]
const Appps=()=>(
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <h1 style={{fontFamily:"Roboto",fontSize:"32px",color:"#183b56",marginBottom:"30px"}}>user list</h1>
        <ul>
            {userDetails.map((eachItem)=>(
                <UserProfile userDetail={eachItem}/>
            ))}
        </ul>
    </div>
)
export default Appps