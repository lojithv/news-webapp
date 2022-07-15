import { Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import NewsCard from "../componets/newsCard/NewsCard";
import { getNewsCat } from "../services/news";
import { Container } from "@mui/system";
import styles from "../componets/homeNews/homeNews.module.css";

export default function CategoryNews() {
  const [categoryNewses, setCategoryNewses] = React.useState([]);

  // useEffect(() => {
  //   return () => {
  //     const url = window.location.href;
  //     const splitedUrl = url.split("/");
  //     const categoryName = splitedUrl[splitedUrl.length - 1];
  //     console.log(url);
  //     //   console.log(splitedUrl[splitedUrl.length-1]);
  //     setCategory(categoryName);
  //   };
  // }, []);

  // console.log("fasedfaffs");
  useEffect(() => {
    return () => {
      const url = window.location.href;
      const splitedUrl = url.split("/");
      const category = splitedUrl[splitedUrl.length - 1];
      getCategoryNews(category);
    };
  }, []);

  const getCategoryNews = async (category) => {
    const response = await getNewsCat(category);
    setCategoryNewses(response.data);
    console.log(response.data, "res.data");
  };

  return (
    <>
      <Container className={styles.gridContainer}>
        {categoryNewses.map((news, i) => {
          return (
            <div className={styles.gridItem} key={news.newsId}>
              <NewsCard news={news} />
            </div>
          );
        })}
      </Container>
    </>
  );
}
