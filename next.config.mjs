// @ts-check

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));
import i18n_config from "./next-i18next.config.js";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you have the "experimental: { appDir: true }" setting enabled, then you
   * must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: i18n_config.i18n,
  images: {
    domains: [
      "vod.api.video",
      "localhost",
      "localhost:8000",
      "localhost:1337",
      "cms.siwa.app",
      // Add strapi prod domain here
    ],
  },
};

export default config;
