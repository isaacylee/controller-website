import axios from 'axios';
import React, { FormEvent } from 'react';

import Navbar from '@/components/Navbar';

const MailchimpForm = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('EMAIL');
    const fName = formData.get('FNAME');
    const lName = formData.get('LNAME');
    const phoneNumber = formData.get('PHONE');

    try {
      const response = await axios.post(
        'http://localhost:9090/mailchimp', // Your proxy server URL
        {
          MERGE0: email,
          MERGE1: fName,
          MERGE2: lName,
          MERGE4: phoneNumber,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        alert('Subscribed!');
      } else {
        let errorMessage = 'Failed to subscribe.';
        if (response.status >= 400 && response.status < 500) {
          errorMessage += ' Please check your inputs and try again.';
        } else if (response.status >= 500) {
          errorMessage += ' Please try again later.';
        }
        throw new Error(errorMessage);
      }
    } catch (error: any) {
      console.error('Error fetching data:', error);
      alert(`Failed to fetch data. ${error.message}`);
    }
  };

  return (
    <>
      <Navbar />
      <center>
        <div id='mc_embed_shell'>
          <link
            href='//cdn-images.mailchimp.com/embedcode/classic-061523.css'
            rel='stylesheet'
            type='text/css'
          />
          <style type='text/css'>
            {`#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}`}
          </style>
          <div id='mc_embed_signup'>
            <form
              onSubmit={handleSubmit}
              action='https://lacontroller.us17.list-manage.com/subscribe/post?u=0689bc999e6529efb2132dd1e&amp;id=bc5fcb7dd9&amp;f_id=003155e0f0'
              method='post'
              id='mc-embedded-subscribe-form'
              name='mc-embedded-subscribe-form'
              className='validate'
              target='_blank'
            >
              <div id='mc_embed_signup_scroll'>
                <h2>Subscribe to updates from Controller Kenneth Mejia</h2>
                <div className='indicates-required'>
                  <span className='asterisk'>*</span> indicates required
                </div>
                <div className='mc-field-group'>
                  <label htmlFor='mce-EMAIL'>
                    Email Address <span className='asterisk'>*</span>
                  </label>
                  <input
                    type='email'
                    name='EMAIL'
                    className='required email'
                    id='mce-EMAIL'
                  />
                </div>
                <div className='mc-field-group'>
                  <label htmlFor='mce-FNAME'>First Name </label>
                  <input
                    type='text'
                    name='FNAME'
                    className='text'
                    id='mce-FNAME'
                  />
                </div>
                <div className='mc-field-group'>
                  <label htmlFor='mce-LNAME'>Last Name </label>
                  <input
                    type='text'
                    name='LNAME'
                    className='text'
                    id='mce-LNAME'
                  />
                </div>
                <div className='mc-field-group'>
                  <label htmlFor='mce-PHONE'>Phone Number </label>
                  <input
                    type='text'
                    name='PHONE'
                    className='REQ_CSS'
                    id='mce-PHONE'
                  />
                </div>

                <div id='mce-responses' className='clear'>
                  <div
                    className='response'
                    id='mce-error-response'
                    style={{ display: 'none' }}
                  ></div>
                  <div
                    className='response'
                    id='mce-success-response'
                    style={{ display: 'none' }}
                  ></div>
                </div>
                <div
                  aria-hidden='true'
                  style={{ position: 'absolute', left: '-5000px' }}
                >
                  <input
                    type='text'
                    name='b_0689bc999e6529efb2132dd1e_bc5fcb7dd9'
                    tabIndex={-1}
                  />
                </div>
                <div className='clear'>
                  <input
                    type='submit'
                    name='subscribe'
                    id='mc-embedded-subscribe'
                    className='button'
                    value='Subscribe'
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </center>
    </>
  );
};

export default MailchimpForm;
