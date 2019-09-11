
import React from 'react';

const RentalImg = ({
    style = {},
    color = '#fff',
    width = '100%',
    className = '',
    height = '100%',
    viewBox='0 0 70 100',
}) =>
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M0 100v-3h10v-9H0V9h10v3H1.53v8H60v3H1.53v7.223H60v2.965H1.53v7.945H60V44H1.53v8l58.47.523V55H1.53v8.07H60V66H1.53v8H60v2.688H40V80h-6v-3.312H1.53V85H10V0h4c5.389-.07 20.733-.06 46 0v12l-46-.047V85h7V0h2v85h7l.305-85H34v97h6V0h3.781L44 85h7V0h2v85h7V0h3.941v97H74v3H0z"
            fill={color}
        />
    </svg>;

export default RentalImg;