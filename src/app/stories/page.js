"use client";

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

export default function StoriesPage() {
    const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');
    const [subscribeEmail, setSubscribeEmail] = useState('');
    const [subscribeSuccess, setSubscribeSuccess] = useState(false);

    const ageGroups = [
        { id: 'all', label: 'All Ages' },
        { id: '3-5', label: '3-5 Years' },
        { id: '6-8', label: '6-8 Years' },
        { id: '9-12', label: '9-12 Years' }
    ];

    const stories = [
        {
            id: 'little-cloud',
            title: "The Little Cloud's Big Surprise",
            description: 'Meet Puffy, a little cloud who gets a wonderful surprise when he suddenly fills with water.',
            ageGroup: '2-3',
            image: '/images/stories/little-cloud.jpg',
            comingSoon: false,
            preview: true
        },
        {
            id: 'ocean-friends',
            title: 'The Ocean Friends',
            description: 'Join Coral the Turtle and her friends on a mission to clean the ocean and save their home.',
            ageGroup: '3-5',
            image: '/images/stories/ocean-friends.jpg',
            comingSoon: false,
            preview: true
        },
        {
            id: 'magical-forest',
            title: 'The Magical Forest',
            description: 'Discover the secret world of the Magical Forest where trees talk and animals have special powers.',
            ageGroup: '6-8',
            image: '/images/stories/magical-forest.jpg',
            comingSoon: false,
            preview: true
        }
    ];

    const filteredStories = selectedAgeGroup === 'all'
        ? stories
        : stories.filter(story => story.ageGroup === selectedAgeGroup);

    const handleSubscribe = (e) => {
        e.preventDefault();
        // In a real app, this would submit to a backend service
        setSubscribeSuccess(true);
        setSubscribeEmail('');
        setTimeout(() => setSubscribeSuccess(false), 3000);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="container py-8 px-4 max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Enchanting Stories for Children</h1>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                    Dive into a world of imagination with our collection of original storybooks
                    that entertain while teaching important values.
                </p>

                {/* Age Group Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {ageGroups.map(group => (
                        <button
                            key={group.id}
                            onClick={() => setSelectedAgeGroup(group.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedAgeGroup === group.id
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {group.label}
                        </button>
                    ))}
                </div>

                {/* Stories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {filteredStories.map(story => (
                        <div key={story.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-[4/3] relative bg-gray-100">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {story.image ? (
                                        <Image
                                            src={story.image}
                                            alt={story.title}
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-full"
                                            unoptimized
                                        />
                                    ) : (
                                        <div className="text-6xl">📚</div>
                                    )}
                                    {story.comingSoon && (
                                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                            <span className="bg-yellow-500 text-white px-4 py-2 rounded-full font-bold text-sm transform rotate-12">
                                                Coming Soon
                                            </span>
                                        </div>
                                    )}
                                    {story.preview && (
                                        <div className="absolute top-2 right-2">
                                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                                Preview Available
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                                <p className="text-gray-600 text-sm mb-3">{story.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-medium py-1 px-2 bg-blue-100 text-blue-800 rounded-full">
                                        Ages {story.ageGroup}
                                    </span>
                                    {story.preview ? (
                                        <Link
                                            href={`/stories/${story.id}`}
                                            className="px-4 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            Read Preview
                                        </Link>
                                    ) : (
                                        <span className="text-sm text-gray-500">Available in subscription</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Subscription Section */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 mb-12 text-white">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Monthly Story Subscription</h2>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-yellow-300 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Two beautifully illustrated storybooks every month</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-yellow-300 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Age-appropriate stories with character-building lessons</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-yellow-300 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Digital editions with interactive elements</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="h-6 w-6 text-yellow-300 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Access to exclusive storytelling videos</span>
                                </li>
                            </ul>
                            <div className="mb-6">
                                <span className="text-xl font-bold">Just ₹199/month</span>
                                <span className="text-sm ml-2 opacity-90">• Cancel anytime</span>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
                            <h3 className="text-xl font-bold mb-4 text-blue-800">Subscribe Now</h3>
                            {subscribeSuccess ? (
                                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                                    Thank you! We'll contact you soon about your subscription.
                                </div>
                            ) : (
                                <form onSubmit={handleSubscribe}>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Child's Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age Group</label>
                                        <select
                                            id="age"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        >
                                            <option value="">Select age group</option>
                                            <option value="3-5">3-5 years</option>
                                            <option value="6-8">6-8 years</option>
                                            <option value="9-12">9-12 years</option>
                                        </select>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Parent's Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={subscribeEmail}
                                            onChange={(e) => setSubscribeEmail(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                                    >
                                        Subscribe for ₹199/month
                                    </button>
                                    <p className="text-xs text-gray-500 mt-2 text-center">
                                        By subscribing, you agree to our terms and privacy policy.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* Behind the Stories */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-12">
                    <h2 className="text-2xl font-bold text-center mb-6">The Magic Behind Our Stories</h2>
                    <p className="text-gray-700 mb-6 text-center max-w-3xl mx-auto">
                        Our stories are crafted with care by passionate writers who understand
                        the importance of both entertainment and education. Each story undergoes
                        a thoughtful creation process to ensure they capture children's imagination
                        while teaching valuable life lessons.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-2xl">✏️</span>
                            </div>
                            <h3 className="font-bold mb-2">Creative Writing</h3>
                            <p className="text-sm text-gray-600">
                                Stories that spark imagination and creativity while being age-appropriate
                            </p>
                        </div>
                        <div>
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-2xl">🌱</span>
                            </div>
                            <h3 className="font-bold mb-2">Values & Lessons</h3>
                            <p className="text-sm text-gray-600">
                                Each story weaves in important lessons about kindness, environment, and friendship
                            </p>
                        </div>
                        <div>
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-2xl">🎨</span>
                            </div>
                            <h3 className="font-bold mb-2">Beautiful Illustrations</h3>
                            <p className="text-sm text-gray-600">
                                Vibrant artwork brings characters and worlds to life in every story
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-blue-800 text-white py-6">
                <div className="container mx-auto px-4 text-center">
                    <p>Adyant's Fun World © 2025</p>
                    <p className="text-sm mt-2">Inspiring imagination through storytelling!</p>
                </div>
            </footer>
        </div>
    );
} 