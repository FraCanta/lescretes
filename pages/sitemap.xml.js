//pages/sitemap.xml.js
const headlessSite = "https://www.lescretes.it";

import LayoutTranslation from "../public/layout.json";

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">       
       <url>
         <loc>https://www.lescretes.it</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
        <url>
         <loc>https://www.lescretes.it/la-famiglia-charrere</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
        <url>
         <loc>https://www.lescretes.it/en/la-famiglia-charrere</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
        <url>
         <loc>https://www.lescretes.it/il-rifugio-del-vino</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
        <url>
         <loc>https://www.lescretes.it/en/il-rifugio-del-vino</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
       <url>
         <loc>https://www.lescretes.it/en</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
       <url>
         <loc>https://www.lescretes.it/il-terroir</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
       <url>
         <loc>https://www.lescretes.it/en/il-terroir</loc>
         <changefreq>weekly</changefreq>
         <priority>1</priority>
       </url>
       <url>
       <loc>https://www.lescretes.it/sostenibilita</loc>
       <changefreq>weekly</changefreq>
       <priority>1</priority>
     </url>
     <url>
     <loc>https://www.lescretes.it/en/sostenibilita</loc>
     <changefreq>weekly</changefreq>
     <priority>1</priority>
   </url>
    <url>
       <loc>https://www.lescretes.it/i-vini</loc>
       <changefreq>weekly</changefreq>
       <priority>1</priority>
     </url>
     <url>
     <loc>https://www.lescretes.it/en/i-vini</loc>
     <changefreq>weekly</changefreq>
     <priority>1</priority>
   </url>
    <url>
       <loc>https://www.lescretes.it/le-degustazioni</loc>
       <changefreq>weekly</changefreq>
       <priority>1</priority>
     </url>
     <url>
     <loc>https://www.lescretes.it/en/le-degustazioni</loc>
     <changefreq>weekly</changefreq>
     <priority>1</priority>
   </url>
   <url>
       <loc>https://www.lescretes.it/cosmesi</loc>
       <changefreq>weekly</changefreq>
       <priority>1</priority>
     </url>
     <url>
     <loc>https://www.lescretes.it/en/cosmesi</loc>
     <changefreq>weekly</changefreq>
     <priority>1</priority>
   </url>
    <url>
       <loc>https://www.lescretes.it/contatti</loc>
       <changefreq>weekly</changefreq>
       <priority>1</priority>
     </url>
     <url>
     <loc>https://www.lescretes.it/en/contatti</loc>
     <changefreq>weekly</changefreq>
     <priority>1</priority>
   </url>
    <url>
       <loc>https://www.lescretes.it/store-locator</loc>
       <changefreq>weekly</changefreq>
       <priority>1</priority>
     </url>
     <url>
     <loc>https://www.lescretes.it/en/store-locator</loc>
     <changefreq>weekly</changefreq>
     <priority>1</priority>
   </url>
     </urlset>
     
   `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap(resObj);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
