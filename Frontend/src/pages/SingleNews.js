import { Toolbar, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { getSingleNews } from "../services/news";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

export default function SingleNews() {
  const [newsDetails, setNewsDetails] = React.useState(null);

  useEffect(() => {
    const url = window.location.href;
    const splitedUrl = url.split("/");
    const newsid = splitedUrl[splitedUrl.length - 1];
    //   console.log(url);
    //   console.log(splitedUrl[splitedUrl.length-1]);
    getNewsDetails(newsid);
  }, []);

  const getNewsDetails = async (newsId) => {
    const news = await getSingleNews(newsId);
    // console.log(news)
    setNewsDetails(news.data[0]);
  };

  if (!newsDetails) {
    return <div>Loading...</div>;
  }

  const handelHedline = () => {
    console.log("edit headline");
  };

  const handelNews = () => {
    console.log("edit ");
  };

  return (
    <div style={{ padding: "20px" }}>
      <Toolbar>
        <div style={{ fontSize: "30px", fontWeight: "bold" }}>
          {newsDetails.headline}
        </div>
        <IconButton onClick={handelHedline}>
          <EditIcon fontSize={"small"} style={{ color: "lightblue" }} />
        </IconButton>
      </Toolbar>

      <div style={{ fontSize: "15px" }}>{newsDetails.category}</div>
      <div style={{ fontSize: "18px", marginTop: "10px" }}>
        {newsDetails.news}
      </div>
      <Toolbar>
        <Typography style={{ color: "lightblue" }}>Edit News</Typography>{" "}
        <IconButton onClick={handelNews}>
          <EditIcon fontSize={"small"} style={{ color: "lightblue" }} />
        </IconButton>
      </Toolbar>
    </div>
  );
}
