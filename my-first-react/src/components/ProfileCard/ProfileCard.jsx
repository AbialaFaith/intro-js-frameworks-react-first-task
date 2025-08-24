import "./ProfileCard.css";

function ProfileCard(props) {
  return (
    <>
      <div className="card">
        <img src={props.img} alt="profile-img" />
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <button>Contact Me</button>
      </div>
    </>
  );
}

export default ProfileCard;
