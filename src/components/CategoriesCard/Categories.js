import React, {useState} from "react";
import styles from "./Categories.module.css";

const getImagePath = (imageName) => require(`../../assets/img/static/${imageName}`);

const CategoriesCardComponent = ({ categories }) => {
    return (
        <div className={styles.categoryCard}>
            <div className={styles.image}>
                <img
                    src={getImagePath(categories.image)}
                    alt={categories.title}
                />
            </div>
            <div className={styles.title}>{categories.title}</div>
        </div>
    );
};

const Categories = () => {
    const data = [
        { key: "1", title: "Laptop", image: "laptop.svg" },
        { key: "2", title: "Điện thoại", image: "smartphone.svg" },
        { key: "3", title: "Máy tính bảng", image: "tablet.svg" },
        { key: "4", title: "Phụ kiện", image: "accessory.svg" },
    ];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "nowrap",
                gap: "20px",
                padding: "20px",
            }}
        >
            {data.map((category) => (
                <CategoriesCardComponent key={category.key} categories={category} />
            ))}
        </div>
    );
};

export default Categories;
