import {
  CodeBracketIcon,
  MusicalNoteIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/20/solid";

import playlist124Image from '../../public/images/Playlist124_Cover.jpg'
import cluelessImage from '../../public/images/ClueLess_1.jpg'

export const playlist124 = {
    name: 'Playlist 124',
    description: 'Spotify API | Free | Open-Source',
    platforms: 'React + Next.js',
    imageUrl: playlist124Image,
    href: 'https://playlist-124.vercel.app/',
    features: [
        {
            name: "Built with the latest technology.",
            description:
            "Built using the React and Next.js frameworks, this project stands as a testament to the fusion of creativity and technology. The roadmap ahead includes the integration of additional captivating features to further enhance user experience and utility.",
            icon: CodeBracketIcon,
        },
        {
            name: "With love for music.",
            description:
            "A dynamic web application designed to empower Spotify users with the ability to craft and customize playlists beyond the platform's inherent capabilities. By leveraging the Spotify API, the app permits users to design their unique playlists and seamlessly integrate them into their Spotify profiles.",
            icon: MusicalNoteIcon,
        },
        {
            name: "Scalable design.",
            description: "New features can be added quickly and securely.",
            icon: ArrowTrendingUpIcon,
        },
    ]
}

export const clueless = {
    name: 'ClueLess Time Tracker',
    description: 'Full-Stack | Free | Open-Source',
    platforms: 'React + Next.js + Prisma',
    imageUrl: cluelessImage,
    href: '#',
    features: [
        {
            name: "Utilizes the smartest technology.",
            description:
            "Utilizing a tech stack that includes React, Next.js, Prisma, and other advanced tools, this project underscores the marriage of technology with the pursuit of personal development and efficiency.",
            icon: CodeBracketIcon,
        },
        {
            name: "For better self-management.",
            description:
            "A productivity-focused application tailored for individuals, especially freelancers, aiming to optimize their time utilization. By offering granular insights into daily activities, the app fosters self-awareness, allowing users to identify inefficiencies and rectify detrimental habits.",
            icon: MusicalNoteIcon,
        },
        {
            name: "Scalable design.",
            description: "New features can be added quickly and securely.",
            icon: ArrowTrendingUpIcon,
        },
    ]
}