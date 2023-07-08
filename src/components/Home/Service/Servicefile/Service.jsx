/* eslint-disable react/no-unescaped-entities */
import ServiceItems from "../ServiceItems/ServiceItems";

// import css file
import "./Service.css";
import { useState } from "react";
import { useEffect } from "react";
// function:
const Service = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="my-36">
      <h6 className="font-bold text-orange-600 text-center">Service</h6>
      <h3 className="text-3xl font-bold text-center">Our Service Area</h3>
      <p className="text-center">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which don't look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-3">
        {items.map((item) => (
          <ServiceItems key={item.id} item={item}></ServiceItems>
        ))}
      </div>
    </div>
  );
};
export default Service;
