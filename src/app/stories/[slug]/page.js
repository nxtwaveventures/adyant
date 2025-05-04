import StoryContent from './StoryContent';

const stories = {
    "the-little-cloud": {
        title: "The Little Cloud",
        description: "Join Puffy the cloud on an adventure to clean the ocean!",
        ageGroup: "Ages 4-8",
        readTime: "5 min read",
        color: "from-blue-400 to-blue-600",
        slug: "the-little-cloud",
        content: [
            {
                text: "High up in the sky lived a fluffy white cloud named Puffy. Puffy loved to float around and watch the world below.",
            },
            {
                text: "One day, Puffy noticed that the ocean below was not as blue and beautiful as it used to be. There was trash floating in the water!",
            },
            {
                text: "Puffy decided to help clean the ocean. The little cloud gathered all its water droplets and made it rain, washing away the trash.",
            },
            {
                text: "The sea creatures were so happy! They jumped and splashed, thanking Puffy for making their home clean again.",
            },
            {
                text: "From that day on, Puffy made sure to keep the ocean clean by making it rain whenever it saw trash. The ocean sparkled blue once more!",
            }
        ]
    },
    "ocean-friends": {
        title: "Ocean Friends",
        description: "Meet the amazing creatures that call the ocean their home!",
        ageGroup: "Ages 4-8",
        readTime: "5 min read",
        category: "Ocean Life",
        color: "from-blue-400 to-blue-600",
        slug: "ocean-friends",
        content: [
            {
                text: "In the deep blue ocean, there lived many wonderful creatures. Each one was special in its own way.",
            },
            {
                text: "There was Coral the clownfish, who loved to play hide and seek among the colorful coral reefs.",
            },
            {
                text: "Dolphin Dolly could jump high out of the water and do amazing flips in the air.",
            },
            {
                text: "Turtle Tim was the wisest of them all. He had traveled the ocean for many years and knew all the best places to visit.",
            },
            {
                text: "Together, these ocean friends showed us that the sea is full of wonder and magic!",
            }
        ]
    },
    "the-magical-forest": {
        title: "The Magical Forest",
        description: "Discover the secrets of a forest where trees can talk and animals are your friends!",
        ageGroup: "Ages 4-8",
        readTime: "5 min read",
        category: "Nature",
        color: "from-green-400 to-green-600",
        slug: "the-magical-forest",
        content: [
            {
                text: "Deep in the heart of the forest, there was a special place where magic grew like flowers.",
            },
            {
                text: "The trees could whisper secrets to each other, and the flowers would dance when the wind blew.",
            },
            {
                text: "A little fox named Rusty discovered this magical place one day while exploring.",
            },
            {
                text: "The forest animals taught Rusty how to care for the trees and flowers, making the magic grow stronger.",
            },
            {
                text: "Now, Rusty and the forest friends work together to keep their magical home safe and beautiful!",
            }
        ]
    }
};

export function generateStaticParams() {
    return Object.keys(stories).map((slug) => ({
        slug: slug,
    }));
}

export default async function StoryPage({ params }) {
    const { slug } = await params;
    const story = stories[slug];

    if (!story) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4">Story Not Found</h1>
                    <p className="text-gray-600">The story you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    return <StoryContent story={story} />;
} 