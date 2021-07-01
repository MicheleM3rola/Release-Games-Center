// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

const axiosConfig = {
  baseURL: "https://api.igdb.com/v4/",
  headers: {
    Accept: "application/json",
    "Client-ID": process.env.CLIENT_ID,
    Authorization: process.env.AUTHORIZATION,
  },
  method: "POST",
  data: `fields name,cover.url,slug,summary,platforms.name,release_dates.human ;
  where themes != (42) & category != (1,2,5,6,7) & first_release_date >${
    (Date.now() / 1000) | 0
  };limit 500;
  sort first_release_date asc;`,
};

export default async (req, res) => {
  const response = await axios(`games`, axiosConfig);

  res.json(response.data);
};
