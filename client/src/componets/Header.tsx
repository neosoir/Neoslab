import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiPlatzi } from "react-icons/si";

function Header() {
  return (
    <header className="header">
      <a className="link" title="Linkeding" href="https://mx.linkedin.com/in/leonardo-rios-pineda-979417216" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a className="link" title="Git Hub" href="https://github.com/neosoir" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a className="link" title="Platzi" href="https://platzi.com/p/leonard-rios/" target="_blank" rel="noopener noreferrer"><SiPlatzi /></a>
    </header>
  );
}

export default Header;