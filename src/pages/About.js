import React from "react";
import Lamp from "../assets/09.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Lamp})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT Xian Food</h1>
        <p>
        Xi'an, a city with a rich historical heritage, is also renowned for its unique culinary culture. 
        As you wander through the streets and alleys of Xi'an, you can taste a variety of authentic snacks such as the famous Roujiamo, Liangpi, 
        and Yangrou Paomo. Roujiamo, often called "Chinese hamburger," features crispy bread filled with tender, juicy pork, offering a distinct flavor. 
        Liangpi, a cold noodle dish dressed with garlic, chili, and vinegar, is spicy and refreshing, perfect for cooling down in the summer. 
        Yangrou Paomo is a more traditional Shaanxi dish, where finely chopped lamb is stewed with pieces of bread, creating a delicious and rich flavor. 
        These dishes are not just a feast for the taste buds but also a profound experience of Xi'an's history and culture.
        </p>
      </div>
    </div>
  );
}

export default About;
