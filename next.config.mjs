// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'res.cloudinary.com',
//             },
//             {
//                 protocol: 'https',
//                 hostname: 'lh3.googleusercontent.com',
//             },
//         ],
//     },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "lh3.googleusercontent.com"
    ],
  },
};

export default nextConfig;
