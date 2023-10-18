/* eslint-disable no-unused-vars */
import React from "react";
import "./contact.css";

export const Contact = () => {
  const storeName = "Tech Paradise"; // Nome da loja
  const storeAddress = "1234 Main Street, Tech City"; // Endereço da loja
  const storeEmail = "info@techparadise.com"; // E-mail de contato
  const storePhone = "+1 (123) 456-7890"; // Número de telefone de contato

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <hr />
      <p>
        If you have any questions or need assistance, feel free to reach out to
        us at {storeEmail}.
      </p>
      <hr />
      <p>You can also contact us by phone at {storePhone}.</p>
      <hr />
      <p>
        Visit us at our store located at:
        <br />
        {storeAddress}
      </p>
    </div>
  );
};
