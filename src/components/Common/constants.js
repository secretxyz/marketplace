// GLOBAL CONSTANTS
// -----------------------------------

export const APP_COLORS = {
    'primary': '#5d9cec',
    'success': '#27c24c',
    'info': '#23b7e5',
    'warning': '#ff902b',
    'danger': '#f05050',
    'inverse': '#131e26',
    'green': '#37bc9b',
    'pink': '#f532e5',
    'purple': '#7266ba',
    'dark': '#3a3f51',
    'yellow': '#fad732',
    'gray-darker': '#232735',
    'gray-dark': '#3a3f51',
    'gray': '#dde6e9',
    'gray-light': '#e4eaec',
    'gray-lighter': '#edf1f2',
    'accent': '#3772ff',
};

export const APP_MEDIAQUERY = {
    'desktopLG': 1200,
    'desktop': 992,
    'tablet': 768,
    'mobile': 480
};

export const BITHOMP_URL = "https://bithomp.com/explorer/";

export const SECRET_BROKER = process.env.NODE_ENV === 'development' ? "rBGCuupZo3npQYK54kcUaejQpNe3mTmKnC" : "rseC4tmmcEPyT2Vav52hNMptNcgxHVGwM2";
export const ONXRP_URL = "https://nft.onxrp.com/nft";
export const ONXRP_BROKER = "rpZqTPC8GvrSvEfFsUuHkmPCg29GdQuXhC";
export const XRPCAFE_URL = "https://xrp.cafe/nft";
export const XRPCAFE_BROKER = "rpx9JThQ2y37FaGeeJP7PXDUVEXY3PHZSC";

export const A_Z = 1;
export const Z_A = 2;
export const LIKES_HIGH_TO_LOW = 3;
export const LIKES_LOW_TO_HIGH = 4;
export const RAFFLES_HIGH_TO_LOW = 5;
export const RAFFLES_LOW_TO_HIGH = 6;
export const RAFFLE_PRICE_HIGH_TO_LOW = 7;
export const RAFFLE_PRICE_LOW_TO_HIGH = 8;
export const TICKET_PRICE_HIGH_TO_LOW = 9;
export const TICKET_PRICE_LOW_TO_HIGH = 10;
export const CREATED_SOON = 11;