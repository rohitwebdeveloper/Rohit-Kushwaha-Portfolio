import Link from 'next/link';

const projects = [
  {
    name: "E-Store – E-Commerce Application",
    image: "https://cdni.iconscout.com/illustration/premium/thumb/ecommerce-service-illustration-download-in-svg-png-gif-file-formats--e-commerce-online-shopping-buy-pack-illustrations-6057316.png?f=webp", // Replace with actual image
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
      <div className=" max-w-[700px] mt-[90px] w-full">
        <h1 className="text-5xl my-5 ">Hello!, I'm Rohit</h1>
        <p className="text-2xl  ">
          I'm a Full Stack Developer
        </p>
        <Link href='/about' className='text-secondary hover:underline '>Know More About Me</Link>
        <div>
          <div className="max-w-full w-full my-9 shadow-lg  p-10 hover:scale-105 transition-transform ease-in-out  bg-tertiarybg rounded-lg ">
            <div className="flex items-center space-x-6">
              {/* Company Logo */}
              <img
                src="https://images.jdmagicbox.com/v2/comp/pune/y8/020pxx20.xx20.240719235402.w7y8/catalogue/indux-solar-nigdi-pune-solar-panel-dealers-uz086etbvn.jpg" // Replace with your logo path
                alt="Indux Solar Logo"
                className=" h-24 object-cover rounded-full"
              />
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-primary">Full Stack Intern (MERN)</h3>
                <p className="mt-1 text-lg text-secondary">Indux Solar</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              {/* Link to Work Details */}
              <Link
                href='/work-experience'
                className="text-secondary hover:underline text-base underline"
              >
                Know More About My Work
              </Link>
              {/* Date of Internship */}
              <p className="text-sm text-gray-600 hover:underline ">Nov, 2024 – Feb, 2025</p>
            </div>
          </div>
        </div>
        <section id="projects" className="py-8 bg-tertiarybg max-w-[700px] w-full my-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-10">
              Here Are My Projects
            </h2>
            <div className="grid md:grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white py-4 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform ease-in-out"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className=" h-48 object-cover contain-content mx-auto"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-gray-600 italic">{project.description}</p>
                    <Link
                      href={project.link}
                      rel="noopener noreferrer"
                      className="mt-2 text-sm inline-block text-secondary underline"
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
