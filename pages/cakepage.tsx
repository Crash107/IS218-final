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

export default function icecreampage() {
  const list = [
    {
      title: "Chocolate",
      img: "/chocolate1.png",
      price: "$23.99",
      title1: "Calories: 350",
    },
    {
      title: "Oreo",
      img: "/oreo1.png",
      price: "$25.99",
      title1: "Calories: 400",
    },
  ];

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
          Buy Our Cakes!
        </p>
      </div>

      <h1 style={{ fontSize: "48px", marginTop: "40px" }}>Original Flavor</h1>

      <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <div>
                <b>{item.title}</b>
                <p className="text-default-500">{item.title1}</p>
              </div>
              <div>
                <p className="text-default-500">{item.price}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </DefaultLayout>
  );
}
