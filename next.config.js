/** 
 * @type {import('next').NextConfig}
 */
module.exports = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev, isServer }) => {
    // Ajoutez des configurations spécifiques à la production ici
    if (!dev && !isServer) {
      // Exemple : Activer la minification uniquement en production
      config.optimization.minimize = true;
    }

    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-maxage=300', // 5 minutes for immutable assets
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-maxage=600', // 10 minutes for SSR pages
          },
        ],
      },
    ];
  },
};
