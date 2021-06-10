import React, {useState} from 'react';
import emailjs from 'emailjs-com';
const Rsvp = () => {

    const [numberOfGuests, setNumberOfGuests] = useState(false)


    const handleChange = (e) => {
        if (e.target.value > 1 ) {
            setNumberOfGuests(true)
        } else {
            setNumberOfGuests(false)
        }
    }

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
        <div className='rsvp-container bg-white ' id="rsvp">
            <h2 className="text-center">RSVP</h2>

            <div className="text-center flex flex-col">
                <span>Please RSVP before:</span>
                <span className="my-2"><strong>31st Juneuary 2030</strong></span>
            </div>

            <form className="contact-form flex flex-col w-80 mx-auto" onSubmit={sendEmail}>
                
                <label for="name">Name{numberOfGuests ? "s" : ""}</label>
                <input className="border border-dashed border-light-blue-500" type="text" name="name" />

                <label className="mt-3" for="email">Email</label>
                <input 
                    className="border border-dashed border-light-blue-500"
                    type="email" name="user_email" />

                <label className="mt-3" for="guests">Number of guests</label>
                <select className="border border-dashed border-light-blue-500"  name="guests" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>

                <div className="flex items-center my-2">
                    <input type="radio" id="attend_one" name="attend_radio" value="I/We will attend on Saturday 25th August." />
                    <label className="px-2" for="attend_one">{numberOfGuests ? "We" : "I"} will attend on Saturday 25th August.</label>
                </div>

                <div className="flex items-center my-2">
                    <input type="radio" id="attend_all" name="attend_radio" value="I/We will attend on Saturday 25th and Sunday 26th August." />
                    <label className="px-2" for="attend_all">{numberOfGuests ? "We" : "I"} will attend on Saturday 25th and Sunday 26th August.</label>
                </div>

                <div className="flex items-center my-2">
                    <input  type="radio" id="no_attend" name="attend_radio" value="Unfortunatly, I am / We are unable to attend." />
                    <label className="px-2" for="no_attend">Unfortunatly, {numberOfGuests ? "we" : "I"} will be unable to attend.</label>
                </div>


                <label className="my-1">Message</label>
                <textarea 
                    className="border border-dashed border-light-blue-500"
                    name="dietary_message" />
                <input 
                    className="gold my-4 p-3 w-8/12 mx-auto rounded-md"
                    type="submit" 
                    value="SEND" 
                />
            </form>
        </div>
    )
}

export default Rsvp