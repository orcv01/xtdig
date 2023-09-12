import "./Navbar.css";

import { Button } from "../Button/Button";

export const Navbar = () => `

<div>
<img class="logo-xtalento" src="imagenes/logoxtalento.png" alt="Fundación ONCE/Xtalento digital"/>
<img class="xta" src="/icons/icon-facebook.png" alt="Facebook"/>
<img class="xta" src="/icons/icon-twitter.png" alt="Twitter"/>
<img class="xta" src="/icons/icon-youtube.png" alt="Youtube"/>
<img class="xta" src="/icons/icon-instagram.png" alt="Instagram"/>
<img class="xta" src="/icons/icon-linkedin.png" alt="Linkedin"/>
<img class="logo-once" src="/icons/logo-gso2021.png" alt="Grupo Social ONCE"/>
<\div>

<nav>
<ul>
<li>
<a href="#" id="quelink">¿Qué es XTD?</a>
</li>
<li>
<a href="#" id="cursoslink">Cursos</a>
</li>
<li>
<a href="#" id="becaslink">Becas</a>
</li>
<li>
<a href="#" id="bloglink">Blog</a>
</li>
<li>
<a href="#" id="alumlink">Alumni</a>
</li>
<li>
<a href="#" id="collink">Colaboradores</a>
</li>
</ul>
</nav>
`;
