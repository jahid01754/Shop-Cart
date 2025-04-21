import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <div className="p-10 bg-shop_light_pink">
      <h2>Home</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam unde
        quo veritatis. Quidem, labore ratione architecto velit hic amet sint
        quis, odit error sapiente odio aut fuga similique molestiae a debitis
        fugiat vel esse delectus! Modi dolorem itaque culpa iure reprehenderit
        tempora pariatur eligendi laboriosam soluta, animi voluptates et. Eaque!
      </p>
      <Button variant={"default"} size={"lg"}>
        Check Out
      </Button>
    </div>
  );
};

export default Home;
