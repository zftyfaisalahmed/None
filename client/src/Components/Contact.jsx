import React, { useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const fname = useRef()
    const femail = useRef()
    const fmobile = useRef()
    const fmessage = useRef()

    const navigate = useNavigate()

    const submitHandler = async(e) => {
        e.preventDefault();
        try {
            let data = {
                name : fname.current.value,
                email : femail.current.value,
                mobile : fmobile.current.value,
                message : fmessage.current.value
            }
            console.log("data", data);
            await axios.post('/api/user/userInfo', data)
            .then((res) => {
                toast.success(res.data.msg)
                setTimeout(() => {
                    window.location.reload()
                    navigate('#contact')
                }, 6000)
            })
        } catch (err) {
            console.log(err);
            toast.error(err.response.data.msg)
        }
    }

  return (
    <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me!</span></h2>

        <form action="" onSubmit={submitHandler}>
            <div className="input-box">
                <input type="text" name='name' id='name' placeholder="Full Name" required ref={fname} />
                <input type="email" name='email' id='email' placeholder="Email Address" required ref={femail} />
            </div>
            <div className="input-box">
                <input type="number" name='mobile' id='mobile' placeholder="Mobile Number" required ref={fmobile} />
                {/* <input type="text" placeholder="Email Subject" /> */}
            </div>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message" required ref={fmessage}></textarea>
            <input type="submit" value="Send Message" className="button" />
        </form>
    </section>
  )
}

export default Contact