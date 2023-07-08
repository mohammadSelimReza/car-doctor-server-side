import PropTypes from "prop-types";
// import icon:
import { AiOutlineArrowRight } from "react-icons/ai";
const ServiceItems = ({ item }) => {
  const { imgDir, name, price } = item;
  return (
    <div className="card p-6">
      <img src={imgDir} alt="worker" />
      <h4 className="font-bold">{name}</h4>
      <div className="card-end flex justify-between mt-5">
        <h5 className="font-bold text-orange-600">Price: ${price}</h5>
        <button className="text-orange-600 ">
          {" "}
          <AiOutlineArrowRight />{" "}
        </button>
      </div>
    </div>
  );
};
ServiceItems.propTypes = {
  item: PropTypes.node.isRequired,
};
export default ServiceItems;
