import React from 'react';
import {Carousel, Col, ConfigProvider, Row, Tabs} from "antd";
import Banner from '../../components/Banner/Banner';
import CategoriesCard from '../../components/CategoriesCard/Categories';
import ProductCard from '../../components/ProductCard/ProductCard';
import Loading from '../../components/StateComponents/Loading';
import useFetchProducts from "../../hooks/useFetchProducts";

// Style
import styles from './Home.module.css';
import mockNews from "../../services/test/mockNews";
import {Link} from "react-router-dom";

const Home = () => {
    const { products, loading, error } = useFetchProducts();

    // Hàm lấy danh sách sản phẩm theo loại, giới hạn mỗi loại 10 sản phẩm
    const getProductsByType = (type) => {
        return products
            .filter((product) => product.product_type.toLowerCase() === type.toLowerCase())
            .slice(0, 12);
    };

    // Data cho tabs
    const tabData = [
        { label: "Laptop", key: "Laptop" },
        { label: "Điện thoại", key: "Điện thoại" },
        { label: "Máy tính bảng", key: "Máy tính bảng" },
        { label: "Phụ kiện", key: "Phụ kiện" },
        { label: "Linh kiện", key: "Linh kiện" },
    ];

    // Render component cho tabs content
    const renderTabContent = (type) => {
        const filteredProducts = getProductsByType(type);

        if (filteredProducts.length === 0) {
            return <p>Không có sản phẩm nào.</p>;
        }

        // Thêm các Col trống để đảm bảo đủ 6 Col trên mỗi hàng
        const totalCols = 6;
        const placeholderCols = Array.from({ length: totalCols - filteredProducts.length }, (_, index) => (
            <Col span={4} key={`placeholder-${index}`}>
                <div style={{ height: '100%', backgroundColor: 'transparent', borderRadius: 8 }}></div>
            </Col>
        ));

        return (
            <Row gutter={[16, 16]}>
                {filteredProducts.map((product) => (
                    <Col span={4} key={product.product_id}>
                        <ProductCard product={product} />
                    </Col>
                ))}
                {placeholderCols}
            </Row>
        );
    };

    // Hàm render tin tức mới
    const NewsList = ({ news }) => {
        return (
            <div className={styles.newsContainer}>
                {/* Main News */}
                <Link to={"/"} className={styles.mainNews}>
                    <>
                        <div className={styles.mainNewsImage}>
                            <span className={styles.badge}>Tin khuyến mãi</span>
                            <img src="https://via.placeholder.com/500" alt={news[0]?.title}/>
                        </div>
                        <div className={styles.mainNewsContent}>
                            <h2>{news[0]?.title}</h2>
                            <p>{news[0]?.description}</p>
                            <div className={styles.metaInfo}>
                                <span>{news[0]?.author}</span> |{" "}
                                <span>{new Date(news[0]?.date).toLocaleString()}</span>
                            </div>
                        </div>
                    </>
                </Link>

                {/* Secondary News */}
                <div className={styles.secondaryNews}>
                    {news.slice(1).map((item) => (
                        <Link to={"/"}>
                            <div key={item.id} className={styles.newsItem}>
                                <div className={styles.newsImage}>
                                    <img src="https://via.placeholder.com/150" alt={item.title}/>
                                </div>
                                <div className={styles.newsContent}>
                                    <h3>{item.title}</h3>
                                    <div className={styles.metaInfo}>
                                        <span>{item.author}</span> |{" "}
                                        <span>{new Date(item.date).toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
    };

    if (loading) return <Loading/>;
    if (error) return <p>Error loading products: {error.message}</p>;

    return (
        <div className="container">
            {/* Banner */}
            <div className={styles.pageContentContainer}>
                <Banner/>
            </div>

            {/* Categories */}
            <div className={styles.pageContentContainer}>
                <CategoriesCard/>
            </div>


            {/* On Sale */}
            <div className={styles.pageContentContainer}>
                <h2>Siêu ưu đãi</h2>
                <ConfigProvider
                    theme={{
                        components: {
                            Tabs: {
                                cardGutter: 20,
                                cardPadding: "10px 20%",
                                itemSelectedColor: "#ff9900",
                                itemHoverColor: "rgba(255,153,0,0.6)",
                                titleFontSize: "1rem"
                            },
                        },
                        token: {
                            motionDurationSlow: "0.1s"
                        },
                    }}
                >
                    <Tabs
                        defaultActiveKey="Laptop"
                        type="card"
                        items={tabData.map(({label, key}) => ({
                            label,
                            key,
                            children: renderTabContent(label),
                        }))}
                    />
                </ConfigProvider>
            </div>

            {/* Categories */}
            <div className={styles.pageContentContainer}>
                <div></div>
            </div>

            {/* Hot News */}
            <div className={styles.pageContentContainer}>
                <h2>Tin tức nổi bật</h2>
                <div className={styles.newsCardContent}>
                    <NewsList news={mockNews} />
                </div>
            </div>
        </div>
    );
};

export default Home;
