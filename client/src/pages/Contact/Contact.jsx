import PageTitle from "../../components/common/PageTitle/PageTitle";

import "./Contact.scss";

const Contact = () => {
  return (
    <main className="container">
      <PageTitle>Contact</PageTitle>
      <div className=" contact">
        <section className="contact__left">
          <h2 className="contact__name">Betty Craft Designs</h2>
          <p className="contact__item">Creative House</p>
          <p className="contact__item">Example Street 13</p>
          <p className="contact__item">London SW1A 1AA</p>
          <p className="contact__item">Tel: +44 (0)123 456 7890</p>
          <p className="contact__item">@ bcd@contact.com</p>
          <h3 className="contact__subtitle">Store Opening Times:</h3>
          <p className="contact__item">Monday - Friday 9:00am - 4:30pm</p>
          <p className="contact__item">Saturday - 9:00am - 2:30pm</p>
          <p className="contact__item">Sunday - Closed</p>
        </section>
        <section className="contact__right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6457860614946!2d-0.14407868408736707!3d51.501367318965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760520cd5b5eb5%3A0xa26abf514d902a7!2sBuckingham%20Palace!5e0!3m2!1spl!2spl!4v1648049251116!5m2!1spl!2spl"
            width="100%"
            height="450px"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </div>
    </main>
  );
};

export default Contact;

/*
CONTACT US


Address:
Crafty Arts Ltd
Creative House
Bryant Avenue



Tel: +44 (0)207 993 5479

Store Opening Times:
Monday - Friday 9:00am - 4:30pm
Saturday - 9:00am - 2:30pm
Sunday - Closed
*/
