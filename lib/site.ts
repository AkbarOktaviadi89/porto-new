// Public URL of the deployed site. Set NEXT_PUBLIC_SITE_URL for a custom domain;
// on Vercel the production URL is used automatically.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
    ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");
export const siteTitle = "Akbar Oktaviadi — Web Developer and Coding Mentor";
export const siteDescription = "Akbar Oktaviadi is a web developer and coding mentor based in Bandar Lampung, Indonesia. Explore live web products, teaching experience, certifications, and awards.";
