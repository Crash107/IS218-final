import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import DefaultLayout from "@/layouts/default";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

export default function about() {
  return (
    <DefaultLayout>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "150px",
          backgroundColor: "#FFF0D9",
          margin: "10px",
        }}
      >
        <p
          className="hello"
          style={{
            fontSize: "2rem",
            textAlign: "center",
            fontFamily: "Mandali",
          }}
        >
          Learn More About US
        </p>
      </div>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#FFF0D9",
          width: "80%",
          margin: "40px auto",
        }}
      >
        <p>
          Our Tale Unfolds In The Picturesque
          <br /> Streets Of Newark, Armed With An
          <br />
          Old Family Recipe And A Dream
          <br /> , Began Crafting Ice Cream Like No
          <br /> Other. This Wasnt Just Ice Cream It <br /> Was A Canvas For
          Their Culinary
          <br />
          Artistry, A Way To Bring People
          <br /> Together, And A Tribute To Timeless
          <br />
          Flavors And Quality.
        </p>
        <p>
          From A Small, Charming Ice Cream
          <br /> Cart To The Vibrant, Beloved Store
          <br /> We Are Today, Scoops Of Euphoria
          <br /> Has Evolved, Yet Our Essence <br /> Remains Unchanged. Weve
          Grown
          <br /> Alongside Our Community, Serving
          <br /> Generations Of Families, Each Visit
          <br /> Weaving Into The Tapestry Of Our
          <br /> Shared History.
        </p>
      </div>
    </DefaultLayout>
  );
}
