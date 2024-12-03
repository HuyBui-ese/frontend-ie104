import React from 'react';
import Search from "antd/es/input/Search";
import {ConfigProvider} from "antd";
import {Link} from "react-router-dom";

const SearchBarComponent = () => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Input: {
                        colorBorder: 'transparent',
                    },
                },
            }}
        >
            <Search
                style={{ width: '100%', maxWidth: '1120px' }}  // Đảm bảo Search có chiều rộng 100%
                placeholder="Bạn muốn tìm gì?"
                enterButton
                // onSearch
            />
        </ConfigProvider>

    );
}
export default SearchBarComponent;