// import icon:
import { AiFillStar } from "react-icons/ai";

import PropTypes from "prop-types";
const PopularItem = ({ item }) => {
  const { imgDir, name, price } = item;
  return (
    <div className="card p-6">
      <div className="img-card">
        <img src={imgDir} alt="" />
      </div>
      <h4 className="flex">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </h4>
      <h4 className="font-bold text-center">{name}</h4>
      <h5 className="font-bold text-center text-orange-600">Price: ${price}</h5>
    </div>
  );
};
PopularItem.propTypes = {
  item: PropTypes.node.isRequired,
};
export default PopularItem;
