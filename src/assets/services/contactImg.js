import React from 'react';

const ContactImg = ({
    style = {},
    color = '#fff',
    width = '100%',
    className = '',
    height = '100%',
    viewBox = '0 0 100 80',
}) =>
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M5.155 74.461l30.449-29.446 4.437 5.047c5.212 5.928 13.877 6.108 19.338.4l5.1-5.331 29.335 29.33H5.155zM6.186 5h87.628L53.129 45.041a5.141 5.141 0 0 1-7.246-.042L6.186 5zM0 10.073l29.897 29.424L0 68.92V10.073zm100 0L70.103 39.497 100 68.92V10.073z"
            fill={color} />
    </svg>;

export default ContactImg;