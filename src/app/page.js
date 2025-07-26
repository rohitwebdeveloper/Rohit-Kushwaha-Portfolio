import Link from 'next/link';

const projects = [
  {
    name: "Snapnest – Photo Management Application",
    image: "/snapnest.png", 
    description:
    "Snapnest is a smart photo organizer and viewer that enables users to upload, view, and manage images efficiently.",
    link: "/project/snapnest",
  },
  {
    name: "Typinity – AI Powered Typing Application",
    image: "/typinity.png", 
    description:
    "Typinity is an AI-powered typing practice application designed to enhance typing speed, accuracy, and consistency.",
    link: "/project/typinity",
  },
  {
    name: "E-Store – E-Commerce Application",
    image: "https://cdni.iconscout.com/illustration/premium/thumb/ecommerce-service-illustration-download-in-svg-png-gif-file-formats--e-commerce-online-shopping-buy-pack-illustrations-6057316.png?f=webp", 
    description:
      "A full-stack e-commerce application with product filtering, authentication, and secure payments.",
    link: "/project/estore",
  },
  {
    name: "Wechat – Real-time Chat Application",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNjR2fgWmmy1S168IVYogpGHE2iKZSElT0zA&s",
    description:
      "A real-time chat app built with Socket.io for seamless bidirectional communication.",
    link: "/project/wechat",
  },
];

export default function Home() {
  return (
    <section className="flex justify-center h-screen bg-primary-bg text-primary max-w-[1000px] mx-auto">
      <div className=" max-w-[700px] mt-12 sm:mt-16 md:mt-[90px] w-full mx-5 sm:mx-10">
        <h1 className=" text-3xl sm:text-4xl md:text-5xl my-2 sm:my-4 md:my-5 ">Hello!, I'm Rohit</h1>
        <p className=" text-lg sm:text-xl md:text-2xl  ">
          I'm a Full Stack Developer
        </p>
        <Link href='/about' className='text-secondary text-sm md:text-base hover:underline '>Know More About Me</Link>
        <div>
          <div className="max-w-full w-full my-9 shadow-lg p-4  sm:p-10 hover:scale-105 transition-transform ease-in-out  bg-tertiarybg rounded-lg ">
            <div className="flex items-center space-x-4 sm:space-x-6">
              {/* Company Logo */}
              <img
                src="https://images.jdmagicbox.com/v2/comp/pune/y8/020pxx20.xx20.240719235402.w7y8/catalogue/indux-solar-nigdi-pune-solar-panel-dealers-uz086etbvn.jpg" // Replace with your logo path
                alt="Indux Solar Logo"
                className=" h-16 sm:h-24 object-cover rounded-full"
              />
              <div className="text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary">Full Stack Intern (MERN)</h3>
                <p className="mt-1 text-base md:text-lg text-secondary">Indux Solar</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              {/* Link to Work Details */}
              <Link
                href='/work-experience'
                className="text-secondary hover:underline text-xs md:text-base underline"
              >
                Know More About My Work
              </Link>
              {/* Date of Internship */}
              <p className=" text-xs sm:text-sm text-gray-600 hover:underline ">Nov'24 – Feb'25</p>
            </div>
          </div>
        </div>
        <section id="projects" className="py-3 sm:py-6 md:py-8 bg-tertiarybg max-w-[700px] w-full my-10 sm:my-14 md:my-20">
          <div className="max-w-6xl mx-auto px-3 sm:px-6">
            <h2 className="sm:text-xl md:text-2xl font-semibold text-center text-gray-800 mb-4 sm:mb-7 md:mb-10">
              Here Are My Projects
            </h2>
            <div className="grid md:grid-cols-1 gap-4 sm:gap-6 md:gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white py-4 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform ease-in-out"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className=" h-36 sm:h-40 md:h-48 object-cover contain-content mx-auto"
                  />
                  <div className="p-4 md:p-6">
                    <h3 className="text-base md:text-lg font-semibold text-gray-800">
                      {project.name}
                    </h3>
                    <p className="mt-2  text-sm md:text-base text-gray-600 italic">{project.description}</p>
                    <Link
                      href={project.link}
                      rel="noopener noreferrer"
                      className="mt-2 text-xs md:text-sm inline-block text-secondary underline"
                    >
                      View Project &gt;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

    </section>
  );
}
