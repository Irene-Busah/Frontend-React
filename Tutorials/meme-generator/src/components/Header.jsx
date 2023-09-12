import logo from "../assets/troll-face.png";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo" className="nav--icon" />
      <h2 className="nav--icon_text">Meme Generator</h2>
      <h4 className="nav--title">React Course - Project 3</h4>
    </header>
  );
}
