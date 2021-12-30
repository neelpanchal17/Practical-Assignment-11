import axios from "axios";

const Search = () =>{
    const user ={
        username:"",
    };
    const searchUser = () =>{
        axios.post("/api/search",user).then((res)=>{
            if((res.data.data).length === 1)
            {
                console.log(res.data.data);
                
            }
            else
            {
                console.log("Not Data Found!");
            }
        });
    };
    return(
        <div>
            <br/>
            <br/>
            <br/>
            <h3>Search User</h3>
                <input 
                    placeholder="username"
                    type="text"
                    onChange={(e) => (user.username = e.target.value)}/>
                <br/>
                <br/>
                <br/>
                <br/>
                <button onClick={searchUser}>Find</button>
                <br/>
        </div>
    )
}
export default Search