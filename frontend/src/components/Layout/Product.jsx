import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RxStar } from "react-icons/rx";
import pay from "../../styles/img/pay/app.jpg";
import pay2 from "../../styles/img/pay/play.jpg";
import pay3 from "../../styles/img/pay/pay.png";
import pro1 from "../../styles/img/products/f1.jpg";
import pro2 from "../../styles/img/products/f2.jpg";
import pro3 from "../../styles/img/products/f3.jpg";
import pro4 from "../../styles/img/products/f4.jpg";

import pro8 from "../../styles/img/products/n1.jpg";
import pro9 from "../../styles/img/products/n2.jpg";
import pro10 from "../../styles/img/products/n3.jpg";
import pro11 from "../../styles/img/products/n4.jpg";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(pro1);

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
              <Link className="active" to="/shop">
                Shop
              </Link>
              <Link to="../Layout/Blog.jsx">Blog</Link>
              <Link to="../Layout/About.jsx">About</Link>
              <Link to="../Layout/Contact.jsx">Contact</Link>
              <Link to="../Layout/Cart.jsx">
                <FaShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src={selectedImage} alt="" width="100%" id="MainImg" />

          <div className="small-img-group">
            <div className="small-img-col">
              <img
                src={pro1}
                alt=""
                width="100%"
                onClick={() => setSelectedImage(pro1)}
              />
            </div>
            <div className="small-img-col">
              <img
                src={pro2}
                alt=""
                width="100%"
                onClick={() => setSelectedImage(pro2)}
              />
            </div>
            <div className="small-img-col">
              <img
                src={pro3}
                alt=""
                width="100%"
                onClick={() => setSelectedImage(pro3)}
              />
            </div>
            <div className="small-img-col">
              <img
                src={pro4}
                alt=""
                width="100%"
                onClick={() => setSelectedImage(pro4)}
              />
            </div>
          </div>
        </div>

        <div className="single-pro-details">
          <h6>Home/T-Shirt</h6>
          <h4>Men's Fashion T Shirt</h4>
          <h2>$139.00</h2>
          <select>
            <option>Select Size</option>
            <option>XXL</option>
            <option>XL</option>
            <option>L</option>
            <option>M</option>
            <option>S</option>
          </select>
          <input type="number" value={1} name="" id="" />
          <button className="normal">Add to cart</button>
          <h4>Product Details</h4>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            sed odio cumque! Deserunt voluptatibus blanditiis dicta omnis sit,
            corporis ad facere, nobis quas rerum consectetur? Impedit,
            consequuntur porro. Quibusdam, neque.
          </span>
        </div>
      </section>

      <section id="product1" className="section-p1">
        <h2>Related Collection</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container">
          <div className="pro">
            <img src={pro8} alt="" />
            <div className="des">
              <span>Adidas</span>
              <h5>Astronaut T-shirt</h5>
              <div className="cart">
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
              </div>
              <h4>$78</h4>
            </div>
            <div className="cartLogo">
              <a href="#">
                <FaShoppingCart />
              </a>
            </div>
          </div>
          <div className="pro">
            <img src={pro9} alt="" />
            <div className="des">
              <span>Adidas</span>
              <h5>Astronaut T-shirt</h5>
              <div className="cart">
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
              </div>
              <h4>$78</h4>
            </div>
            <div className="cartLogo">
              <a href="#">
                <FaShoppingCart />
              </a>
            </div>
          </div>
          <div className="pro">
            <img src={pro10} alt="" />
            <div className="des">
              <span>Adidas</span>
              <h5>Astronaut T-shirt</h5>
              <div className="cart">
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
              </div>
              <h4>$78</h4>
            </div>
            <div className="cartLogo">
              <a href="#">
                <FaShoppingCart />
              </a>
            </div>
          </div>
          <div className="pro">
            <img src={pro11} alt="" />
            <div className="des">
              <span>Adidas</span>
              <h5>Astronaut T-shirt</h5>
              <div className="cart">
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
                <i>
                  <RxStar />
                </i>
              </div>
              <h4>$78</h4>
            </div>
            <div className="cartLogo">
              <a href="#">
                <FaShoppingCart />
              </a>
            </div>
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

export default Product;
