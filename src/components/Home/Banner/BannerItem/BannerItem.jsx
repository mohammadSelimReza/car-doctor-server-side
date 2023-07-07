import PropTypes from "prop-types";
import "./BannerItem.css";
const BannerItem = ({ item }) => {
  const { slideNo, preSlide, nextSlide, imgDir } = item;
  return (
    <div id={slideNo} className="carousel-item relative w-full ">
      <div className="img-gradient">
        <img src={imgDir} className="w-full" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-5 ">
        <a href={`#${preSlide}`} className="btn btn-circle mx-3">
          ❮
        </a>
        <a href={`#${nextSlide}`} className="btn btn-circle mx-2">
          ❯
        </a>
      </div>

      <div className="absolute flex flex-col justify-between transform -translate-y-1/2 left-24  top-1/2 w-1/2">
        <h1 className="text-6xl text-white font-bold">
          Affordable <br />
          Price For Car <br />
          Car Servicing
        </h1>
        <p className="text-lg text-white my-7">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
        <div>
          <button className="mx-8 btn btn-warning">Discover More</button>
          <button className="mx-8 btn glass text-white">Latest Project</button>
        </div>
      </div>
    </div>
  );
};
BannerItem.propTypes = {
  item: PropTypes.node.isRequired,
};
export default BannerItem;
