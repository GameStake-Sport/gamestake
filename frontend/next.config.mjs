/** @type {import('next').NextConfig} */
const nextConfig = {

  webpack: (config, { isServer }) => {
      config.experiments = { ...config.experiments, asyncWebAssembly: true };
      config.output.webassemblyModuleFilename = (isServer ? '../' : '') + 'static/wasm/[modulehash].wasm';
      return config;
    },
    
  images: {
    domains: ['ipfs.io', 'lavender-adjacent-gamefowl-74.mypinata.cloud']
  },
};

export default nextConfig;
