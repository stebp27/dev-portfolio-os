import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p>ABOUT_ME.jsx</p>
        <h2>Hi, I'm Stefano</h2>
        <p>Frontend Developer</p>
        <p>Building modern, responsive web experiences.</p>
        <p>Open to work</p>
      </div>
      <div className="hero__avatar">
        {/* <img src={profileImage} alt="Stefano Beltrami" /> */}
      </div>
    </section>
  );
}
