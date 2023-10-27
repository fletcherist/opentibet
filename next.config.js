/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'storage.googleapis.com',
        ],
        imageSizes: [16, 20, 32, 40, 64, 128, 256, 512, 1024],
        deviceSizes: [1280, 1366, 1600, 1920],
        disableStaticImages: true,
        // unoptimized: true,
    },
}

module.exports = nextConfig
