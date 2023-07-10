

const URL = "https://alfierigloria-osteopata.it";

export default function sitemap() {
  return [
    {
      url: URL,
      lastModified: new Date(),
    },
    {
      url: `${URL}/cookie-policy`,
      lastModified: new Date(),
    },
    {
      url: `${URL}/privacy-policy`,
      lastModified: new Date(),
    },
  ];
}
