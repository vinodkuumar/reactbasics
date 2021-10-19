import React from 'react';
import {css} from 'glamor';

let news_item = css({
    padding: '20px',
    boxSizing: 'border-box',
    borderBottom: '1px solid gray',
    ':hover': {
        color: 'red'
    }
})

let item_back = css({
    background: 'gray'
})

const NewsItem = ({item}) => {
    return(
            <div {...news_item} {...item_back}>
               <h3>{item.title}</h3>
               <div>{item.feed}</div>
            </div>
       
    )
}

export default NewsItem;