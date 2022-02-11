
import React,{useState,useEffect,} from "react";
import { url ,axios} from "../axios";

import { useNavigate,useParams,Link } from 'react-router-dom';
function ViewPage() {
 
  const [user, setuser] = useState(
 {
  name: "",
  username: "",
  email:""
 }

  )
  const {id}=useParams()
const navigate = useNavigate();

  const {name,username,email}=user

  useEffect(()=>{
      View()
  },[])

    const  View = async() => {
          const result = await  axios.get(`${url}/users/${id}`)
          setuser(result.data)
      }
  return (
    <div>
        <ul>
            <li>{user.name}</li>
            <li>{user.username}</li>
            <li>{user.email}</li>

        </ul>
        <div>
        </div>
    </div>
  )
}
export default ViewPage;

