import React from 'react';

const MaintenanceImg = ({
    style = {},
    color = '#fff',
    colorSecondary = '#fff',
    width = '100%',
    className = '',
    height = '100%',
    viewBox = '0 0 100 100',
}) =>
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M54 21v-7c18.563 2.629 30.134 15.521 32 32h-7c-2.202-13.583-12.836-23.746-25-25zm0-14V0c23.531.563 46.641 24.703 46 45.558h-7C90.656 27 75.281 8.813 54 7zm0 25.558V28c9.596 2.359 15.606 8.222 18 17.558H54v-13z"
            fill={colorSecondary} />
        <path d="M0 42.286C16.647 40.98 19.697 34.268 9 20L20 9c6.422 7.859 17.969 8.156 18-2 .039-.984.019-6.627 0-7h12v25c-10.582 1.632-17.642 6.358-21.3 14.058C25.423 46.323 24.937 55.031 30 63c5.396 6.616 11.133 10.125 20 11 8.219-.312 15.156-3.594 20-11 2.078-3.297 3.432-7.61 4-13h26v12c-3.602-.02-7.281-.125-9 0-7.878 1.45-9.061 10.368 0 17L79 91c-8.594-11.875-23.031-6.437-21 9H42c1.688-14.437-10.437-21.625-22-9L9 79c12.5-8.5 7-22-9-21V42.286z"
            fill={color} />
    </svg>;

export default MaintenanceImg;