import "./style.css";

import { Navbar } from "./components/Navbar/Navbar";

import { Main } from "./components/Main/Main";

import { Divider } from "./components/Divider/Divider";

import { Footer } from "./components/Footer/Footer";

const header = document.querySelector("header");
header.innerHTML = Navbar();

const main = document.querySelector("main");
main.innerHTML = Main();

const footer = document.querySelector("footer");
footer.innerHTML = Footer();

footer.insertAdjacentHTML("beforebegin", Divider());
