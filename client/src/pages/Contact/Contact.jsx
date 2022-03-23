import PageTitle from "../../components/common/PageTitle/PageTitle";

import "./Contact.scss";

const addressData = {
  name: "Betty Craft Designs",
  address: "Creative House",
  street: "Example Street 13",
  city: "London",
  zip: "SW1A 1AA",
  country: "UK",
  phone: "+44 (0)123 456 7890",
  mail: "bcd@contact.com",
  weekDayOpeningTimes: "Monday - Friday 9:00am - 4:30pm",
  weekendOpeningTimes: "Saturday - 9:00am - 2:30pm",
  sundayOpeningTimes: "Sunday - Closed",
};

const Contact = () => {
  return (
    <main className="container">
      <PageTitle>Contact</PageTitle>
      <div className=" contact">
        <section className="contact__left">
          <h2 className="contact__name">{addressData.name}</h2>
          <p className="contact__item">{addressData.address}</p>
          <p className="contact__item">{addressData.street}</p>
          <p className="contact__item">{addressData.city}</p>
          <p className="contact__item">{addressData.zip}</p>
          <p className="contact__item">Tel: {addressData.phone}</p>
          <p className="contact__item">@ {addressData.mail}</p>
          <h3 className="contact__subtitle">Store Opening Times:</h3>
          <p className="contact__item">{addressData.weekDayOpeningTimes}</p>
          <p className="contact__item">{addressData.weekendOpeningTimes}</p>
          <p className="contact__item">{addressData.sundayOpeningTimes}</p>
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
