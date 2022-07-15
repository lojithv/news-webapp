import { Container } from "@mui/system";
import NewsCard from "../newsCard/NewsCard";
import { getNewses } from "../../services/news";
import { useEffect, useState } from "react";
import styles from './homeNews.module.css'

function HomeNews() {

  const [allNews, setAllaNews]=useState([]);

  const newsResponse = async () =>{
    const newsRes = await getNewses()
    console.log(newsRes.data)
    setAllaNews(newsRes.data);
  }

  useEffect(() => {
   newsResponse()
  },[]);



  return (
    <>
      <Container className={styles.gridContainer}>
        {allNews.map((news,i)=>{
        return <div className={styles.gridItem} key={news.newsId}><NewsCard news={news} /></div>
        })}

      </Container>
    </>
  );
}

export default HomeNews;
