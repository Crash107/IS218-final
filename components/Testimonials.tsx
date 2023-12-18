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
            src="https://via.placeholder.com/100"
            alt="Placeholder image"
            style={{
              borderRadius: "50%",
              marginBottom: "10px",
            }}
          />

          <h2 style={{ marginLeft: "40px", marginTop: "10px" }}>John Doe</h2>
        </div>
        <p style={{ marginTop: "10px" }}>
          Hello mya nems dsds desd esd esd esdsde eds
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
            src="https://via.placeholder.com/100"
            alt="Placeholder image"
            style={{
              borderRadius: "50%",
              marginBottom: "10px",
            }}
          />

          <h2 style={{ marginLeft: "40px", marginTop: "10px" }}>John Doe</h2>
        </div>
        <p style={{ marginTop: "10px" }}>
          Hello mya nems dsds desd esd esd esdsde eds
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
            src="https://via.placeholder.com/100"
            alt="Placeholder image"
            style={{
              borderRadius: "50%",
              marginBottom: "10px",
            }}
          />

          <h2 style={{ marginLeft: "40px", marginTop: "10px" }}>John Doe</h2>
        </div>
        <p style={{ marginTop: "10px" }}>
          “This place brings me back to my childhood”
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
