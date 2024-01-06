import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Image } from "@nextui-org/react";
import React from "react";
import styles from "../styles/hero.module.css";
import Testimonials from "@/components/Testimonials";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          height: "800px",
          background: 'url("/hero.webp") no-repeat',
          backgroundPosition: "center", // Center the background image
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <p
            className="hello"
            style={{
              color: "black",
              fontSize: "4.25rem",
              fontWeight: "bold",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            Indulge in a World of Flavors
          </p>
          <p style={{ fontSize: "2.6rem", whiteSpace: "nowrap" }}>
            Sign up and receive 30% off your next order!
          </p>

          <Button
            onClick={() => {
              console.log("Button clicked");
              window.location.href = "/HomePage2";
            }}
            color="default"
            style={{
              marginTop: "40px",
              fontSize: "1.5rem",
              padding: "2rem 2rem",
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          background: 'url("/vanilla2.png") calc(0% + 50px) no-repeat',
          backgroundSize: "600px 375px",
          height: "560px",
          alignItems: "center",
          font: "2rem / 1.6",
          borderBottom: "2px solid #000",
          borderTop: "2px solid #000",
        }}
      >
        <h1
          style={{
            marginTop: "5rem",
            width: "35rem",
            left: "50%",
            fontSize: "3.0rem",
            whiteSpace: "nowrap",
          }}
        >
          New Cinammon Flavor!
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          background: 'url("/icecream2.png") no-repeat calc(100% - 50px)',
          backgroundSize: "600px 375px",
          height: "560px",
          alignItems: "center",
          font: "2rem / 1.6",
          borderBottom: "2px solid #000",
          margin: "auto",
        }}
      >
        <div
          style={{
            textDecoration: "none",

            display: "flex",
            flexDirection: "column", // Adjust to column layout
            alignItems: "center", // Center horizontally
            textAlign: "center", // Center text within each line
            width: "100%", // Take up full width
            padding: "0 60px", // Add padding as needed
          }}
        >
          <h1
            style={{
              fontSize: "2.0rem",
              margin: "5rem 0",
              color: "black",
            }}
          >
            Winter Sale!
          </h1>
          <p
            style={{
              fontSize: "2.0rem",
              margin: "5rem 0",
              color: "black",
            }}
          >
            All original flavors are 40% Off
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          background: 'url("/cakes.png") calc(0% + 50px) no-repeat',
          backgroundSize: "600px 375px",
          height: "560px",
          alignItems: "center",
          font: "2rem / 1.6",
          borderBottom: "2px solid #000",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginRight: "50px", // Adjust margin as needed
          }}
        >
          <h1
            style={{
              marginTop: "5rem",
              width: "35rem",
              left: "50%",
              fontSize: "3.0rem",
              whiteSpace: "nowrap",
            }}
          >
            Look at our Delicious Cakes
          </h1>
          <br />

          <Button
            onClick={() => {
              console.log("Button clicked");
              window.location.href = "/cakepage";
            }}
            color="default"
            style={{ fontSize: "1.5rem", padding: "2rem 2rem" }}
          >
            View Cakes
          </Button>
        </div>
      </div>

      <div
        style={{
          marginTop: "50px",
          marginBottom: "120px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "3.0rem",
          }}
        >
          Reviews
        </h1>
        <Testimonials />
      </div>
    </DefaultLayout>
  );
}
