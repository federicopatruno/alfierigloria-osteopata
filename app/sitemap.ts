const URL = "https://alfierigloria-osteopata.it";

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://alfierigloria-osteopata.it",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    // {
    //   url: "https://acme.com/blog",
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.5,
    // },
  ];
}
