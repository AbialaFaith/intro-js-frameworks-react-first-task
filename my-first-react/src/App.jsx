import "./App.css";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import usersData from "./userData.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const userElements = usersData.map((user) => (
    <ProfileCard key={user.id} {...user} />
  ));

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <main className="card-container">
        <h2 className="title">Our Team</h2>
        <Slider {...settings}>{userElements}</Slider>
      </main>
    </>
  );
}

export default App;
