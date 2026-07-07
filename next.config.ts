import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy Wix URLs still indexed per the SEO audit — send them to the
      // closest current equivalent instead of 404ing.
      { source: "/copy-of-home", destination: "/", permanent: true },
      { source: "/general-contractor", destination: "/", permanent: true },
      { source: "/general-contractor-and-painting", destination: "/services/painting", permanent: true },
    ];
  },
};

export default nextConfig;
