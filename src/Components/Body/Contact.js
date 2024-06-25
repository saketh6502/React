import React from 'react'

function Contact() {
  return (
    <div className='main'>
      <h2>Default Form</h2><br></br><br></br>
        <div className='con'>
        <h3>Basic form layout</h3><br></br>
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

        <h2>Contacts</h2>

        <div className='con'>

          <div className='con1'>
            <h3>Name</h3>
            <h3>Email</h3>
            <h3>Address</h3>
            <h3>Status</h3>
          </div><br></br>

          <div className='con1'>
            <h5>Kristin Watson</h5>
            <h5>lama.lasom@gmail.com</h5>
            <h5>206 olson bolveward,Australia</h5>
            <h5 className='btn btn-outline-success'>Active</h5>
          </div>

          <div className='con1'>
            <h5>Darell Steward</h5>
            <h5>dim.lasom@gmail.com</h5>
            <h5>208 olson bolveward,Australia</h5>
            <h5 className='btn btn-outline-success'>Active</h5>
          </div>

          <div className='con1'>
            <h5>Jone Copper</h5>
            <h5>jone.lasom@gmail.com</h5>
            <h5>207 olson bolveward,Australia</h5>
            <h5 className='btn btn-outline-danger'>In-Active</h5>
          </div>

          <div className='con1'>
            <h5>Steve Rogers</h5>
            <h5>steve.lasom@gmail.com</h5>
            <h5>213 olson bolveward,Australia</h5>
            <h5 className='btn btn-outline-success'>Active</h5>
          </div>

          <div className='con1'>
            <h5>David Chris</h5>
            <h5>chris.lasom@gmail.com</h5>
            <h5>254 olson bolveward,Australia</h5>
            <h5 className='btn btn-outline-danger'>In-Active</h5>
          </div>

          <div className='con1'>
            <h5>John Wick</h5>
            <h5>john.lasom@gmail.com</h5>
            <h5>256 olson bolveward,Australia</h5>
            <h5 className='btn btn-outline-success'>Active</h5>
          </div>
            
          
        </div>

    </div>

        
    


  )
}

export default Contact
