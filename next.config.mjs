/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'keyhantex.ir',
                pathname: '/drzosha/loader/image/**',
            },
            {
                protocol: 'https',
                hostname: 'keyhantex.ir',
                pathname: '/drzoshamag/wp-content/uploads/**',
            },
        ],
    }
};

export default nextConfig;
