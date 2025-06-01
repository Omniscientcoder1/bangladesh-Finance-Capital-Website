import React from "react";
import PageContent from "../components/PageContent";
import NewsCard from "../components/NewsCard";
import news from "../data/news";

const News = () => {
  return (
    <PageContent>
      <h1>News & Updates</h1>
      {news.map((item) => (
        <NewsCard key={item.id} {...item} />
      ))}
    </PageContent>
  );
};

export default News;