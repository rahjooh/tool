+11-0
const ArticleCard = ({ article }) => {
    return (
        <article className="card article-card">
            <h3>{article.title}</h3>
            <p className="article-card__excerpt">{article.excerpt}</p>
            <p className="article-card__content">{article.content}</p>
        </article>
    );
};

export default ArticleCard;