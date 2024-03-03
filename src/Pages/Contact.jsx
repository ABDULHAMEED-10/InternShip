import Layout from "../Layout/Layout";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import "../CSS/Contact.css";
function Contact() {
  return (
    <Layout>
      <div className="contact-page d-flex mt-8">
        <div className="contact__details flex items-start justify-start">
          
                  <div className="flex flex-row items-center h-10">
            <span className="introducing mr-1"></span>
            <p
              style={{ color: "rgb(100, 244, 171)" }}
            >
              Contact Me
            </p>
                  </div>
                  
          <h2 className="flex text-left">Get In Touch With Me</h2>
          <p className="flex text-left">
            The technological revolution is changing aspect of our lives, and
            the fabric of society itself. it's also changing the way we learn
            and what we learn. Factual knowledge is less prized when everything
            you ever need to know can be found on your phone. There's no
            imperative to be an expert Factual knowledge is less prized when
            everything you ever need to know can be found at doing everything.
          </p>
          <div className="contact__details-info flex flex-row  gap-12  ">
            <div className="contact__details-info-item d-flex flex">
              <div className="contact__icon d-flex">
                <CallIcon fontSize="inherit" />
              </div>
              <div className="contact__info-text d-flex flex flex-col items-start">
                <h2>Phone</h2>
                <span>+99 (0) 101 0000 888</span>
                <span>+99 (0) 101 0000 777</span>
              </div>
            </div>
            <div className="contact__details-info-item  d-flex ">
            <div className="contact__icon d-flex">
                <MailOutlineOutlinedIcon fontSize="inherit" />
              </div>
              <div className="contact__info-text d-flex flex flex-col items-start">
                <h2 className="flex text-left">Email</h2>
                <span>Info@yourdomain.com</span>
                <span>Info@yourdomain.net</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact__form d-flex">
          <div className="form__userinfo d-flex">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
          </div>
          <textarea id="" rows="10" placeholder="Message"></textarea>
          <div className="btn rpeated_button d-flex">Send To Me</div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
