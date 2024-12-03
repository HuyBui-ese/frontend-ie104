import axios from 'axios';

// // Hàm gọi API để lấy danh sách sản phẩm
// export const fetchProducts = async () => {
//     try {
//         const response = await axios.get('https://fakestoreapi.com/products');
//         return response.data; // Trả về dữ liệu từ API
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         return [];
//     }
// };

// Api
export const fetchProducts = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        return {
            data: response.data,  // Danh sách sản phẩm json
        };
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
