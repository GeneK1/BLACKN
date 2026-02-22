import React from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
    const router = useRouter();

    const checkAuthentication = () => {
        // Add your authentication logic here
        const isAuthenticated = false; // Placeholder for actual authentication check
        if (!isAuthenticated) {
            router.push('/login');
        }
    };

    React.useEffect(() => {
        checkAuthentication();
    }, []);

    return (
        <div>
            <h1>Welcome to the Homepage</h1>
            <nav>
                <ul>
                    <li><a href="/dashboard">Dashboard</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default HomePage;