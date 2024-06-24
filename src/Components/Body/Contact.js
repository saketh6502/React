import React from 'react'

function Contact() {
  return (
    <div className='main'>
      <h2>Contacts</h2><br></br><br></br>
        <div className='con'>
        <h3>Default Form</h3><br></br>
          <div>
          <h4>Username</h4>
          <input type='text' placeholder='Enter your Username'/>
          </div>
          <br></br>
          <div>
          <h4>Email Address</h4>
          <input type='text' placeholder='Enter your Email Address'/>
          </div>
          <br></br>
          <div>
          <h4>Password</h4>
          <input type='password' placeholder='Enter your Password'/>
          </div>
          <br></br>
          <div>
          <h4>Confirm Password</h4>
          <input type='password' placeholder='Re-Enter Password'/>
          </div>
          <br></br>
          <div>
            <button className='btn btn-outline-primary'>Submit</button>
            <button className='btn btn-outline-danger'>Cancel</button>
          </div>
        </div>
        <div className='con1'>
          <div>
            
          </div>
        </div>

    </div>

        
    


  )
}

export default Contact
