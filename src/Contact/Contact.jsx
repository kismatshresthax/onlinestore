import { Button, TextField } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import './Contact.css'
export const Contact = () => {
    const Wrapper = styled.section``;
    return (
        <>
            <Wrapper>
                <h2 className='heading'>Feel Free to Contact us</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.927001396656!2d85.33981835!3d27.6946846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1675047540410!5m2!1sen!2snp"
                 width="100%" height="450" 
                 style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           <div className="container-contact">
            <div className="contact-form">
                <form action='https://formspree.io/f/mqkoelzn' method='POST'>
                    <TextField type="text" name='username' placeholder='username' autoComplete='off' required/>
                    <TextField type="email" name='email' placeholder='email' autoComplete='off' required/>
<textarea placeholder='comment' name="message"cols="30" rows="6" autoComplete='off'></textarea>
<input className='input-click' type="submit" value="send"/>
                </form>
            </div> 
           </div>
            </Wrapper>


        </>
    )
}
