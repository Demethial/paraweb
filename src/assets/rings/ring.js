const RingSvg = ({
    color = '#4CAF50',
    width = '100%',
    height = '100%',
    style = 'isolation:isolate',
    className = '',
    viewBox = "0 0 890 890",
    metalic = false,
}) =>
    `<svg
        xmlns="http://www.w3.org/2000/svg" 
        width="${width}"
        style="${style}"
        height="${height}"
        viewBox="${viewBox}"
        class="${className}"
    >
    <defs>
        <clipPath id="a">
            <path d="M0 0h890v890H0z"/>
        </clipPath>
    </defs>

    <g clip-path="url(#a)">
        <defs>
            <filter id="b" width="400%" height="400%" x="-200%" y="-200%" color-interpolation-filters="sRGB" filterUnits="objectBoundingBox">
                <feGaussianBlur xmlns="http://www.w3.org/2000/svg" in="SourceGraphic" stdDeviation="17"/>
                <feOffset xmlns="http://www.w3.org/2000/svg" dx="-27" dy="40" result="pf_100_offsetBlur"/>
                <feFlood xmlns="http://www.w3.org/2000/svg" flood-color="#000" flood-opacity=".9"/>
                <feComposite xmlns="http://www.w3.org/2000/svg" in2="pf_100_offsetBlur" operator="in" result="pf_100_dropShadow"/>
                <feBlend xmlns="http://www.w3.org/2000/svg" in="SourceGraphic" in2="pf_100_dropShadow"/>
            </filter>
        </defs>

        <g filter="url(#b)">
            <clipPath id="c">
                <path fill="#FFF" d="M49 0h853v860H49V0z"/>
            </clipPath>
            
            <g clip-path="url(#c)">
                <linearGradient 
                    id="d" 
                    ${!metalic ?
        `x1=".085" x2="1.81" 
                        y1=".819" y2="-.878" `
        :
        `x1=".106" x2=".882" 
                        y1=".797" y2=".127" `
    }
                    gradientTransform="matrix(814.8 0 0 810.857 71.2 5)" 
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="2.174%" stop-color="${color}"/>
                    <stop offset="100%" stop-color="#fff"/>
                </linearGradient>

                <path fill="url(#d)" d="M479.2 5q116.4.687 209.4 52 93.181 51.75 145.2 143.102Q886 292.578 886 409.864q0 117.288-52.2 209.764-52.2 92.476-145.2 144.352-93 51.877-209.4 51.877T269.8 763.98q-93-51.876-145.8-144.352-52.8-92.476-52.8-209.764 0-117.286 52.8-209.762T269.8 56.313Q362.8 5 479.2 5zm0 39Q375.188 46.313 294 89q-81.625 46.625-129 127-53 85.6-53 193.864Q113.5 519 169 606.509 220.2 686.018 300 730q79.6 44 179.2 44 101.133-2.333 180.8-50 76.667-44.667 126-124 59.5-92 57-191-2.333-110.665-53-192-40-73.5-126-126-73-42.667-184.8-47z"/>
            </g>
        </g>
    </g>
</svg>`;

export default RingSvg;