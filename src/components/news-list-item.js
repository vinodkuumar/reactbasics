import React from 'react';
import {css} from 'glamor';

// let news_item = css({
//     padding: '20px',
//     boxSizing: 'border-box',
//     borderBottom: '1px solid gray',
//     ':hover': {
//         color: 'red'
//     }
// })

// let item_back = css({
//     background: 'gray'
// })

const NewsItem = ({item}) => {
    return(
            <div className="news_item">
               <h3>{item.title}</h3>
               <div>{item.feed}</div>
            </div>
       
    )
}

export default NewsItem;