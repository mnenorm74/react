import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';

/**
 1. Разбери ручные переборы массивов в верстке.
 Для постов используй map без циклов, для авторов цикл for без map.

 2. Посмотри ошибки в Chrome DevTools: React должен требовать наличия атрибутов key.
 Добавь в post поле id и присвой каждому полю уникальный строковый идентификатор.
 Используй id в качестве значения key в основном тэге поста и основном тэге автора.
 */

const posts = [
    {
        id: '1',
        author: 'Парень не промах',
        time: '2 часа назад',
        message: 'Попробую с удовольствием ;)'
    },
    {
        id: '2',
        author: 'Милая девушка',
        time: '3 часа назад',
        message: 'Можно использовать для выпекания чизкейков :)'
    },
    {
        id: '3',
        author: 'Скупец',
        time: 'вчера',
        message: 'Цену-то загнули!'
    }
];

function renderPost(post) {
    return (
        <div key={post.id} className="post">
            <div className="postHeader">
                <span className="postAuthor">{post.author}</span>
                <br/>
                <span className="postTime">{post.time}</span>
            </div>
            <div className="postMessage">{post.message}</div>
        </div>
    );
}

function renderAuthors(posts) {
    let authors = [];
    for (const post of posts) {
        authors.push(<span key={post.id}>{post.author}</span>);
    }
    return (
        <div className="authors">
            {authors}
        </div>
    );
}

ReactDom.render(
    <div className="page">
        <div className="posts">
            {posts.map((item) => renderPost(item))}
        </div>
        {renderAuthors(posts)}
    </div>,
    document.getElementById('app')
);
