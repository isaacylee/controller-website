import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

// Define a new React component for the Mailchimp form
const MailchimpForm = () => {
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault(); // Prevent default form submission
    // Add your submission logic here, such as sending data to your backend or Mailchimp API
    alert('Subscribed!');
  };

  return (
    <><br></br><center>  <div id="mc_embed_shell">
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
      <style type="text/css">
        {`#mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}`}
        {/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
          We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */}
      </style>
      <div id="mc_embed_signup">
        <form onSubmit={handleSubmit} action="https://lacontroller.us17.list-manage.com/subscribe/post?u=0689bc999e6529efb2132dd1e&amp;id=bc5fcb7dd9&amp;f_id=003155e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe to updates from Controller Kenneth Mejia</h2>
            <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
              <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />

            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">First Name </label>
              <input type="text" name="FNAME" className=" text" id="mce-FNAME" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-LNAME">Last Name </label>
              <input type="text" name="LNAME" className=" text" id="mce-LNAME" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-PHONE">Phone Number </label>
              <input type="text" name="PHONE" className="REQ_CSS" id="mce-PHONE" />
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
              <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
            </div>
            <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
              <input type="text" name="b_0689bc999e6529efb2132dd1e_bc5fcb7dd9" tabIndex={-1} />
            </div>
            <div className="clear">
              <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
            </div>
          </div>
        </form>
      </div>
      <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
      <script type="text/javascript">
        {`(function($) {
            window.fnames = new Array();
            window.ftypes = new Array();
            fnames[0]='EMAIL';ftypes[0]='email';
            fnames[1]='FNAME';ftypes[1]='text';
            fnames[2]='LNAME';ftypes[2]='text';
            fnames[4]='PHONE';ftypes[4]='phone';
            fnames[3]='ADDRESS';ftypes[3]='address';
            fnames[5]='MMERGE5';ftypes[5]='text';
          }(jQuery));
          var $mcj = jQuery.noConflict(true);`}
      </script>
    </div></center></>
  );
};

export default function CollectionsBoard(props: any) {
  return (
    <>
      <Navbar />
      <Layout>
        <Seo
          title='Mailchimp'
          description='Subscribe to our newsletter'
        />
        {/* Render the Mailchimp form component */}
        <MailchimpForm />
      </Layout>
    </>
  );
}
