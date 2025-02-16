/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'keyhantex.ir',
                pathname: '/drzosha/loader/image/**',
            },
        ],
    }
};

export default nextConfig;
