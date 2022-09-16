import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { message, name, email };

    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(data => {
        toast("Thanks for contacting us")
        setname('')
        setemail('')
        setMessage('')
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }
  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setname(e.target.value)
    }
    else if (e.target.name == 'email') {
      setemail(e.target.value)
    }
    else if (e.target.name == 'message') {
      setMessage(e.target.value)
    }
  }

  return (
    <div className="bg-white py-80">
      <div className="max-w-screen-2xl m-auto w-11/12 mt-24">
        <div className="mb-36">
          <span className="block text-5xl uppercase tracking-wider font-medium text-center mb-14 relative text-black">
            CONTACT
          </span>
          <span className="absolute content-none h-6 mt-20 w-35 bg-yellow-400 left-2/4 rounded-md mb-6 ">

          </span>
          <div className="block text-center text-gray-600 text-lg max-w-7xl m-auto pt-48 mt-40">
            Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.
          </div>
        </div>
        <div className="bg-white p-24 mt-24 max-w-7xl text-right w-11/12 rounded-3xl shadow-lg shadow-zinc-200 mt-20 mr-auto ml-auto">
          <form onSubmit={handleSubmit} >
            <div className="mb-3">
              <label htmlFor="name" className="text-zinc-500 text-base font-bold block text-left mb-2 tracking-wider">
                Enter your name
              </label>
              <input className="text-gray-700 p-3.5 w-full border-none bg-slate-200 font-mediumrounded-md outline-none" type="text" value={name} onChange={handleChange} id="name" name='name' aria-describedby="emailHelp" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="text-zinc-500 text-base font-bold block text-left mb-2 tracking-wider">
                Email address
              </label>
              <input className="text-gray-700 p-3.5 w-full border-none bg-slate-200 font-mediumrounded-md outline-none" type="email" value={email} onChange={handleChange} name='email' id="email" aria-describedby="emailHelp" required />

            </div>
            <div className="mb-3">
              <label htmlFor="message" className="text-zinc-500 text-base font-bold block text-left mb-2 tracking-wider">
                Message
              </label>
              <textarea cols="30" rows="10" className="text-gray-700 p-3.5 w-full border-none bg-slate-200 font-mediumrounded-md outline-none" value={message} onChange={handleChange} type="message" name='message' id="message" required />
            </div>
            <button type="submit" className="bg-yellow-400 text-black uppercase tracking-wider inline-block font-bold rounded-md transition duration-150 py-12 px-28 text-base border-none cursor-pointer hover:translate-y-4 shadow-lg shadow-zinc-200 ">
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer toastStyle={{ backgroundColor: "#facf0f" }} />
    </div>
  )
}

export default Contact;