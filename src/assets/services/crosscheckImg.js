
import React from 'react';

const CrosscheckImg = ({
    style = {},
    backgroundColor = '#D1483B',
    textColor = '#FFF',
    rectangleColor = '#FFF',
    arrowColor = '#0088CE',
    rectangleBorderColor = '#F59320',
    width = '100%',
    className = '',
    height = '100%',
    viewBox = '0 0 90 80',
}) =>
    <svg
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path fill={backgroundColor} d="M.011 0h91v80h-91V0z" />
        <path fill={textColor} fillRule="evenodd" d="M42.565 10.177V7.273h.876v.354q.084-.414.858-.414.408 0 .618.105.21.105.282.327.072-.228.279-.33.207-.102.627-.102.378 0 .582.087.204.087.285.267.081.18.081.48v2.13h-.876v-2.01q0-.192-.024-.273-.024-.081-.105-.111-.081-.03-.279-.03-.246 0-.351.03-.105.03-.138.111-.033.081-.033.273v2.01h-.876v-2.01q0-.192-.024-.273-.024-.081-.105-.111-.081-.03-.279-.03-.246 0-.351.03-.105.03-.138.111-.033.081-.033.273v2.01h-.876zm6.42-.486q.264 0 .378-.018.084-.012.117-.036.033-.024.057-.078.024-.042.024-.126v-.564h-.6q-.204 0-.288.027-.084.027-.114.108t-.03.285q0 .198.03.276.03.078.117.102.087.024.309.024zm-26.538 0q.258 0 .39-.036t.18-.126q.048-.09.048-.27V8.185q0-.198-.042-.285-.042-.087-.168-.117-.126-.03-.414-.03-.246 0-.375.042t-.174.132q-.045.09-.045.258v1.074q0 .18.045.27.045.09.171.126.126.036.384.036zm3.342 0q.264 0 .378-.018.084-.012.117-.036.033-.024.057-.078.024-.042.024-.126v-.564h-.6q-.204 0-.288.027-.084.027-.114.108t-.03.285q0 .198.03.276.03.078.117.102.087.024.309.024zm2.22.486V7.273h.834v.51q0-.138.114-.27t.291-.216q.177-.084.351-.084h.312v.726h-.3q-.372 0-.549.114-.177.114-.177.378v1.746h-.876zm3.546-.486q.264 0 .378-.018.084-.012.117-.036.033-.024.057-.078.024-.042.024-.126v-.564h-.6q-.204 0-.288.027-.084.027-.114.108t-.03.285q0 .198.03.276.03.078.117.102.087.024.309.024zm3.558 0q.294 0 .432-.03t.186-.111q.048-.081.048-.243v-1.17q0-.15-.051-.231-.051-.081-.18-.117-.129-.036-.387-.036-.276 0-.396.033t-.159.114q-.039.081-.039.267v1.11q0 .168.039.255t.153.123q.114.036.354.036zm2.334-2.76v-.708h.876v.708h-.876zm0 3.246V7.273h.876v2.904h-.876zm2.223.368q0 .166.16.261.159.095.446.095.433 0 .678-.118.245-.119.245-.325 0-.166-.145-.229t-.448-.063h-.417q-.221 0-.37.104t-.149.275zm.293-2.399q0 .24.109.38.11.139.334.139.226 0 .332-.139.105-.14.105-.38 0-.533-.437-.533-.443 0-.443.533zm8.68 2.091q-.408 0-.609-.075t-.282-.27q-.081-.195-.081-.585 0-.348.087-.546.087-.198.282-.285.195-.087.537-.087h.984v-.198q0-.186-.051-.276-.051-.09-.186-.126-.135-.036-.405-.036-.372 0-1.02.072v-.552q.474-.06 1.11-.06.558 0 .861.084.303.084.435.288.132.204.132.594v1.998h-.858v-.264q-.102.174-.276.246-.174.078-.66.078zm-27.672 1.188V7.273h.828v.288q.078-.192.306-.27.228-.078.678-.078.378 0 .609.06.231.06.351.192.114.132.156.291.042.159.042.435v.954q0 .432-.126.666-.126.234-.387.33t-.711.096q-.432 0-.624-.072t-.246-.282v1.542h-.876zm4.476-1.188q-.408 0-.609-.075t-.282-.27q-.081-.195-.081-.585 0-.348.087-.546.087-.198.282-.285.195-.087.537-.087h.984v-.198q0-.186-.051-.276-.051-.09-.186-.126-.135-.036-.405-.036-.372 0-1.02.072v-.552q.474-.06 1.11-.06.558 0 .861.084.303.084.435.288.132.204.132.594v1.998h-.858v-.264q-.102.174-.276.246-.174.078-.66.078zm5.766 0q-.408 0-.609-.075t-.282-.27q-.081-.195-.081-.585 0-.348.087-.546.087-.198.282-.285.195-.087.537-.087h.984v-.198q0-.186-.051-.276-.051-.09-.186-.126-.135-.036-.405-.036-.372 0-1.02.072v-.552q.474-.06 1.11-.06.558 0 .861.084.303.084.435.288.132.204.132.594v1.998h-.858v-.264q-.102.174-.276.246-.174.078-.66.078zm3.678 0q-.516 0-.762-.075t-.342-.285q-.096-.21-.096-.654V8.089q0-.48.273-.678.273-.198.885-.198.288 0 .453.033.165.033.267.114.102.081.21.237v-1.62h.876v4.2h-.846v-.33q-.108.174-.195.243-.087.069-.243.105-.162.042-.48.042zm6.026-3.056h1.029v.409l-.462.118q.127.198.127.443 0 .475-.331.74t-.919.265l-.145-.008-.119-.013q-.124.095-.124.211 0 .174.443.174h.501q.485 0 .74.208.254.208.254.612 0 .517-.431.801-.431.285-1.238.285-.617 0-.942-.215-.326-.215-.326-.602 0-.267.166-.446t.488-.256q-.124-.052-.216-.172-.093-.12-.093-.255 0-.169.098-.281.097-.112.282-.22-.232-.1-.368-.322-.136-.221-.136-.522 0-.482.314-.746.314-.263.897-.263.124 0 .294.022.17.022.217.033zm-8.541 14.632q.977 0 1.418-.046.442-.046.861-.253.418-.184.592-.61.175-.425.175-1.184v-4.508q0-1.035-.256-1.507-.255-.471-.871-.62-.617-.15-1.919-.15-1.303 0-1.919.15-.616.149-.872.62-.256.472-.256 1.507v4.508q0 .759.174 1.184.175.426.594.61.418.207.86.253.442.046 1.419.046zm9.861 1.357q-1.791 0-3.86-.276v-1.587q2.721.437 3.907.437 1.488 0 2.139-.288.651-.287.651-1.069V19.26q0-.713-.488-1.012-.488-.299-1.581-.299h-1.279q-1.745 0-2.663-.713-.919-.713-.919-2.001V14.2q0-2.622 5.023-2.622.372 0 3.419.184v1.495q-2.07-.322-3.512-.322-1.651 0-2.255.322-.605.322-.605 1.081v.943q0 1.127 2.07 1.127h1.302q3.558 0 3.558 2.622v.966q0 1.725-1.209 2.449-1.21.725-3.698.725zm9.21 0q-1.79 0-3.86-.276v-1.587q2.721.437 3.907.437 1.488 0 2.139-.288.652-.287.652-1.069V19.26q0-.713-.489-1.012-.488-.299-1.581-.299h-1.279q-1.744 0-2.664-.713-.918-.713-.918-2.001V14.2q0-2.622 5.024-2.622.372 0 3.418.184v1.495q-2.07-.322-3.511-.322-1.652 0-2.256.322-.605.322-.605 1.081v.943q0 1.127 2.07 1.127h1.302q3.558 0 3.558 2.622v.966q0 1.725-1.209 2.449-1.209.725-3.698.725zM21.008 22.94V11.808h1.977v1.817q0-.529.465-1 .465-.472 1.186-.759.721-.288 1.418-.288h1.024v1.771h-1.163q-1.489 0-2.151.38-.663.379-.663 1.368v7.843h-2.093zm11.368.23q-1.489 0-2.233-.104-.744-.103-1.488-.448-.768-.345-1.116-1.115-.349-.771-.349-2.082v-3.864q0-1.035.256-1.817.255-.782.674-1.219.349-.391 1.059-.61.708-.218 1.453-.287.837-.046 1.744-.046 1.209 0 1.825.057.617.058 1.314.242.721.207 1.117.621.395.414.674 1.196.256.805.256 1.863v3.864q0 1.955-.907 2.852-.372.368-1.07.575-.698.207-1.442.276-.884.046-1.767.046zm-16.692-.021q-6.349 0-6.349-4.23v-7.403q0-4.471 6.349-4.471 2.163 0 4.139.457v1.73q-2.232-.576-4.093-.576-.906 0-1.581.108-.674.108-1.302.372-1.349.601-1.349 2.356v7.306q0 2.692 4.325 2.692 1.861 0 4.093-.577v1.779q-1.976.457-4.232.457z" />
        <path fill={rectangleColor} d="M10.012 28h68.866v41.451H10.012V28z" />
        <path fill={arrowColor} d="M10.012 69.451h68.866V28l3.033-2.437V72H7.626V25.563h74.285L78.878 28H10.012v41.451z" />
        <path fill={rectangleBorderColor} d="M32.829 40.326l7.56 9.877c.337.44.828.404 1.096-.08 15.165-27.342 24.328-38.165 26.387-40.12 1.61-1.53 4.718-2.567 6.935-2.316l3.086.35c2.217.251 2.833 1.811 1.373 3.481-14.512 16.607-25.361 37.826-30.167 47.197-3.762 7.332-10.915 7.983-15.967 1.453C28.389 54.035 18.545 43.602 20.077 41c.814-1.852 4.58-2.656 6.107-3.021 2.263-.54 5.24.511 6.645 2.347z" />
    </svg>;

export default CrosscheckImg;