import React from 'react';
import NewsItem from './news-list-item';

const NewsList = (props) => {
   
    const news = props.news.map((item, index) => (
        <NewsItem 
            item={item} 
            key={index}
            />
    ))

    return(
        <>
           {news}
           {props.children}
        </>
    )
}

export default NewsList;