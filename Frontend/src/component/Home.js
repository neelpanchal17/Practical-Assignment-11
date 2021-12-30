import { Link } from "react-router-dom";
import axios from "axios";
const Home=()=>{
    const deleteuser = () =>{
        axios.post("/api/delete:name").then((res)=>console.log(res.data));
    };
    return(
        <div>
            <br/>
            <br/>   
            <Link to="/search">Search User</Link>&nbsp;&nbsp;&nbsp;
            <Link to="#">Update User</Link>&nbsp;&nbsp;&nbsp;
            <button onClick={deleteuser}>Delete User</button>

        </div>
    );
}
export default Home;