// next-sitemap.js
module.exports = {
    siteUrl: 'https://www.mcodevbytes.in', // Replace with your site's URL
    generateRobotsTxt: true,  // Generates a robots.txt file for your site
    changefreq: 'daily',      // Frequency of page updates, modify as needed
    priority: 0.7,            // Default priority for pages
    sitemapSize: 5000,        // Maximum number of URLs per sitemap file
    exclude: ['/admin/**', '/private/**'], // Exclude specific paths
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://www.mcodevbytes.in/sitemap-0.xml', // Add additional sitemap URLs if needed
      ],
    },
  };
  