import React ,{ useState }from 'react';
import './App.css'
import { TextField, Button } from '@mui/material';

function App() {

  const [myName, setMyName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [myNameValid, setMyNameValid] = useState(true)
  const [emailValid, setEmailValid] = useState(true)
  const [passwordValid, setPasswordValid] = useState(true)


  const handleSubmit = () => {
    if (myName && email && password) {
setMyName("")
setEmail("")
setPassword("")
    }
    else {
      alert("Please fill the form completely")
    }
  }



  const myNameValidation = (e) => {
    console.log("inside myNameValidation");
    const { value, name } = e

    if (value.match(/^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/)) {
      if (name == "myName") {
        setMyName(value)
        setMyNameValid(true)
      }
    } else {
      setMyName(value)
      setMyNameValid(false)
    }
    console.log("hell01");

  }


  const emailValidation = (e) => {
    const { value, name } = e
    
    if(value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      if(name=="email"){
        setEmail(value)
        setEmailValid(true)
      }
    }else{
      setEmail(value)
      setEmailValid(false) 
    }
  }

  
  const passwordValidation = (e) => {
    const { value, name } = e

    if(value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])/, {
      message:
        "Password must be at least one uppercase, one lowercase, one special character and one number.",
    })){
      if(name=="password"){
        setPassword(value)
        setPasswordValid(true)
      }
    }else{
      setPassword(value)
        setPasswordValid(false) 
    }
  }







  return (
    <>


      <div style={{ width: "100%", height: "100vh" }} className='d-flex justify-content-center
    align-items-center'>
        <div style={{ width: "650px", height: "80vh" }} className=' bg-light p-5  justify-content-center
    align-items-center  rounded shadow'>

          <h3 style={{ textAlign: "center", font: "40px" }} className='text-danger bolder'>REGISTRATION FORM</h3>
          <TextField className="w-100 mt-5 " id="outlined-basic" label=" Name" variant="outlined" value={myName || ""}
            onChange={e => myNameValidation(e.target)} name='myName' />
          { ! myNameValid && <div style={{ height: "10px" }} className=" mb-4 text-danger">*Invalid Username</div>}

          <TextField className="w-100 mt-5" id="outlined-basic" label="Email-Id" variant="outlined" value={email || ""}
            onChange={e => emailValidation(e.target)} name='email' />
          { ! emailValid && <div style={{ height: "10px" }} className=" mb-4 text-danger">*Invalid Username</div>}



          <TextField className="w-100 mt-5" id="outlined-basic" label="Password" variant="outlined" value={password || ""}
            onChange={e => passwordValidation(e.target)} name='password' />
          { ! passwordValid && <div style={{ height: "10px" }} className=" mb-4 text-danger">*Invalid Username</div>}

<div style={{ height: "10px" }} className=" mb-4 text-secondary">"Password must be at least one uppercase, one lowercase, 
one special character and one number."</div>


          <Button disabled={!myNameValid || ! emailValid || ! passwordValid } onClick={handleSubmit} className="w-50 mt-5 bg-success" style={{ width: "50%", height: "50px", margin: "140px" }}
            variant="contained">SUBMIT</Button>



        </div>
      </div>
    </>
  )
}

export default App
