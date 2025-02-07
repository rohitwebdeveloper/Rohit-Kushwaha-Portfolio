export default function WorkExperience() {
    const experiences = [
      {
        company: "Indux Solar",
        role: "Full Stack Intern (MERN)",
        duration: "Nov 2024 – Feb 2025",
        projects: [
          {
            name: "AgroKing",
            description:
              "AgroKing is an e-commerce platform specializing in grocery items, including fruits, vegetables, seasonal and exotic produce, spices, grains, pulses, seeds, and more.",
            responsibilities: [
              "Integrated Razorpay, enabling the platform to securely process 100+ transactions daily with high efficiency.",
              "Developed and optimized a reliable order management system, reducing order failure rates by 30% for smoother operations.",
              "Enhanced API performance, improving response time by 40% and ensuring faster user interactions.",
            ],
          },
          {
            name: "Billboard Generator",
            description:
              "Developed a Billboard Generator system that allows users to create interactive digital billboards with AI-driven enhancements and campaign management features.",
            responsibilities: [
              "Built image upload & preview functionality, significantly improving the user experience (UX) by 50% with smoother interactions.",
              "Created and implemented campaign management features, allowing the platform to support 1000+ interactive billboards after deployment.",
              "Worked closely with Python developers to integrate AI-generated billboards into the system seamlessly.",
            ],
          },
        ],
      },
    ];
  
    return (
      <div className="bg-primarybg text-black px-10 py-4 mb-10 min-h-screen flex flex-col items-center max-w-[900px] mx-auto">
        <h1 className="text-2xl w-full font-semibold text-primary mb-8 border-b-2 text-center border-gray-800 pb-2">Work Experience</h1>
        {experiences.map((exp, index) => (
          <div key={index} className="bg-secondarybg p-8 rounded-2xl shadow-lg mb-8 w-full max-w-4xl transition-transform transform hover:scale-105">
            <h2 className="text-[22px] font-semibold text-secondary">{exp.company}</h2>
            <p className="text-base  text-black mt-1">{exp.role} | ({exp.duration})</p>
            {exp.projects.map((project, idx) => (
              <div key={idx} className="bg-tertiarybg p-6 rounded-xl mt-6 shadow-md">
                <h3 className="text-lg font-semibold text-black">{project.name}</h3>
                <p className="text-md text-gray-600 mt-2 italic">{project.description}</p>
                <ul className="list-disc list-inside mt-4 text-gray-700 text-md space-y-1">
                  {project.responsibilities.map((resp, id) => (
                    <li key={id} className="text-md">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  