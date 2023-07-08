import PropTypes from "prop-types";
// import icon:
import { AiOutlineArrowRight } from "react-icons/ai";
const ServiceItems = ({ item }) => {
  const { imgDir, name, price } = item;
  return (
    <div className="card my-12 ">
      <img src={imgDir} alt="worker" />
      <h6 className="font-bold">{name}</h6>
      <div className="card-end flex justify-between mt-5">
        <h6 className="font-bold text-orange-600">Price: ${price}</h6>
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
