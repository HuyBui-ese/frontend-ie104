import React from "react";
import {ShoppingFilled, StarFilled} from "@ant-design/icons";
import styles from "./ProductCard.module.css"; // Import CSS Module

const ProductCard = ({ product, onAddToCart, onBuyNow }) => {
    const hasDiscount =
        product.product_price_sale > 0 &&
        product.product_price_sale < product.product_price;

    const discountPercent = hasDiscount
        ? Math.round(
            ((product.product_price - product.product_price_sale) / product.product_price) * 100
        )
        : null;

    return (
        <div className={styles.productCard}>
            <div className={styles.productCardTop}>
                {hasDiscount ? (
                    <div className={styles.discountBadge}>
                        giảm {discountPercent}%
                    </div>
                ) : (
                    <div></div>
                )}
                <div className={styles.productRating}>
                    {`${product.product_rate}`}&nbsp;<StarFilled />
                </div>
            </div>

            <div className={styles.productInfo}>
                <div className={styles.productImage}>
                    <img
                        src={product.product_image || "placeholder.jpg"}
                        alt={product.product_name}
                    />
                </div>
                <h3 className={styles.productName}>{product.product_name}</h3>
                <div className={styles.productTag}>
                    <span>RAM 16GB</span>
                    <span>SSD 512GB</span>
                </div>
                <div className={styles.stockStatus}>
                    {product.status === 1 && (
                        <span className={styles.inStock}>Còn hàng</span>
                    )}
                    {product.status === 0 && (
                        <span className={styles.outStock}>Hết hàng</span>
                    )}
                </div>
                <div className={styles.productPrice}>
                    {hasDiscount ? (
                        <>
                            <span className={styles.originalPrice}>
                                {product.product_price.toLocaleString()}₫
                            </span>
                            <span className={styles.salePrice}>
                                {product.product_price_sale.toLocaleString()}₫
                            </span>
                        </>
                    ) : (
                        <>
                            <span></span>
                            <span className={styles.salePrice}>
                                {product.product_price.toLocaleString()}₫
                            </span>
                        </>
                    )}
                </div>

                {/* Nút hành động */}
                <div className={styles.buttonContainer}>
                    <button
                        className={styles.buyNowButton}
                        onClick={() => onBuyNow(product)}
                    >
                        Mua ngay
                    </button>
                    <button
                        className={styles.addToCartButton}
                        onClick={() => onAddToCart(product)}
                    >
                        <ShoppingFilled />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
