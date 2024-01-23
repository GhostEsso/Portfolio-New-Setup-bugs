/** 
 * @type {import('next').NextConfig}
*/
const NextConfig = {
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
};

module.exports = NextConfig;
