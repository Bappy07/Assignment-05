import Heros from "../../assets/banner-stack.png";

const Hero = () => {
  return (
    <div className="hero container mx-auto pt-7  bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt="Development stack"
          src={Heros}
          className="max-w-sm rounded-lg "
        />
        <div>
          <h1 className="text-5xl font-bold">
            Build Your Ideal <br />{" "}
            <span className="bg-linear-to-r from-[#ff5722] via-[#d81b7e] to-[#7c3aed] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="py-6">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>

          <div className="gap-x-4 flex ">
                <button className="btn bg-linear-to-r from-[#ff5722] via-[#d81b7e] to-[#7c3aed] border-none rounded-l">Explore Technologies</button>
                <button className="btn btn-outline px-12 border-b-gray-400  text-black rounded-l">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;