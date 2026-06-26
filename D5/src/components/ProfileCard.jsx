import "./ProfileCard.css";

function ProfileCard() {
  return (
    <div className="card">

      <img
        src="profile img.jpg"
        alt="profile"
      />

      <h2>Shreya S</h2>

      <h4>Frontend Developer</h4>

      <p>📍 Chennai, India</p>

      <div className="skills">
        <span>HTML</span>
        <span>CSS</span>
        <span>React</span>
        <span>JavaScript</span>
      </div>

      <div className="about">
        Passionate frontend developer who loves building responsive web applications using React.
      </div>

      <button>Connect</button>

    </div>
  );
}

export default ProfileCard;