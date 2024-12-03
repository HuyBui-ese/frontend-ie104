import React from 'react';
import { Layout, Menu, Input, Row, Col } from 'antd';
import { Link, useLocation } from 'react-router-dom'; // import useLocation
import { SearchOutlined, PhoneOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Header } = Layout;

const HeaderComponent = () => {
  const location = useLocation();
  const selectedKey = location.pathname === '/' ? 'home' : location.pathname.slice(1);

  return (
    <Header style={{ backgroundColor: '#001529', padding: '0 20px' }}>
      <Row align="middle" justify="start" gutter={16}>
        <Col>
          <Link to="/">
            <div
              className="header-logo"
              style={{
                color: 'white',
                fontSize: '24px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              TN TECH
            </div>
          </Link>
        </Col>
        <Col>
          <Input
            placeholder="Search for products"
            prefix={<SearchOutlined />}
            style={{ width: 300 }}
          />
        </Col>
        <Col style={{ marginLeft: '20px', flexGrow: 1, overflow: 'hidden' }}>
          <Menu
            mode="horizontal"
            theme="dark"
            selectedKeys={[selectedKey]}
            style={{
              backgroundColor: '#001529',
              width: '100%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            <Menu.Item key="home"><Link to="/">Trang chủ</Link></Menu.Item>
            <Menu.Item key="about"><Link to="/about">Giới thiệu</Link></Menu.Item>
            <Menu.Item key="products"><Link to="/products">Sản phẩm</Link></Menu.Item>
            <Menu.Item key="news"><Link to="/news">Tin mới nhất</Link></Menu.Item>
            <Menu.Item key="careers"><Link to="/careers">Tuyển dụng</Link></Menu.Item>
            <Menu.Item key="contact"><Link to="/contact">Liên hệ</Link></Menu.Item>
          </Menu>
        </Col>
        <Col style={{ marginLeft: 'auto' }}>
          <div className="header-icons" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <PhoneOutlined style={{ fontSize: '24px', color: 'white' }} />
            <UserOutlined style={{ fontSize: '24px', color: 'white' }} />
            <ShoppingCartOutlined style={{ fontSize: '24px', color: 'white' }} />
          </div>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderComponent;
