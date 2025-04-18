"use client";

import { useState, useEffect } from 'react';
import Navbar from '../../../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

export default function LittleCloudStory() {
    const [currentPage, setCurrentPage] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    // Prevent hydration issues
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const storyPages = [
        {
            text: "This is Puffy. Puffy is a little cloud. Puffy is fluffy and white.",
            image: "/images/stories/little-cloud-1.jpg"
        },
        {
            text: "Puffy is alone in the sky. No cloud friends to play with. Puffy didn't go to cloud school.",
            image: "/images/stories/little-cloud-2.jpg"
        },
        {
            text: "Uh-oh! Puffy feels funny. Puffy gets big. Puffy gets heavy.",
            image: "/images/stories/little-cloud-3.jpg"
        },
        {
            text: "What's happening? Puffy has water inside! Puffy didn't know clouds make rain!",
            image: "/images/stories/little-cloud-4.jpg"
        },
        {
            text: "Splash! Rain falls down. The flowers are happy. 'Thank you Puffy!' they say.",
            image: "/images/stories/little-cloud-5.jpg"
        },
        {
            text: "Puffy feels light again. Puffy is happy. Puffy likes making rain. Yay, Puffy!",
            image: "/images/stories/little-cloud-6.jpg"
        }
    ];

    const goToNextPage = () => {
        if (currentPage < storyPages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Error handling for image loading
    const handleImageError = () => {
        setHasError(true);
    };

    const CloudIllustration = ({ pageNumber }) => {
        // Different cloud styles based on page number
        const cloudStyles = [
            { background: 'white', width: '100px', height: '60px' }, // Small regular cloud
            { background: 'white', width: '100px', height: '60px', marginTop: '50px' }, // Lonely cloud higher in sky
            { background: 'white', width: '150px', height: '90px' }, // Growing cloud
            { background: 'linear-gradient(to bottom, white, #c2e6ff)', width: '180px', height: '110px' }, // Water filling cloud
            { background: 'linear-gradient(to bottom, white, #c2e6ff)', width: '150px', height: '90px', droplets: true }, // Raining cloud
            { background: 'white', width: '120px', height: '70px' } // Happy cloud
        ];

        const style = cloudStyles[pageNumber] || cloudStyles[0];

        return (
            <div className="relative flex items-center justify-center" style={{ height: '300px' }}>
                {/* Sky background */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-300 to-blue-100"></div>

                {/* Sun */}
                <div className="absolute top-10 right-10 rounded-full bg-yellow-300 w-16 h-16"></div>

                {pageNumber >= 4 && (
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-green-100">
                        {/* Ground with flowers */}
                        <div className="absolute top-0 left-1/4 w-5 h-12 bg-green-600"></div>
                        <div className="absolute top-0 left-1/4 mt-[-8px] ml-[-5px] w-10 h-10 bg-pink-400 rounded-full"></div>

                        <div className="absolute top-0 left-2/4 w-5 h-10 bg-green-600"></div>
                        <div className="absolute top-0 left-2/4 mt-[-6px] ml-[-4px] w-8 h-8 bg-yellow-300 rounded-full"></div>

                        <div className="absolute top-0 left-3/4 w-5 h-14 bg-green-600"></div>
                        <div className="absolute top-0 left-3/4 mt-[-10px] ml-[-7px] w-12 h-12 bg-purple-300 rounded-full"></div>
                    </div>
                )}

                {/* Cloud */}
                <div className="z-10 relative">
                    <div
                        className="rounded-[50px] mx-auto"
                        style={{
                            width: style.width,
                            height: style.height,
                            background: style.background,
                            marginTop: style.marginTop || '0px',
                            position: 'relative'
                        }}
                    >
                        {/* Cloud shape */}
                        <div className="absolute w-[40%] h-[40%] bg-white rounded-full" style={{ top: '-20%', left: '25%' }}></div>
                        <div className="absolute w-[25%] h-[25%] bg-white rounded-full" style={{ top: '-15%', left: '10%' }}></div>
                        <div className="absolute w-[25%] h-[25%] bg-white rounded-full" style={{ top: '-15%', left: '60%' }}></div>

                        {/* Cloud face - different expressions based on page */}
                        <div className="absolute w-full h-full flex items-center justify-center">
                            {/* Eyes */}
                            <div className="absolute w-4 h-4 bg-gray-800 rounded-full" style={{ top: '40%', left: '30%' }}></div>
                            <div className="absolute w-4 h-4 bg-gray-800 rounded-full" style={{ top: '40%', left: '60%' }}></div>

                            {/* Mouth - changes based on page */}
                            {pageNumber === 0 && (
                                <div className="absolute w-8 h-2 bg-gray-800 rounded-full" style={{ top: '60%', left: '40%' }}></div>
                            )}
                            {pageNumber === 1 && (
                                <div className="absolute w-8 h-8 border-b-2 border-gray-800 rounded-b-full" style={{ top: '55%', left: '40%', borderTop: 'none', transform: 'rotate(180deg)' }}></div>
                            )}
                            {pageNumber === 2 && (
                                <div className="absolute w-12 h-8 border-2 border-gray-800 rounded-full" style={{ top: '55%', left: '38%', borderTop: 'none' }}></div>
                            )}
                            {pageNumber === 3 && (
                                <div className="absolute w-16 h-10 border-2 border-gray-800 rounded-full" style={{ top: '55%', left: '35%', borderTop: 'none' }}></div>
                            )}
                            {pageNumber === 4 && (
                                <div className="absolute w-12 h-8 border-2 border-gray-800 rounded-full" style={{ top: '55%', left: '38%', borderBottom: 'none' }}></div>
                            )}
                            {pageNumber === 5 && (
                                <div className="absolute w-20 h-10 border-2 border-gray-800 rounded-full" style={{ top: '60%', left: '30%', borderTop: 'none' }}></div>
                            )}
                        </div>

                        {/* Rain drops for page 4 */}
                        {style.droplets && (
                            <>
                                <div className="absolute w-2 h-5 bg-blue-400 rounded-b-full" style={{ bottom: '-20px', left: '20%' }}></div>
                                <div className="absolute w-2 h-8 bg-blue-400 rounded-b-full" style={{ bottom: '-25px', left: '40%' }}></div>
                                <div className="absolute w-2 h-6 bg-blue-400 rounded-b-full" style={{ bottom: '-15px', left: '60%' }}></div>
                                <div className="absolute w-2 h-7 bg-blue-400 rounded-b-full" style={{ bottom: '-20px', left: '80%' }}></div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    // If not yet loaded on client side, show simple loading state
    if (!isLoaded) {
        return (
            <div className="min-h-screen bg-sky-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">☁️</div>
                    <p className="text-xl text-gray-600">Loading Puffy's story...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-sky-50">
            <Navbar />

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <Link href="/stories" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Back to Stories
                    </Link>

                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-blue-800">The Little Cloud's Big Surprise</h1>
                        <p className="text-gray-600 mt-2">A story for very young children (ages 2-3)</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="aspect-[4/3] relative bg-blue-100">
                            <div className="w-full h-full flex items-center justify-center">
                                {hasError || !storyPages[currentPage]?.image ? (
                                    <CloudIllustration pageNumber={currentPage} />
                                ) : (
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={storyPages[currentPage].image}
                                            alt={`Story page ${currentPage + 1}`}
                                            className="object-contain"
                                            width={800}
                                            height={600}
                                            onError={handleImageError}
                                            unoptimized
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="p-6 md:p-8">
                            {storyPages[currentPage] && (
                                <p className="text-2xl md:text-3xl text-center font-medium text-gray-800">
                                    {storyPages[currentPage].text}
                                </p>
                            )}
                        </div>

                        <div className="px-6 pb-6 flex justify-between">
                            <button
                                onClick={goToPreviousPage}
                                disabled={currentPage === 0}
                                className={`py-3 px-6 rounded-full flex items-center ${currentPage === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Previous
                            </button>

                            <div className="self-center">
                                <span className="text-lg font-medium text-gray-600">
                                    Page {currentPage + 1} of {storyPages.length}
                                </span>
                            </div>

                            <button
                                onClick={goToNextPage}
                                disabled={currentPage === storyPages.length - 1}
                                className={`py-3 px-6 rounded-full flex items-center ${currentPage === storyPages.length - 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}
                            >
                                Next
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                        <h2 className="text-xl font-bold text-blue-800 mb-2">For Parents:</h2>
                        <p className="text-gray-700">
                            This simple story introduces young children to the concept of rain formation in clouds.
                            The character Puffy helps children understand natural processes in a relatable way.
                            As you read, point to the cloud and raindrops to help your child connect the words with
                            the images.
                        </p>
                    </div>

                    <div className="mt-8 text-center">
                        <Link
                            href="/stories"
                            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Explore More Stories
                        </Link>
                    </div>
                </div>
            </div>

            <footer className="bg-blue-800 text-white py-6 mt-12">
                <div className="container mx-auto px-4 text-center">
                    <p>Adyant's Fun World © 2025</p>
                    <p className="text-sm mt-2">Inspiring imagination through storytelling!</p>
                </div>
            </footer>
        </div>
    );
} 