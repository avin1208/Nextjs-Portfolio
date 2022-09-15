import React, {useState} from 'react'
import styles from '../styles/Contact.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {message, name, email};

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
        <div className={styles.main_contact}>
            <div className={styles.main_container}>
                <div className={styles.header}>
                    <span className={styles.headermain}>
                        CONTACT
                    </span>
                    <span className={styles.after}>

                    </span>
                    <div className={styles.section}>
                        Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.
                    </div>
                </div>
                <div className={styles.contact_container}>
                    <form onSubmit={handleSubmit} >
                        <div className={styles.mb3}>
                            <label htmlFor="name" className={styles.formlabel}>Enter your name</label>
                            <input className={styles.input} type="text" value={name} onChange={handleChange}  id="name" name='name' aria-describedby="emailHelp" required />
                        </div>
                        <div className={styles.mb3}>
                            <label htmlFor="email" className={styles.formlabel}>Email address</label>
                            <input className={styles.input} type="email" value={email} onChange={handleChange}  name='email' id="email" aria-describedby="emailHelp" required />
                            
                        </div>
                        <div className={styles.mb3}>
                            <label htmlFor="message" className={styles.formlabel}>Message</label>
                            <textarea cols="30" rows="10" className={styles.input} value={message} onChange={handleChange} type="message"  name='message' id="message" required />
                        </div>
                        <button type="submit" className={styles.btn}>Submit</button>
                    </form>
                </div>
            </div>
            <ToastContainer toastStyle={{ backgroundColor: "#facf0f" }} />
        </div>
    )
}

export default Contact;