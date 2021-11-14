import React from "react";
import "./Footer.css";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className="site-footer mt-3">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          <div className="col p-2 footer-container map-wala-div">
            <iframe
              className="map-wala-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.787265412665!2d72.89808588654978!3d19.07308871368872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c627a20bcaa9%3A0xb2fd3bcfeac0052a!2sK.+J.+Somaiya+College+of+Engineering!5e0!3m2!1sen!2sin!4v1534429674930"
              width="280"
              height="280"
              frameBorder="0"
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>

          <div className="col p-2 footer-container">
            <div className="footer-heading-div">
              <h3 className="footer-heading" id="contact">
                Reach Us
              </h3>
              <div className="line"></div>
            </div>
            <ul className="list-unstyled">
              <li className="link-heading-li">
                <a href="#" className="a-cancel link-heading">
                  KJSCE Students’ Council 21-22
                </a>
              </li>
              <li className="">
                <a
                  href="mailto:kjsceabhiyantriki@somaiya.edu"
                  className="a-cancel highlight-on-hover"
                >
                  kjsceabhiyantriki@somaiya.edu
                </a>
              </li>
              <li className="link-heading-li">
                <a href="#" className="a-cancel link-heading">
                  Public Relations
                </a>
              </li>
              <li className="">
                <a
                  className="a-cancel highlight-on-hover"
                  href="tel:+91-829-138-3303"
                >
                  <span className="fw-bold">Freya Vora: </span>
                  +91 8291383303
                </a>
              </li>
              <li className="link-heading-li">
                <a href="#" className="a-cancel link-heading">
                  Marketing
                </a>
              </li>
              <li className="">
                <a
                  className="a-cancel highlight-on-hover"
                  href="tel:+91-970-201-6387"
                >
                  <span className="fw-bold">Supriya Tiwari: </span>
                  +91 9702016387
                </a>
              </li>
              <li className="">
                <a
                  className="a-cancel highlight-on-hover"
                  href="tel:+91-892-833-0710"
                >
                  <span className="fw-bold">Aabha Borle: </span>
                  +91 8928330710
                </a>
              </li>
            </ul>
          </div>

          <div className="col p-2 footer-container">
            <h3 className="footer-heading">Useful Links</h3>
            <div className="line"></div>
            <div className="contact-links">
              <a href="/" className="highlight-on-hover">
                <i className="fa fa-home"></i> Home
              </a>
              <a href="/events" className="highlight-on-hover">
                <i className="fa fa-calendar-alt"></i> Events
              </a>
              <a href="/get-involved" className="highlight-on-hover">
                <i className="fas fa-hands-helping"></i> Get Involved
              </a>
              <a href="/parvaah" className="highlight-on-hover">
                <i className="fas fa-hands"></i> Parvaah
              </a>
              <a href="/sponsors" className="highlight-on-hover">
                <i className="fa fa-pagelines"></i> Sponsors
              </a>
              <a
                href="https://forms.gle/FweycRFNCkQLVGYt7"
                className="highlight-on-hover"
              >
                <i className="fa fa-edit"></i>
                Register
              </a>
              <a
                href={process.env.PUBLIC_URL + "/mini-game"}
                className="highlight-on-hover"
              >
                <i className="fas fa-gamepad"></i>
                Play Mini Game
              </a>
            </div>
          </div>

          <div className="col p-2 footer-container">
            <h3 className="footer-heading">Follow Us On</h3>
            <div className="line"></div>
            <div className="follow-us-on">
              <a
                className="highlight-on-hover"
                href=" https://www.instagram.com/kjscelive/"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="highlight-on-hover"
                href="https://www.facebook.com/kjsceabhiyantriki/?ref=br_rs"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                className="highlight-on-hover"
                href=" https://twitter.com/kjsabhiyantriki?lang=en"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="highlight-on-hover"
                href="https://www.youtube.com/channel/UC7Z32X4uNZ8c31NteK3065g"
              >
                <i className="fa fa-youtube-play"></i>
              </a>
              <a
                className="highlight-on-hover"
                href="https://kjscelive.wordpress.com/"
              >
                <i className="fa fa-wordpress"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="text-white text-center d-flex flex-column fs-5 p-3 mb-2"
        style={{ lineHeight: 2 }}
      >
        <div
          style={{
            borderBottom: "1px solid var(--yellow)",
            width: "80%",
            alignSelf: "center",
            marginTop: 40,
            marginBottom: 20,
          }}
        ></div>
        <div>
          Developed By
          <a
            href="https://www.linkedin.com/in/jay-malave-0098a01ba/"
            target="_blank"
            className="dev-name"
          >
            {" "}
            Jay Malave
          </a>
          <span>,</span>
          <a
            href="https://www.linkedin.com/in/tanvi-deshpande-9046b620a/"
            target="_blank"
            className="dev-name"
          >
            {" "}
            Tanvi Deshpande
          </a>
          <span> and </span>
          <a
            href="https://www.linkedin.com/in/hussain-pettiwala-198469202/"
            target="_blank"
            className="dev-name"
          >
            {" "}
            Hussain Pettiwala{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
