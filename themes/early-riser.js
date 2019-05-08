const black = '#424c57'
const lightBlack = '#6e7f91'
const nearWhite = '#eef0f2'
const white = '#f7fafc'
const red = '#e20a00'
const yellow = '#ffa90a'
const green = '#13b130'
const cyan = '#36b9ac'
const blue = '#0261dc'
const purple = '#8626dc'


module.exports = {
name: 'early-riser',
displayName: 'Early Riser',
theme: {
  background: {
    default: white,
    success: green,
    notice: cyan,
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
    default: 'rgba(2, 97, 220, 1)',
    xxs: 'rgba(2, 97, 220, 0.05)',
    xs: 'rgba(2, 97, 220, 0.1)',
    sm: 'rgba(2, 97, 220, 0.2)',
    md: 'rgba(2, 97, 220, 0.4)',
    lg: 'rgba(2, 97, 220, 0.6)',
    xl: 'rgba(2, 97, 220, 0.8)'
  },
  styles: {
    sidebar: {
      background: {
        default: '#e7ebef'
      }
    },
    dialog: {
      background: {
        default: nearWhite
      }
    },
    paneHeader: {
      background: {
        success: green,
        notice: cyan,
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
