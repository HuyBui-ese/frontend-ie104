import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer = () => {
    return (
        <AntFooter style={{ textAlign: 'center', backgroundColor: '#f0f2f5', padding: '20px' }}>
            ©2024 TN Tech - Thiên Đường Mua Sắm. All Rights Reserved.
        </AntFooter>
    );
};

export default Footer;
