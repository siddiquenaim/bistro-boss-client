import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-items my-20 text-white py-10">
      <SectionTitle
        heading={"Featured Items"}
        subHeading={"Check it Out"}
      ></SectionTitle>

      <div className="md:flex justify-center items-center py-8 px-16">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div className="md:m-10 space-y-3">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et maxime
            qui ad repellendus doloremque reprehenderit quae? Ex accusamus sint
            quidem, molestiae distinctio assumenda, blanditiis, reiciendis
            molestias vitae cum perferendis totam?
          </p>
          <button className="btn btn-outline text-white border-0 border-b-4 mt-4">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
