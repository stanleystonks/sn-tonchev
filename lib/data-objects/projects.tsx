import {
  CodeBracketIcon,
  MusicalNoteIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/20/solid";

import playlist124Image from '../../public/images/Playlist124_Cover.jpg'

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
            "Playlist 124 uses some of the latest features and paradigms of React 18 and Next.js 13. I continuously improve the code to make it faster and more efficient.",
            icon: CodeBracketIcon,
        },
        {
            name: "With love for music.",
            description:
            "Every music lover deserves the best possible functionality. Indeed, there are some missing and hidden features on Spotify that can really enhance the user experience.",
            icon: MusicalNoteIcon,
        },
        {
            name: "Scalable design.",
            description: "New features will be added quickly and securely.",
            icon: ArrowTrendingUpIcon,
        },
    ]
}