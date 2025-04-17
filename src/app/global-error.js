"use client";

export default function GlobalError({
    error,
    reset,
}) {
    return (
        <html>
            <body>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    textAlign: 'center',
                    padding: '0 20px',
                    backgroundColor: '#f0f9ff'
                }}>
                    <h1 style={{
                        fontSize: '2rem',
                        color: '#1e40af',
                        marginBottom: '1rem'
                    }}>
                        Something Went Wrong
                    </h1>
                    <p style={{
                        color: '#4b5563',
                        marginBottom: '2rem',
                        maxWidth: '500px'
                    }}>
                        We've encountered a critical error. Please try refreshing the page.
                    </p>
                    <button
                        onClick={() => reset()}
                        style={{
                            backgroundColor: '#2563eb',
                            color: 'white',
                            border: 'none',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '0.5rem',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        Try Again
                    </button>
                </div>
            </body>
        </html>
    );
} 