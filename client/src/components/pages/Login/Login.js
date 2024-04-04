import React from 'react'

function Login() {
  return (
  <form>
    <div class="form-group">
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    </div>
    <div class="form-group">
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  )
}

export default Login