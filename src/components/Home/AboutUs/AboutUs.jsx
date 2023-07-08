/* eslint-disable react/no-unescaped-entities */
// import picture:
import people from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
// function
const AboutUs = () => {
  return (
    <div className="my-12 p-10">
      <div className="about flex">
        <div className="relative img-part w-1/2">
          <div className="w-3/4 h-full">
            <img src={people} alt="worker man" />
          </div>
          <div className="absolute w-3/5 top-1/2 right-10 border-8 border-l-stone-700">
            <img src={parts} alt="parts" />
          </div>
        </div>
        <div className="text-part w-1/2">
          <h5 className="font-bold text-orange-600 mb-7">About US</h5>
          <h3 className="font-bold">
            We are qualified <br />
            & of experience <br />
            in this field.
          </h3>
          <p className="my-7">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-info my-7">Get More Info</button>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
