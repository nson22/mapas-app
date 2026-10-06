import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Libera o acesso ao dev server pela rede local (HMR e recursos /_next).
  // Next compara apenas o hostname, sem protocolo nem porta.
  allowedDevOrigins: ['192.168.0.24'],
};

export default nextConfig;
