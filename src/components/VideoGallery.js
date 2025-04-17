"use client";

import { useState } from 'react';

const mockVideos = [
    {
        id: "video1",
        title: "Minecraft Tutorial: How to Build a Cool House",
        description: "Watch Adyant build an awesome house in Minecraft with easy steps!",
        thumbnailUrl: "/images/minecraft-thumbnail-1.jpg", // These would need to be created
        youtubeId: "placeholder1" // These would be actual YouTube IDs
    },
    {
        id: "video2",
        title: "My Favorite Minecraft Tips and Tricks",
        description: "Secret tips that will make your Minecraft world amazing!",
        thumbnailUrl: "/images/minecraft-thumbnail-2.jpg",
        youtubeId: "placeholder2"
    },
    {
        id: "video3",
        title: "Storytelling: The Magic Forest Adventure",
        description: "Listen to a fun story about magical creatures in the forest!",
        thumbnailUrl: "/images/story-thumbnail-1.jpg",
        youtubeId: "placeholder3"
    },
    {
        id: "video4",
        title: "Drawing Tutorial: How to Draw a Dragon",
        description: "Learn how to draw an amazing dragon with Adyant!",
        thumbnailUrl: "/images/drawing-thumbnail-1.jpg",
        youtubeId: "placeholder4"
    }
];

export default function VideoGallery() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <div className="section bg-primary">
            <h2 className="text-2xl font-bold mb-4">Adyant's Videos</h2>
            <p className="mb-6">
                Watch Adyant's fun tutorials, storytelling, and gameplay videos! New videos added every week.
            </p>

            {selectedVideo ? (
                <div className="mb-8">
                    <div className="aspect-w-16 aspect-h-9 mb-4 bg-black rounded-lg overflow-hidden">
                        <iframe
                            src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?rel=0`}
                            title={selectedVideo.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{selectedVideo.title}</h3>
                    <p className="mb-4">{selectedVideo.description}</p>
                    <button
                        onClick={() => setSelectedVideo(null)}
                        className="bg-white bg-opacity-30 py-2 px-4 rounded-lg hover:bg-opacity-40 transition-all"
                    >
                        Back to Gallery
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mockVideos.map(video => (
                        <div
                            key={video.id}
                            className="card cursor-pointer"
                            onClick={() => setSelectedVideo(video)}
                        >
                            <div className="aspect-w-16 aspect-h-9 mb-2 bg-accent rounded-lg overflow-hidden">
                                {/* In a real implementation, use real thumbnails */}
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-accent to-highlight text-white">
                                    <div className="text-center p-4">
                                        <div className="text-4xl mb-2">
                                            {video.id.includes("minecraft") ? "🏠" :
                                                video.id.includes("story") ? "📚" : "🎨"}
                                        </div>
                                        <div className="text-lg">Click to Play</div>
                                    </div>
                                </div>
                            </div>
                            <h3 className="font-bold mb-1">{video.title}</h3>
                            <p className="text-sm">{video.description}</p>
                        </div>
                    ))}
                </div>
            )}

            <div className="mt-8 text-center">
                <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent text-foreground font-bold py-3 px-6 rounded-lg inline-block hover:transform hover:scale-105 transition-all"
                >
                    Subscribe to Our Channel
                </a>
            </div>
        </div>
    );
} 