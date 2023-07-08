/* eslint-disable react/no-unescaped-entities */
import PopularItem from "../PopularItem/PopularItem";

// import css file
import "./PopularItems.css";
import { useState } from "react";
import { useEffect } from "react";
// function:
const PopularItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="my-36">
      <h5 className="font-bold text-orange-600 text-center">Service</h5>
      <h3 className=" font-bold text-center">Our Service Area</h3>
      <p className="text-center">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which don't look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-3 gap-6 my-12">
        {items.map((item) => (
          <PopularItem key={item.id} item={item}></PopularItem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline btn-warning">More Services</button>
      </div>
    </div>
  );
};
export default PopularItems;
