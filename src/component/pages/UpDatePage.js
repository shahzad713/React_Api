
import React,{useState,useEffect,} from "react";
import { url ,axios} from "../axios";

import { useNavigate,useParams } from 'react-router-dom';
function UpDatePage() {
 
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
      upDate()
  },[])
      const onInputChange = (e) => {
          setuser({...user, [e.target.name]: e.target.value})
      }
      const upDate = async() => {
          const result = await  axios.get(`${url}/users/${id}`)
          setuser(result.data)
      }
      
  
  const postData = async(e)=>{
    e.preventDefault()
      await axios.put(`${url}/users/${id}`,user)
      navigate('/'); 
      
  }


  return (
    <div className="root-div-1">
      <form className="root-div" onSubmit={(e)=>postData(e)}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
          name="name"

          onChange={e=>onInputChange(e)}
          value={name}


            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            username
          </label>
          <input
          name="username"
          onChange={e=>onInputChange(e)}
          value={username}

            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
          name="email"
          onChange={e=>onInputChange(e)}
          value={email}
            type="email"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-success my-3" >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpDatePage;

