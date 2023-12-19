import React from "react";

const Testimonials = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around", // Adjust spacing between cards
        alignItems: "center",
        marginTop: "60px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column", // Adjusted to column layout
          alignItems: "center",
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row", // Adjusted to column layout
            alignItems: "center",
          }}
        >
          <img
            className="circular-image"
            src="guy2.png"
            alt="Placeholder image"
            style={{
              borderRadius: "50%",
              marginBottom: "10px",
              width: "60px",
            }}
          />

          <h2 style={{ marginLeft: "40px", marginTop: "10px" }}>
            Ethan Parker Smith
          </h2>
        </div>
        <p style={{ marginTop: "10px" }}>
          This place brings me back to my childhood
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column", // Adjusted to column layout
          alignItems: "center",
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row", // Adjusted to column layout
            alignItems: "center",
          }}
        >
          <img
            className="circular-image"
            src="guy1.png"
            alt="Placeholder image"
            style={{
              borderRadius: "50%",
              marginBottom: "10px",
              width: "60px",
            }}
          />

          <h2 style={{ marginLeft: "40px", marginTop: "10px" }}>
            Marcus Johnson
          </h2>
        </div>
        <p style={{ marginTop: "10px" }}>Amazing Variety of Flavors</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column", // Adjusted to column layout
          alignItems: "center",
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row", // Adjusted to column layout
            alignItems: "center",
          }}
        >
          <img
            className="circular-image"
            src="/testimonial.jpg"
            alt="Placeholder image"
            style={{
              borderRadius: "50%",
              marginBottom: "10px",
              width: "60px",
            }}
          />

          <h2 style={{ marginLeft: "40px", marginTop: "10px" }}>Ava Simmons</h2>
        </div>
        <p style={{ marginTop: "10px" }}>
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
