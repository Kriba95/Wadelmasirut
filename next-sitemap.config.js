/** @type {import('next-sitemap').IConfig}*/
module.exports = {
  siteUrl: "https://wadelmasiru.fi",
  generateRobotsTxt: true,
  sitemapSize: 1000,
  exclude: [
    "/evastekaytanto",
    "/terms-conditions",
    "/yleisetehdot",
    "/profile/artikkelit",
    "/profile/create",
    "/profile/galleria",
    "/profile/home",
  ],
  async generateSitemap() {
    try {
      const { default: serverRuntimeConfig } = await import("./next.config.js", {
        basedir: __dirname,
      });
      const res = await fetch(
        `https://${serverRuntimeConfig.baseApiUrl}/dynamic-paths`
      );
  
      if (!res.ok) {
        throw new Error(`Network response was not ok: ${res.statusText}`);
      }
  
      const paths = await res.json();
  
      return {
        routes: paths.map((path) => ({
          route: path,
        })),
      };
    } catch (error) {
      console.error("Error generating sitemap:", error);
      return {
        routes: [],
      };
    }
  }
  
};
