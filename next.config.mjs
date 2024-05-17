/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                
            }
        ]
    },
    webpack: (config, { isServer }) => {
        // Add a rule to handle font files
        config.module.rules.push({
            test: /\.(ttf|otf|eot|woff|woff2)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'static/fonts/',
                        publicPath: '/_next/static/fonts/',
                    },
                },
            ],
        });

        // Important: return the modified config
        return config;
    },
};

export default nextConfig;
