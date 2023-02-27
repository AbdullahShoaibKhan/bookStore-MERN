import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/add">Add a Book</a>
      </li>
      <li>
        <a href="/about">About Us</a>
      </li>
    </ul>
  );
}
