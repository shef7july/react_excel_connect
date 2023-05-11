
import React from 'react';
import { useState } from 'react';
import axios from "axios";
import "./Contact.css"

const Contact=()=>{

const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [subject,setSubject]=useState('');
const [message,setMessage]=useState('');

    const handleSubmit=(e)=>{
      e.preventDefault();
      // console.log(name,email,subject,message);
      const data={
        Name:name,
        Email:email,
        Subject:subject,
        Message:message
      }
      

      axios.post('https://sheet.best/api/sheets/bb50e36a-50e1-4acd-abd7-5477021c67e8',data).then((res)=>{})
      
      // console.log(response);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }


    return(
        <>
        <div id="main">
          <div id="left">


<p style={{fontSize:'large',fontWeight:'bold',fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>
<br/>
<center>

<h1>Contact Us</h1>
</center>
  <br/>
  <br/>
  <center>

Get in touch <h3>
  @</h3> <h2>www.anybodycanblog.org </h2> 
<br/>

Send your message over here. 
<br/>
We will contact you as soon as possible.
  </center>
  <br/>
  

</p>

          </div>
          <div id="right">
            <center>

          <form id="myForm" style={{width:500,backgroundColor:'whitesmoke',borderRadius:20}}>
    <br/>
    <label style={{fontSize:'large',fontWeight:'bold',fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>Full Name</label>
    <br/>
    <input name="name" placeholder='Enter Full Name'style={{width:450,height:15}} required  onChange={(e)=>setName(e.target.value)} value={name}/>
    <br/>
    <label  style={{fontSize:'large',fontWeight:'bold',fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>Email</label>
    <br/>
    <input name="email" placeholder='Enter Email' style={{width:450,height:15}} required onChange={(e)=>setEmail(e.target.value)} value={email}/>
    <br/>
    <label  style={{fontSize:'large',fontWeight:'bold',fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>Subject</label>
    <br/>
    <input type="Text" required placeholder='Enter Subject' style={{width:450,height:15}} onChange={(e)=>setSubject(e.target.value)} value={subject} / > <br/>
    
    <label  style={{fontSize:'large',fontWeight:'bold',fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>Message</label>
    <br/>
    <textarea name="message"  placeholder='Enter Message Here' required onChange={(e)=>setMessage(e.target.value)} value={message} style={{width:450,height:87}}>
      </textarea>
    <br/>


  <button id="SubmitButton"  onClick={handleSubmit} style={{cursor:'pointer',fontSize:'large',fontWeight:'bold',fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}} onclick="SubForm()">Submit</button>
  <br/>
  <br/>
  </form>
  <br/>

            </center>
          </div>
          </div>
          
  


        </>
    );
}
export default Contact;