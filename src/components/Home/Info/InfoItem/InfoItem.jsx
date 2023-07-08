import PropTypes from "prop-types";
export default function InfoItem({ infoData }) {
  const { imgDir, q, ans } = infoData;
  return (
    <div className="flex">
      <div className="img mr-5">
        <img src={imgDir} alt="infoImg" />
      </div>
      <div className="text-area text-white">
        <h4>{q}</h4>
        <h3>{ans}</h3>
      </div>
    </div>
  );
}
InfoItem.propTypes = {
  infoData: PropTypes.node.isRequired,
};
