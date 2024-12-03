import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import mockProducts from "../services/test/mockProducts";

const useFetchProducts = () => {
    const [products, setProducts] = useState([]); // Lưu danh sách sản phẩm
    const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
    const [error, setError] = useState(null); // Trạng thái lỗi (nếu có)

    useEffect(() => {
        // const loadProducts = async () => {
        //     try {
        //         setLoading(true); // Bắt đầu tải dữ liệu
        //         const { data } = await fetchProducts(); // Gọi api lấy danh sách sản phẩm
        //         setProducts(data); // Cập nhật danh sách vào state
        //     } catch (err) {
        //         setError(err); // Cập nhật thông báo lỗi (nếu có) vào state
        //     } finally {
        //         setLoading(false); // Dừng trạng thái tải dữ liệu
        //     }
        // };
        //
        // loadProducts(); // Gọi hàm khi hook được sử dụng

        // Test với mockdata
        const test = () => {
            setLoading(true)
            setProducts(mockProducts);
            setLoading(false);
        }
        test();
    }, []); // Chỉ chạy một lần khi component mount

    return { products, loading, error }; // Trả về các state (list products, loading, error)
};

export default useFetchProducts;