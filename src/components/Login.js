import React from 'react'
// import logo192 from './public/logo192.png'

const mystyle = {
    // color: "white",
    // backgroundColor: "DodgerBlue",
    // padding: "10px",
    // fontFamily: "Arial"
    width:"250px",
    height:"250px"
  };

function Login() {
  return (
     <div className='d-flex flex-r  justify-content-center mt-4'>
        <div className='p-3 bg-dark'>
            <img src= 'https://i.ytimg.com/vi/Sx3XGguk0U0/maxresdefault.jpg' style={mystyle}>
            </img>
        </div>
        <div className='p-2 bg-dark text-white'>
        <form>
  <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
     </div>
  )
}

export default Login