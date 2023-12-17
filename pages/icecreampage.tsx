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
      title: "Orange",
      img: "/icecream.png",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/icecream.png",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/icecream.png",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/icecream.png",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/icecream.png",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/icecream.png",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/icecream.png",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/icecream.png",
      price: "$12.20",
    },
  ];

  return (
    <DefaultLayout>
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
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </DefaultLayout>
  );
}
