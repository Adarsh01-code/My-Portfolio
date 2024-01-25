import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React Developer",
        company_name: "DANK",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Cloud Engineer-1 intern",
        company_name: "Hanu Software Solutions",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Software Developer Engineer-1",
        company_name: "Drishtic AI",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2023 - June 2023",
        points: [
            "Developed UI structure and models for the Chatbot with React int he front and python in the backend.",
            "Leveraged Flask as a connector between frontend and backend for seemless communication & interaction",
            "Utilized Langchain and pandas to enhance data manipulation.",
            "",
        ],
    },
    {
        title: "React Developer",
        company_name: "DANK",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "July 2023 - Present",
        points: [
            "Developed user-friendly cross-platform interface on web using React and React native; optimizing performance upto 40%.",
            "Implementation of data management and event tracking using analytical platforms like MobX and Mixpanel.",
            "Reduced customer support issues by 40% and improved user experiences using fluid UI by 50%",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'WorkSphere.com',
        description: 'Intuitive website for personal or professionals to write notes, organize, track and share data , with capabilities for dynamic content management, collaboration, and personal/team productivity.',
        link: 'https://github.com/Adarsh01-code/WorkSphere.com',
        weblink : "https://worksphere-kappa.vercel.app"
        
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Note-Flow',
        description: 'Note-Flow is a powerful app that enables users to effortlessly track tasks and jot down notes, empowering them to establish a structured routine and stay focused on their daily goals. This app is made using React-native and deployed on expo-go',
        link: 'https://github.com/Adarsh01-code/NoteFlow-reactNative',
        weblink: 'https://github.com/Adarsh01-code/NoteFlow-reactNative',
        
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'GoRide',
        description: 'Effortlessly travel with Go-Ride, an advanced transportation app utilizing React Native, Redux, map functionality, and captivating animations for a seamless user experience. This app is mmade using React-native and deployed on expo-go',
        link: 'https://github.com/Adarsh01-code/GoRide-reactNative',
        weblink: 'https://github.com/Adarsh01-code/GoRide-reactNative',
        
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Wordle-Clone',
        description: 'A word-guessing game inspired by WORDLE, where you have to guess the right word within limited attempts to win the game. A perfect game for any worthsmmith.',
        link: 'https://github.com/Adarsh01-code/WORDLE-clone-react?tab=readme-ov-file',
        weblink : 'https://timely-yeot-ba1af9.netlify.app/'
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: '3D-sphere',
        description: 'A cross-platform designed using Three Js. The website consists of a interactive 3D sphere model which changes its shade upon user interaction.',
        link: 'https://github.com/Adarsh01-code/3D-Sphere',
        weblink: 'https://dancing-daifuku-8341d1.netlify.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Minesweeper Game',
        description: 'A react-based clone-game where players click on cells in a grid to reveal numbers or mines. The goal is to uncover all cells without mines, using the numbers as clues to avoid the mines.',
        link: 'https://github.com/Adarsh01-code/MineSweeper-Game',
        weblink: 'https://radiant-sable-5f5b16.netlify.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Amazon-Clone',
        description: 'A full-stack amazon clone website with user-authentication and real-time database using Firebase, implementation of modern functionalities like carousel, with integration of payment system functionality using stripe.',
        link: 'https://github.com/Adarsh01-code/amazon-clone',
        weblink : 'https://effulgent-fenglisu-133adf.netlify.app/'
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Language Translator',
        description: 'Developed a versatile language translator in JavaScript capable of translating text across over 30 languages, leveraging advanced algorithms and APIs for accurate and efficient translations. Implemented user-friendly interfaces and real-time translation features, enhancing accessibility and user engagement. ',
        link:'https://github.com/Adarsh01-code/Language-Translator',
        weblink : "https://aquamarine-fudge-786f1a.netlify.app/"
        
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: '3D-simulation model',
        description: 'A project made using Three js for visualizing a 3D city using interactive 3D models.',
        link: 'https://github.com/Adarsh01-code/3D-City-ThreeJS',
        weblink: 'https://serene-manatee-b9f53a.netlify.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: '3D-particle-simulation model',
        description: 'A 3D interactive website for visualizing morphed objects using particles imported using CDNJS',
        link: 'https://github.com/Adarsh01-code/3D-ParticleSimulation-Model',
        weblink: 'https://melodious-smakager-b32f2d.netlify.app/',
    },
];