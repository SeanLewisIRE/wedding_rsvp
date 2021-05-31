import React from 'react';
import emailjs from 'emailjs-com';
const Rsvp = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='rsvp-container bg-white'>
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="name" />
                <label for="name">Name</label>

                <input type="email" name="user_email" />
                <label for="email">Email</label>

                <input type="radio" id="attend_one" name="attend_one" value="I/We will attend on Saturday 25th August."/>
                <label for="attend_one">I/We will attend on Saturday 25th August.</label>
                <br/>
                <input type="radio" id="attend_all" name="attend_all" value="I/We will attend on Saturday 25th and Sunday 26th August."/>
                <label for="attend_all">I/We will attend on Saturday 25th and Sunday 26th August.</label>
                <br/>
                <input type="radio" id="no_attend" name="no_attend" value="Unfortunatly, I am / We are unable to attend." />
                <label for="no_attend">Unfortunatly, I am / We are unable to attend.</label>
                <br/>

                <label>Message</label>
                <textarea name="dietary_message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Rsvp