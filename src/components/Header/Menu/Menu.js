import React, { useState, useEffect } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';  // Thêm useLocation
import { MenuOutlined } from '@ant-design/icons';
// Style
import styles from "./Menu.module.css";

// Định nghĩa danh sách các route (mục menu)
const routes = [
    { key: '1', path: '/', name: 'Trang chủ' },
    { key: '2', path: '/products', name: 'Sản phẩm' },
    { key: '3', path: '/news', name: 'Tin tức' },
    { key: '4', path: '/about', name: 'Về chúng tôi' },
    { key: '5', path: '/contact', name: 'Liên hệ' },
];

const CustomMenu = () => {
    const [visible, setVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false); // Kiểm tra xem có phải là màn hình nhỏ
    const location = useLocation(); // Hook useLocation để lấy thông tin URL hiện tại

    // Cập nhật trạng thái khi thay đổi kích thước màn hình
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Điều chỉnh kích thước phù hợp với màn hình nhỏ
        };

        handleResize(); // Gọi ngay khi mount
        window.addEventListener('resize', handleResize); // Lắng nghe sự kiện thay đổi kích thước cửa sổ

        return () => {
            window.removeEventListener('resize', handleResize); // Dọn dẹp sự kiện khi component unmount
        };
    }, []);

    // Mở menu drawer
    const openDrawer = () => setVisible(true);
    // Đóng menu drawer
    const closeDrawer = () => setVisible(false);

    // Lấy key từ đường dẫn (pathname) hiện tại để xác định mục menu được chọn
    const selectedKey = location.pathname === '/' ? '1' : routes.find(route => route.path === location.pathname)?.key;

    return (
        <>
            {/* Menu cho desktop */}
            {!isMobile ? (
                <Menu theme="dark" mode="horizontal" selectedKeys={[selectedKey]} className={styles.menu}>
                    {routes.map(route => (
                        <Menu.Item key={route.key}>
                            <Link to={route.path}>{route.name}</Link>
                        </Menu.Item>
                    ))}
                </Menu>
            ) : (
                // Menu khi là mobile (hamburger menu)
                <>
                    <Button
                        type="primary"
                        icon={<MenuOutlined style={{ fontSize: '1.6rem'}}/>}
                        onClick={openDrawer}
                        style={{
                            width: '4rem',
                            height: '2.2rem',
                            color: 'white' ,
                            padding: 0,
                            backgroundColor: 'transparent' }}
                    />
                    {/* Drawer cho mobile */}
                    <Drawer
                        title={"Chưa biết để gì"}
                        placement="right"
                        closable={false}
                        onClose={closeDrawer}
                        visible={visible}
                        width={250}
                    >
                        <Menu
                            theme="dark"
                            mode="vertical"
                            onClick={closeDrawer}
                            selectedKeys={[selectedKey]} // Sử dụng selectedKey cho menu vertical
                            style={{ width: '100%' }}
                            className={styles.menu}
                        >
                            {routes.map(route => (
                                <Menu.Item key={route.key} className={styles.menuItem}>
                                    <Link to={route.path}>{route.name}</Link>
                                </Menu.Item>
                            ))}
                        </Menu>
                    </Drawer>
                </>
            )}
        </>
    );
};

export default CustomMenu;
