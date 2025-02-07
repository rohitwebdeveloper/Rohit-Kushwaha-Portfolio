"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

const projects = [
    {
        slug: "estore",
        name: "E-Store – E-Commerce Application",
        image: "/projectestore.png",
        description:
            "E-Store is a full-stack e-commerce web application designed to provide a seamless online shopping experience. Built using React.js, Node.js, Express, and MongoDB, the platform allows users to browse products, filter items, and make secure purchases. The application ensures high performance and security with features like JWT authentication, Google Auth0 for social login, and Multer for image uploads. Optimized with Vite, it delivers fast load times and a smooth user interface. The backend efficiently manages product catalogs, user authentication, and order processing, providing a reliable infrastructure for an online marketplace.",
        features: [
            "Product Filtering & Debounced Search - Enables users to find products quickly with dynamic search capabilities",
            "Secure Authentication - Implements JWT authentication and Google Auth0 for seamless login",
            "Optimized Performance - Uses Vite to improve load times by 30%",
            "Image Management - Integrates Multer for secure image uploads",
            "User Reviews & Ratings - Allows customers to share feedback and rate products",
            "Order & Payment Processing - Secure transactions with Razorpay integration",
            "Responsive Design - Fully optimized for mobile and desktop users"
        ]
        ,
        techStack: ["React.js", "Redux", "Vite", "Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "MongoDB", "Mongoose", "Google Auth0", "Multer", "Razorpay"],
        liveDemo: "https://e-store-n221.onrender.com/",
        github: "#",
    },
    {
        slug: "wechat",
        name: "Wechat – Real-time Chat Application",
        image: "/projectwechat.png",
        description:
            "Wechat is a real-time chat application built with Socket.io, React.js, and Node.js, providing instant communication between users. Designed with a responsive front-end and a scalable back-end, Wechat ensures smooth and uninterrupted messaging. The app enables bidirectional communication, allowing multiple users to chat in real-time. With WebSockets at its core, Wechat delivers instant message updates without delays, making it an ideal solution for real-time interactions.",
        features: [
            "Real-Time Messaging - Enables instant communication via Socket.io",
            "Bidirectional Data Flow - Ensures smooth two-way interaction between users",
            "Scalability - Optimized backend with Node.js for handling multiple concurrent users",
            "Responsive UI - Built with React.js, providing a smooth user experience on all devices"
        ],
        techStack: ["React.js", "Socket.io", "Node.js", "Express.js"],
        liveDemo: "https://wechatfrontend.onrender.com/",
        github: "#",
    },
];

export default function ProjectDetails() {
    const params = useParams();
    const slug = params.slug;

    const project = projects.find((proj) => proj.slug === slug);

    if (!project) {
        return (
            <h1 className="text-center text-2xl mt-10 text-primary">
                Project Not Found
            </h1>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-8 bg-primarybg shadow-xl rounded-lg">
            <h1 className="text-xl font-semibold text-primary border-b-4 border-secondary pb-2">
                {project.name}
            </h1>
            <img
                src={project.image}
                alt={project.name}
                className=" h-80 object-cover mx-auto mt-6 rounded-lg shadow-lg"
            />
            <p className="mt-6 text-base text-gray-700 leading-relaxed italic">
                {project.description}
            </p>

            <div className="mt-6 bg-secondarybg p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-primary">Features:</h2>
                <ul className="list-disc pl-6 text-gray-800 mt-2 space-y-1">
                    {project.features.map((feature, index) => (
                        <li key={index} className="pl-2">{feature}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-6 bg-accent p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-primary">Tech Stack:</h2>
                <div className="flex flex-wrap gap-2 mt-3">
                    {project.techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium shadow-md"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-8 flex gap-6">
                <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-lg hover:bg-[#51c0d0] transition duration-300"
                >
                    Live Demo
                </a>
                {/* <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-lg hover:bg-gray-900 transition duration-300"
                >
                    GitHub Repo
                </a> */}
            </div>

            <div className="mt-8 text-center">
                <Link
                    href="/#projects"
                    className="text-secondary font-medium text-lg hover:underline transition duration-300"
                >
                    ← Back to Projects
                </Link>
            </div>
        </div>
    );
}
