import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import pay from "../../styles/img/pay/app.jpg";
import pay2 from "../../styles/img/pay/play.jpg";
import pay3 from "../../styles/img/pay/pay.png";
import people1 from "../../styles/img/people/1.png";
import people2 from "../../styles/img/people/2.png";
import people3 from "../../styles/img/people/3.png";

const About = () => {
  return (
    <div>
      <section id="header">
        <Link to="/">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt=""
          />
        </Link>
        <div>
          <ul id="navbar">
            <li>
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/about">About</Link>
              <Link className="active" to="/contact">
                Contact
              </Link>
              <Link to="/cart">
                <FaShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section id="page-header" className="about-header">
        <h2>#let's-talk</h2>

        <p>Leave a message, We love to hear from you!</p>
      </section>

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>Get In Touch</span>
          <h2>Visit one of our agencylocations or contact us today</h2>
          <h3>Head Office</h3>
          <div className="flexy">
            <p>Address</p>
            <p>Contact</p>
            <p>Contact</p>
            <p>Our Store</p>
          </div>
        </div>
        <div className="map"></div>
      </section>

      <section className="form-detail">
        <form action="">
          <span>
            LEAVE A MESSAGE
            <h2>We love to hear from you</h2>
            <input type="text" placeholder="Yourn Name" />
            <input type="text" placeholder="Yourn e-mail" />
            <input type="text" placeholder="Subject" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your message"></textarea>
            <button className="normal">Submit</button>
          </span>
        </form>

        <div className="people">
          <div>
            <img src={people1} alt="" />
            <p>
              <span>Robin Hood</span>Senior Marketing Manager <br />
              phone: <br />
              Email:
            </p>
          </div>
          <div>
            <img src={people2} alt="" />
            <p>
              <span>Little John</span>Senior Marketing Manager <br />
              phone: <br />
              Email:
            </p>
          </div>
          <div>
            <img src={people3} alt="" />
            <p>
              <span>Fra Tuck</span>Senior Marketing Manager <br />
              phone: <br />
              Email:
            </p>
          </div>
        </div>
      </section>

      <section id="newsLetter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Signup For Newsletters</h4>
          <p>
            Get e-mail updates about our latest shop and{" "}
            <span>special offers.</span>{" "}
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">Signup</button>
        </div>
      </section>

      <footer className="section-p1">
        <div className="col">
          <img
            className="logoFooter"
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt=""
          />
          <h4>Contact</h4>
          <p>
            <strong>Address:</strong>
          </p>
          <p>
            <strong>Phone:</strong>
          </p>

          <p>
            <strong>Hours:</strong>
          </p>

          <div className="follow">
            <h4>Follow us</h4>
            <div className="icon"></div>
          </div>
        </div>

        <div className="col">
          <h4>About</h4>
          <a href=".">About us</a>
          <a href=".">Delivery Information</a>
          <a href=".">Privacy Policy</a>
          <a href=".">Terms & Condition</a>
          <a href=".">Contact us</a>
        </div>

        <div className="col">
          <h4>My Account</h4>
          <a href=".">Signin</a>
          <a href=".">View Cart</a>
          <a href=".">My WishList</a>
          <a href=".">Track my order</a>
          <a href=".">Help</a>
        </div>

        <div className="col install">
          <h4>Install app</h4>
          <p>From app store and google play</p>
          <div className="row">
            <img src={pay} alt="" />
            <img src={pay2} alt="" />
          </div>
          <p>Secured Payment Gateways</p>
          <img src={pay3} alt="" />
        </div>
        <div className="copyright">
          <p>2023,Pollo etc - Html CSS JS Ecommerce template</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
