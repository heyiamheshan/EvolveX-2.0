import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Gaming & Competition',
        desc: 'Organizing competitive events that foster teamwork, leadership, and togetherness among youth.'
    },
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Education & Career',
        desc: 'Building awareness of careers in esports, game development, and digital entertainment.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Community Service',
        desc: 'Promoting inclusivity and empowering youth across Sri Lanka beyond just IT backgrounds.'
    }
];

export const plansData = [
    {
        id: 'interviews',
        name: 'Interviews & Talks',
        price: 'Phase 1',
        desc: 'Industry experts sharing knowledge.',
        credits: 'Completed',
        features: [
            'Expert interviews',
            'Career guidance sessions',
            'Industry insights',
            'Digital entertainment focus',
            'Skill awareness'
        ]
    },
    {
        id: 'festival',
        name: 'Esports Festival',
        price: 'Phase 2',
        desc: 'Competitive events and teamwork.',
        credits: 'Successful',
        features: [
            'Teamwork building',
            'Leadership training',
            'Competitive tournament',
            'Emerging talent recognition',
            'Community engagement'
        ],
        popular: true
    },
    {
        id: 'future',
        name: 'Sustainable Future',
        price: 'Phase 3',
        desc: 'Uplifting the esports ecosystem.',
        credits: 'Ongoing',
        features: [
            'Collaborative growth',
            'Ecosystem development',
            'Youth empowerment',
            'Inclusive culture',
            'Continuous opportunity'
        ]
    }
];

export const faqData = [
    {
        question: 'What is EvolveX?',
        answer: 'EvolveX is an innovative esports initiative by the Rotaract Club of University of Kelaniya designed to empower Sri Lankan youth through gaming, education, and community service.'
    },
    {
        question: 'What was EvolveX 1.0?',
        answer: 'EvolveX 1.0 featured interviews, conferences, and an esports festival that connected students with industry experts to build awareness of careers in gaming.'
    },
    {
        question: 'Who can participate?',
        answer: 'The initiative is open to all Sri Lankan youth, promoting inclusivity beyond IT backgrounds to encourage teamwork and leadership.'
    },
    {
        question: 'What are the goals of EvolveX?',
        answer: 'Our goal is to strengthen youth engagement, uplift the esports ecosystem in Sri Lanka, and support a sustainable, collaborative future for digital entertainment.'
    }
];

export const footerLinks = [
    {
        title: "Company",
        links: [
            { name: "Home", url: "#" },
            { name: "Services", url: "#" },
            { name: "Work", url: "#" },
            { name: "Contact", url: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "GitHub", url: "#" }
        ]
    }
];