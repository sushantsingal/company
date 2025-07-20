const Hero = () => {
  return (
    <section className="w-screen bg-white py-20 px-6 md:px-12 text-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            We're not boring,<br />we're just <span className="text-blue-600">different</span>.
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            A full-service creative agency helping brands build bold identities, one brilliant idea at a time.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
        <div>
          <img
            src="src/assets/hero-image.png"
            alt="Creative team"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
