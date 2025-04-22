export const metadata = {
    metadataBase: new URL('https://adyantsworld.com'),
    title: "Adyant's World - Ocean Conservation through Minecraft",
    description: "Join Adyant on fun Minecraft adventures while learning about ocean conservation!",
    keywords: ['minecraft', 'ocean conservation', 'kids gaming', 'environmental education'],
    openGraph: {
        title: "Adyant's World",
        description: "Join Adyant on fun Minecraft adventures while learning about ocean conservation!",
        url: 'https://adyantsworld.com',
        siteName: "Adyant's World",
        images: [
            {
                url: '/images/og-image.jpg',
                width: 1200,
                height: 630,
                alt: "Adyant's World - Ocean Conservation through Minecraft"
            }
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Adyant's World",
        description: "Join Adyant on fun Minecraft adventures while learning about ocean conservation!",
        images: ['/images/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
    },
}; 