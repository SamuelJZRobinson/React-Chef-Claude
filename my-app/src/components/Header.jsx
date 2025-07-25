import brandLogo from "../assets/logo.png";

export default function Header() {
  return (
    <header>
      <img className="logo" src={brandLogo} alt="Chef robot logo" />
      <p className="title">Chef Claude</p>
    </header>
  );
}
