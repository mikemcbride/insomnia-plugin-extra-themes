const black = '#424c57'
const nearWhite = '#eff2f5'
const white = '#f7fafc'
const red = '#ef4444'
const yellow = '#f59e0b'
const green = '#10b981'
const blue = '#2563eb'
const purple = '#7c3aed'


module.exports = {
    name: 'early-riser',
    displayName: 'Early Riser',
    theme: {
        background: {
            default: white,
            success: green,
            notice: yellow,
            warning: yellow,
            danger: red,
            surprise: purple,
            info: blue
        },
        foreground: {
            default: black,
            success: white,
            notice: white,
            warning: white,
            danger: white,
            surprise: white,
            info: white
        },
        highlight: {
            default: black,
            xxs: 'rgba(66, 76, 87, 0.05)',
            xs: 'rgba(66, 76, 87, 0.1)',
            sm: 'rgba(66, 76, 87, 0.2)',
            md: 'rgba(66, 76, 87, 0.4)',
            lg: 'rgba(66, 76, 87, 0.6)',
            xl: 'rgba(66, 76, 87, 0.8)'
        },
        styles: {
            sidebar: {
                background: {
                    default: nearWhite
                }
            },
            dialog: {
                background: {
                    default: white
                }
            },
            paneHeader: {
                background: {
                    success: green,
                    notice: yellow,
                    warning: yellow,
                    danger: red,
                    surprise: purple,
                    info: blue
                }
            },
            transparentOverlay: {
                background: {
                    default: 'rgba(195, 200, 205, 0.6)'
                }
            }
        }
    }
}
