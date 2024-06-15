import React from 'react'
import l from './l.gif'
import './Cstyle.css'

// const mystyle = {

//   width: " 100%",
//   height: "auto"
// };

function Login() {
  return (
    <div className='parent'>

      <div className=' child1 ' >
        <img src={l}  >
        </img>
      </div>
      <div className='child2'>
      <h3>Login</h3>
        <form>
        
          <div class="mb-3  ">
           
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>
           
          <button type="submit" className="btn ">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login