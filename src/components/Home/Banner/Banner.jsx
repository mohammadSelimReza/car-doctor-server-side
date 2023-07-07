import { useEffect, useState } from "react";
import BannerItem from "./BannerItem/BannerItem";
const Banner = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("carouselItems.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []);
  return (
    <div className="my-12">
      <div className="carousel w-full">
        {items.map((item) => (
          <BannerItem key={item.id} item={item}></BannerItem>
        ))}
      </div>
    </div>
  );
};
export default Banner;
