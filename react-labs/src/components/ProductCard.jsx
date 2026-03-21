function ProductCard({ name, price, emoji, Instock = True }) {
    console.log(name, price, emoji, Instock);
    return (
        <div>
            <span>{emoji}</span>
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{Instock ? "In Stock" : "Out of Stock"}</p>
        </div>
    );
}

export default ProductCard;