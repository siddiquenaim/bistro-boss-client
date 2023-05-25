import React from "react";
import "./AboutUs.css"; // Import the CSS file containing background image styles

const AboutUs = () => {
  return (
    <div className="about-us flex justify-center items-center my-10">
      <div className="white-background bg-white w-3/4 h-3/4 mx-auto flex justify-center items-center">
        <div className="content p-20 text-center space-y-9">
          <h2 className="font-bold text-5xl">Bistro Boss</h2>
          <p>
            Welcome to Bistro Boss! We are a family-owned restaurant located in
            the heart of the city. With a passion for culinary excellence, we
            strive to deliver an unforgettable dining experience to all of our
            guests. <br /> <br />
            Our team of talented chefs, trained in some of the finest culinary
            institutes, curates a menu that showcases the best of local and
            international cuisines. From delectable appetizers to mouth-watering
            entrees and indulgent desserts, every dish is prepared with the
            utmost care and attention to detail. <br /> <br />
            At Bistro Boss, we believe that great food should be accompanied by
            a warm and inviting atmosphere. Our cozy and elegant dining area
            offers a perfect setting for any occasion, whether it's a romantic
            dinner for two, a family celebration, or a business gathering. We
            take pride in our exceptional service, ensuring that each visit
            exceeds your expectations. <br /> <br />
            As part of our commitment to sustainability, we prioritize sourcing
            fresh, seasonal ingredients from local farmers and suppliers. This
            allows us to create dishes that are not only delicious but also
            environmentally conscious. We also offer a variety of vegetarian,
            vegan, and gluten-free options to cater to different dietary
            preferences. <br /> <br />
            Whether you're joining us for a leisurely lunch, a special dinner,
            or simply stopping by for a quick bite, we promise to provide you
            with a memorable culinary experience. Thank you for choosing Bistro
            Boss. We look forward to serving you soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
