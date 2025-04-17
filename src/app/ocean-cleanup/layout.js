export const metadata = {
    title: 'Ocean Cleanup Game | Adyant Creation',
    description: 'Play our interactive ocean cleanup game and earn a discount on Adyant merchandise while learning about ocean conservation.',
    keywords: ['ocean cleanup', 'interactive game', 'environmental education', 'Adyant Creation', 'ocean conservation'],
    openGraph: {
        title: 'Ocean Cleanup Game | Adyant Creation',
        description: 'Play our interactive ocean cleanup game and earn a discount on Adyant merchandise while learning about ocean conservation.',
        url: 'https://adyantcreation.com/ocean-cleanup',
        images: [
            {
                url: '/images/ocean-cleanup-game.jpg',
                width: 1200,
                height: 630,
                alt: 'Adyant Creation Ocean Cleanup Game',
            },
        ],
    },
};

export default function OceanCleanupLayout({ children }) {
    return (
        <>
            {children}
        </>
    );
} 