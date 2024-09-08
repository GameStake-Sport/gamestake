/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      config.experiments = { ...config.experiments, asyncWebAssembly: true };
      config.output.webassemblyModuleFilename = (isServer ? '../' : '') + 'static/wasm/[modulehash].wasm';
      return config;
    },
  };

export default nextConfig;
