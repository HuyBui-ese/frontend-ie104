import React from "react";

const Loading = ({ size, color = "#0066cc" }) => {
    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const textStyle = {
        fontSize: `${size}rem`, // Kích thước chữ dựa trên props `size`
        fontWeight: "bold",
        color: color,
        display: "flex",
        alignItems: "center",
    };

    const dotStyle = (delay) => ({
        display: "inline-block",
        fontSize: `${size}rem`, // Kích thước dấu chấm bằng với chữ
        color: color,
        animation: `wave-horizontal 1s infinite ease-in-out`,
        animationDelay: delay,
        marginRight: `${size / 5}rem`, // Khoảng cách giữa các dấu chấm (tỷ lệ theo size)
    });

    return (
        <div style={containerStyle}>
            <p style={textStyle}>
                Đang tải &nbsp;
                <span>
          <span style={dotStyle("0s")}>.</span>
          <span style={dotStyle("0.2s")}>.</span>
          <span style={dotStyle("0.4s")}>.</span>
        </span>
            </p>
            <style>
                {`
          @keyframes wave-horizontal {
            0%, 60%, 100% {
              transform: translateY(0); /* Vị trí gốc */
            }
            30% {
              transform: translateY(-${size / 3}rem); /* Đi lên, tỷ lệ theo size */
            }
          }
        `}
            </style>
        </div>
    );
};

export default Loading;
