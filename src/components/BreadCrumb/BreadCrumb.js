import React from 'react';
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';

// Style
import styles from './BreadCrumb.module.css';

// Định nghĩa các route và tên cho Breadcrumb
const breadcrumbNameMap = {
    '/': 'Trang chủ',
    '/news': 'Tin tức',
    '/products': 'Sản phẩm',
    '/about': 'Về chúng tôi',
    '/contact': 'Liên hệ',
};

const BreadcrumbComponent = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x); // Lấy từng cấp của đường dẫn

    return (
        <div className="container">
            <Breadcrumb separator=">" className={styles.breadcrumb}>
                {/* Luôn hiển thị Trang chủ */}
                <Breadcrumb.Item>
                    <Link to="/" className={styles.breadcrumbItem}>Trang chủ</Link>
                </Breadcrumb.Item>
                {pathnames.map((_, index) => {
                    const url = `/${pathnames.slice(0, index + 1).join('/')}`;
                    return (
                        <Breadcrumb.Item key={url}>
                            {breadcrumbNameMap[url] ? (
                                <Link to={url} className={styles.breadcrumbItem}>{breadcrumbNameMap[url]}</Link>
                            ) : (
                                url
                            )}
                        </Breadcrumb.Item>
                    );
                })}
            </Breadcrumb>
        </div>
    );
};

export default BreadcrumbComponent;
