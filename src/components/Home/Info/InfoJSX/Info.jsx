import { useEffect, useState } from "react";
import InfoItem from "../InfoItem/InfoItem";

export default function Info() {
  const [infoDatas, setInfoDatas] = useState([]);
  useEffect(() => {
    fetch("Info.json")
      .then((res) => res.json())
      .then((data) => setInfoDatas(data));
  }, []);
  return (
    <div className="h-64 bg-black rounded-xl mb-16 flex justify-around py-24 px-10">
      {infoDatas.map((infoData) => (
        <InfoItem key={infoData.id} infoData={infoData}></InfoItem>
      ))}
    </div>
  );
}
