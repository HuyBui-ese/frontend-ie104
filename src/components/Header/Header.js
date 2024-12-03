import React from 'react';
import logo from '../../assets/Logo.svg';
// Style
import styles from './Header.module.css';

// Components
import CustomButton from './Button/Button';
import SearchBar from "./SearchBar/SearchBar";
import CustomMenu from "./Menu/Menu";
// Lib
import {Col, Row} from "antd";
import {EnvironmentFilled, ShoppingFilled, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        // Header
        <header className={styles.header}>
            {/* Top Header */}
            <div className={styles.headerTop}>
                {/* Content */}
                <div className="container">
                    <Row justify={"space-between"} align="middle" wrap={false}>
                        {/* HeaderTop Left: Logo, Location Button*/}
                        <Row justify={"start"} style={{ padding: '2px 0' }} gutter={8} wrap={false}>
                            <Col>
                                {/* Logo */}
                                <Link to={"/"}>
                                    <div className={styles.logo}>
                                        <img src={logo} alt="Logo TNTECH"/>
                                    </div>
                                </Link>
                            </Col>
                            <Col>
                                {/* Location Button */}
                                <CustomButton
                                    icon={<EnvironmentFilled/>}
                                    subTitle={"Địa chỉ tại"}
                                    title={"Hồ Chí Minh"}
                                />
                            </Col>
                        </Row>
                        {/* Header Center: Search Bar */}
                        <Row justify={"center"} align="middle" style={{ flex: 1, margin: '0 14px' }}>
                            <Col style={{ display: 'flex', justifyContent: "center" , alignItems: 'center', width: '100%'}}>
                                <SearchBar />
                            </Col>
                        </Row>
                        {/* Header Right: Cart Button, Account/Login Button */}
                        <Row justify={"end"} gutter={8} style={{ padding: '2px 0' }} wrap={false}>
                            <Col>
                                <CustomButton
                                    icon={<ShoppingFilled />}
                                    notify={"0"}
                                    title={"Giỏ hàng"}
                                />
                            </Col>
                            <Col>
                                <CustomButton
                                    icon={<UserOutlined />}
                                    subTitle={"Chào,"}
                                    title={"Linh, Ngọc"}
                                    isDrop={true}
                                />
                            </Col>
                        </Row>
                    </Row>
                </div>
            </div>
            {/* Menu Header  */}
            <div className={styles.headerMenu}>
                {/* Content */}
                <div className="container">
                    <Row justify={"space-between"} align={"middle"} style={{ padding: '2px 0' }} gutter={8} wrap={false}>
                        {/* Custom Menu */}
                        <Col><CustomMenu/></Col>
                        {/* Thêm nút vô cũng được */}
                        <Col><div>Cơ hội việc làm tại TNTECH</div></Col>
                    </Row>
                </div>
            </div>
        </header>
    );
}
export default HeaderComponent;