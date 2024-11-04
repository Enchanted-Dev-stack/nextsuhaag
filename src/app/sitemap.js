// import axios from "axios";
// import {encodeId} from "../utils/encoder";

// export async function getMovies() {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//   const result = await axios.get(
//     `${baseUrl}/fetch/movies`
//   );

//   return result.data;
// }

export const revalidate = 120;

export default async function Sitemap() {

  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  //   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  //   const result = await getMovies();
  //   const watchLinks = result.map((movie) => ({
  //     url: `${domain}/watch/${movie.name.split(" ").join("-").replace(/&/g, "&amp;")}?ep=${movie.hex}`,
  //     lastModified: movie.createdAt,
  //     changeFrequency: "weekly",
  //     priority: 0.7,
  //   }));
  //   const detailLinks = result.map((movie) => ({
  //     url: `${domain}/details/${movie.name.split(" ").join("-").replace(/&/g, "&amp;")}?ep=${movie.hex}`,
  //     lastModified: movie.createdAt,
  //     changeFrequency: "weekly",
  //     priority: 0.8,
  //   }));

  //   const blogLinks = result.map((movie) => ({
  //     url: `${domain}/blog/${movie.name.split(" ").join("-").replace(/&/g, "&amp;")}?ep=${movie.hex}`,
  //     lastModified: movie.createdAt,
  //     changeFrequency: "weekly",
  //     priority: 0.7,
  //   }));

  return [
    {
      url: `${domain}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${domain}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${domain}/tools/biodata-generator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }
    // ...watchLinks,
    // ...detailLinks,
    // ...blogLinks
  ];

}
