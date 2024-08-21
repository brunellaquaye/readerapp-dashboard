import React from 'react';
import SupportScreensTopSection from '../components/SupportScreensTopSection';
import "../styles/contact.css";
import CustomInputElement from '../components/CustomInputElement';
import Facebook from "../../../assets/ic_baseline-facebook.png";
import LinkedIn from "../../../assets/ant-design_linkedin-filled.png";
import Twitter from "../../../assets/mdi_twitter.png";
import Google from "../../../assets/flat-color-icons_google.png";

function Contact() {
  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='contact-wrapper'>
      <div className='contact-support-top-section-container'>
        <SupportScreensTopSection title="Contact Support!"
        className=" bg-black">
          <p className='contact-intro mt-7'>We can't solve your problems if you don't tell us about it!</p>
        </SupportScreensTopSection>
      </div>
      <div className='contact-middle-container'>
        <section className='user-box'>
          <CustomInputElement placeholder="Name" />
          <CustomInputElement placeholder="Email" />
          <input type="text-area" placeholder='Message' />
          <section className='send-container mt-10 '>
          <button 
          className='text-center font-extrabold'
          type="submit">Send</button>
        </section>
        </section>
        
        <section className='client-info-box'>
          <div className='client-address'>
            <p>ReaderApp, Inc</p>
            {/* <p>123 Main Street</p>
            <p>Anytown, CA 12345</p> */}
            <p>Accra,Ghana</p>
          </div>
          <div className='client-socials  '>
            <img
            className=" rounded-full"
              src={Facebook}
              alt="facebook"
              onClick={() => handleSocialClick('https://facebook.com')}
            />
            <img
              src={LinkedIn}
              alt="linkedin"
              onClick={() => handleSocialClick('https://linkedin.com')}
            />
            <img
              src={Twitter}
              alt="twitter"
              onClick={() => handleSocialClick('https://twitter.com')}
            />
            {/* <img
              src={Google}
              alt="google"
              onClick={() => handleSocialClick('https://google.com')}
            /> */}
          </div>
        </section>
      </div>
      <div className='contact-bottom-container'>

      {/* I am not a robot section */}
        {/* <section className='not-a-robot-container'>
          <div>
            Place for CAPTCHA or other verification
          </div>
          <p>I'm not a robot</p>
        </section> */}
        
      </div>
    </div>
  );
}

export default Contact;
