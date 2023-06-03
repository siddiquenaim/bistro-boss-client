import { Parallax } from "react-parallax";

const Cover = ({ backgroundImage, title, desc }) => {
  return (
    <>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={backgroundImage}
        bgImageAlt="the menu"
        strength={-200}
      >
        <div className="hero h-[700px]">
          <div className="hero-overlay bg-opacity-10"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md lg:max-w-full bg-gradient-to-r from-[#0000009a] to-[#00000064] lg:py-28 lg:px-40">
              <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
              <p className="mb-5">{desc}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default Cover;
