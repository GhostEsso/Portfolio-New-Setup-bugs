/** 
 * @type {import('next').NextConfig}
*/
const NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

module.exports = NextConfig;
