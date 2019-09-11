
import React from 'react';

const ProFormaImg = ({
    style = {},
    color = '#fff',
    width = '100%',
    className = '',
    height = '100%',
    viewBox = '0 0 100 115',
}) =>
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M46 9Q44.609.844 46 0c1.391-.844 30.797 12.063 31 17 .203 4.938-29.398 20.055-31 18q-1.602-2.055 0-12C18.562 26.367 2.953 56.742 23 80.137L12 91C-12.234 57.375 2.32 13.922 46 9zM54.331 105.961q1.391 8.156 0 9c-1.391.843-30.797-12.063-31-17-.203-4.938 29.398-20.055 31-18q1.602 2.054 0 12c27.437-3.368 43.047-33.743 23-57.138l11-10.862c24.234 33.625 9.68 77.078-34 82z"
            fill={color}
        />
    </svg>;

export default ProFormaImg;