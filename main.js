import "./style.css";

import { Navbar } from "./components/Navbar/Navbar";

import { Footer } from "./components/Footer/Footer";

const header = document.querySelector("header");
header.innerHTML = Navbar();

const footer = document.querySelector("footer");
footer.innerHTML = Footer();
