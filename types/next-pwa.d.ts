declare module "next-pwa" {
  import { NextConfig } from "next";

  interface RuntimeCaching {
    urlPattern: string | RegExp;
    handler: string;
    options?: {
      cacheName?: string;
      expiration?: {
        maxEntries?: number;
        maxAgeSeconds?: number;
      };
      networkTimeoutSeconds?: number;
      cacheableResponse?: {
        statuses: number[];
        headers?: Record<string, string>;
      };
    };
  }

  function withPWA(config: {
    dest?: string;
    disable?: boolean;
    register?: boolean;
    skipWaiting?: boolean;
    scope?: string;
    sw?: string;
    runtimeCaching?: RuntimeCaching[];
  }): (nextConfig: NextConfig) => NextConfig;

  export default withPWA;
}
