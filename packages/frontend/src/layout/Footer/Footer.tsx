import React from "react";
import styles from "./Footer.module.css";
import Container from "../Component/Container/Container";

function Footer() {
  return (
    <Container className={styles.container}>
      <h1>Our location</h1>
      <p>JI. Bangkringan No 19, RT.I1/RW.2, Kota Surabaya, 60124</p>
      <p>
        <strong>Customer Service</strong> +6282-2876-6862
      </p>
      <p>
        <strong>We Are Open from</strong> Sun - Mon 10 AM - 22 PM
      </p>
      <hr />
      <div className={styles.icons}>
        <i className="fa-brands fa-spotify fa-xl"></i>
        <i className="fa-brands fa-instagram fa-xl"></i>
        <i className="fa-brands fa-tiktok fa-xl"></i>
        <i className="fa-brands fa-youtube fa-xl"></i>
        <i className="fa-brands fa-twitter fa-xl"></i>
      </div>
      <div className={styles.copy_righter}>
        <p>
          <i className="fa-regular fa-copyright"></i>
          2023 MINH COFFEE, All rights reserved
        </p>
        <p>Terms and Conditions | Privacy Policy</p>
      </div>
    </Container>
  );
}

export default Footer;
