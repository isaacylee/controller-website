// import Navbar from '@/components/Navbar';
// import React, { FormEvent } from 'react';

// const MailchimpForm = () => {
//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);

//     fetch('http://eepurl.com/ihOabb', {
//       method: 'POST',
//       body: formData
//     })
//       .then(response => {
//         if (response.ok) {
//           alert('Subscribed!');
//         } else {
//           throw new Error('Failed to subscribe');
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//         alert(`Failed to fetch data. Please try again later. Error: ${error.message}`);
//       });



//   };

//   return (
//     <><Navbar /><center>
//       <div id="mc_embed_shell">
//         <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
//         <style type="text/css">
//           {`#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}`}
//         </style>
//         <div id="mc_embed_signup">
//           <form onSubmit={handleSubmit} action="http://eepurl.com/ihOabb" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
//             <div id="mc_embed_signup_scroll">
//               <h2>Subscribe to updates from Controller Kenneth Mejia</h2>
//               <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
//               <div className="mc-field-group">
//                 <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
//                 <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
//               </div>
//               <div className="mc-field-group">
//                 <label htmlFor="mce-FNAME">First Name </label>
//                 <input type="text" name="FNAME" className=" text" id="mce-FNAME" />
//               </div>
//               <div className="mc-field-group">
//                 <label htmlFor="mce-LNAME">Last Name </label>
//                 <input type="text" name="LNAME" className=" text" id="mce-LNAME" />
//               </div>
//               <div className="mc-field-group">
//                 <label htmlFor="mce-PHONE">Phone Number </label>
//                 <input type="text" name="PHONE" className="REQ_CSS" id="mce-PHONE" />
//               </div>
//               <div id="mce-responses" className="clear">
//                 <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
//                 <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
//               </div>
//               <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
//                 <input type="text" name="b_0689bc999e6529efb2132dd1e_bc5fcb7dd9" tabIndex={-1} />
//               </div>
//               <div className="clear">
//                 <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </center></>
//   );
// };

// export default MailchimpForm;
