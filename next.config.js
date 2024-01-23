/** 
 * @type {import('next').NextConfig}
 */
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

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

      // Utilisez le plugin TerserPlugin pour la minification
      config.optimization.minimizer.push(new TerserPlugin());

      // Utilisez le plugin CompressionPlugin pour la compression
      config.plugins.push(
        new CompressionPlugin({
          filename: '[path][base].gz',
          algorithm: 'gzip',
          test: /\.(js|css|html|svg)$/,
          threshold: 8192, // Seuils de compression (ajustez selon vos besoins)
          minRatio: 0.8,
        })
      );
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
