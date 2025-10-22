import Image from 'next/image';

const ProductCard = ({ product }) => {
    return (
        <article className="card product-card">
            <div className="product-card__image">
                <Image src={product.image} alt={product.name} width={120} height={120} />
            </div>
            <div className="product-card__body">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <ul>
                    {product.specifications.map((spec) => (
                        <li key={spec}>{spec}</li>
                    ))}
                </ul>
                <div className="product-card__price">{product.price}</div>
            </div>
        </article>
    );
};

export default ProductCard;