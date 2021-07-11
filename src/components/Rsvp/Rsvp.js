import React, {useState} from 'react';
import emailjs from 'emailjs-com';
const Rsvp = () => {

    const [numberOfGuests, setNumberOfGuests] = useState(false)
    const [successState, SetSuccessState] = useState(false)
    const [failState, SetFailState] = useState(false)

    const handleChange = (e) => {
        if (e.target.value > 1 ) {
            setNumberOfGuests(true)
        } else {
            setNumberOfGuests(false)
        }
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_chncrll', 'template_0es0cno', e.target, 'user_jH5zV1Y5792XWvBUxYxDk') //
            .then((result) => {
                if (result.status === 200) {
                    console.log(result);
                    SetSuccessState(true)
                } else {
                    console.log(result);
                    SetFailState(true)
                }

            }, (error) => {
                SetFailState(true)
            });
    }

    return (
        <div className='rsvp-container bg-white ' id="rsvp">

            <h2 className="text-center">RSVP</h2>

            <div className="text-center flex flex-col">
                <span>Please RSVP before:</span>
                <span className="my-2"><strong>Friday 30th July</strong></span>
            </div>

            <form className="contact-form flex flex-col w-4/5 md:w-3/5 lg:w-2/5 mx-auto" onSubmit={sendEmail}>
                
                <label htmlFor="name">Name{numberOfGuests ? "s" : ""}</label>
                <input className="border border-dashed border-light-blue-500" type="text" name="name" required/>

                <label className="mt-3" htmlFor="email">Email</label>
                <input 
                    className="border border-dashed border-light-blue-500"
                    type="email" name="user_email" />

                <label className="mt-3" htmlFor="guests">Number of guests</label>
                <select className="border border-dashed border-light-blue-500"  name="guests" onChange={handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>

                <div className="flex items-center my-2">
                    <input type="radio" id="attend_one" name="attend_radio" value="I/We will attend on Saturday 25th August." required/>
                    <label className="px-2" htmlFor="attend_one">{numberOfGuests ? "We" : "I"} will attend on Saturday 25th August.</label>
                </div>

                <div className="flex items-center my-2">
                    <input type="radio" id="attend_all" name="attend_radio" value="I/We will attend on Saturday 25th and Sunday 26th August." />
                    <label className="px-2" htmlFor="attend_all">{numberOfGuests ? "We" : "I"} will attend on Saturday 25th and Sunday 26th August.</label>
                </div>

                <div className="flex items-center my-2">
                    <input  type="radio" id="no_attend" name="attend_radio" value="Unfortunatly, I am / We are unable to attend." />
                    <label className="px-2" htmlFor="no_attend">Unfortunatly, {numberOfGuests ? "we" : "I"} will be unable to attend.</label>
                </div>

                <div>
                    <p className="text-sm px-2 text-gray-500">
                        Please advise of any special dietary requirements or let us know if you have any other questions.
                    </p>
                </div>

                <label className="my-1">Message</label>
                <textarea 
                    className="border border-dashed border-light-blue-500"
                    name="dietary_message" 
                />

                {successState &&
                    <div className="flex justify-center items-center mt-4 m-1 font-medium py-1 px-2 bg-white rounded-md text-green-700 bg-green-100 border border-green-300 ">
                        <div slot="avatar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle w-5 h-5 mx-2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                        <div className="text-xl font-normal  max-w-full flex-initial">
                            RSVP Sent Sucessfully    
                        </div>
                    </div>
                }

                {failState &&
                    <div role="alert" className="mt-4">
                        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                            There was a problem sending the RSVP at this time
                        </div>
                        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                            <p>
                                Please email <a href="mailto:sarahanddonnchadh@gmail.com" target="_blank" rel="noreferrer">sarahanddonnchadh@gmail.com</a> with your response
                            </p>
                        </div>
                    </div>
                }

                <input
                    className="gold my-4 p-3 w-8/12 mx-auto rounded-md"
                    type="submit" 
                    value="SEND" 
                    disabled={successState}
                />
            </form>
        </div>
    )
}

export default Rsvp