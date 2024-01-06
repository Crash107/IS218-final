import React, { CSSProperties } from "react";
import Image from "next/image";

const Testimonials = () => {
  const testimonialContainerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "60px",
  };

  const testimonialBoxStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "300px", // Fixed width
    height: "200px", // Fixed height
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
  };

  const testimonialImageContainerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  const testimonialImageStyle: CSSProperties = {
    borderRadius: "50%",
    marginBottom: "10px",
    width: "60px",
    height: "60px", // Fixed image height
  };

  const testimonialTextStyle: CSSProperties = {
    marginTop: "10px",
  };

  return (
    <div style={testimonialContainerStyle}>
      <div style={testimonialBoxStyle}>
        <div style={testimonialImageContainerStyle}>
          <Image
            className="circular-image"
            src="/guy2.png"
            alt="Placeholder image"
            width={60}
            height={60}
            style={testimonialImageStyle}
          />
          <h2 style={{ marginLeft: "40px", marginTop: "10px" }}>
            Ethan Parker Smith
          </h2>
        </div>
        <p style={testimonialTextStyle}>
          This place brings me back to my childhood
        </p>
      </div>
      <div style={testimonialBoxStyle}>
        <div style={testimonialImageContainerStyle}>
          <Image
            className="circular-image"
            src="/guy1.png"
            alt="Placeholder image"
            width={60}
            height={60}
            style={testimonialImageStyle}
          />
          <h2 style={{ marginLeft: "40px", marginTop: "10px" }}>
            Marcus Johnson
          </h2>
        </div>
        <p style={testimonialTextStyle}>Amazing Variety of Flavors</p>
      </div>
      <div style={testimonialBoxStyle}>
        <div style={testimonialImageContainerStyle}>
          <Image
            className="circular-image"
            src="/testimonial.jpg"
            alt="Placeholder image"
            width={60}
            height={60}
            style={testimonialImageStyle}
          />
          <h2 style={{ marginLeft: "40px", marginTop: "10px" }}>Ava Simmons</h2>
        </div>
        <p style={testimonialTextStyle}>
          Loved Every Scoop
          <br />
          Delicious and Unique
          <br />
          flavors
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
