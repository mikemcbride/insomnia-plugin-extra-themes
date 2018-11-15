  module.exports = {
  name: 'electron-highlighter',
  displayName: 'Electron Highlighter',
  theme: {
    background: {
      default: '#212836',
      success: '#6af699',
      notice: '#fffa9e',
      warning: '#ffbf7a',
      danger: '#ff5874',
      surprise: '#c792ea',
      info: '#82aaff'
    },
    foreground: {
      default: '#a8b5d1',
      success: '#fff',
      notice: '#fff',
      warning: '#fff',
      danger: '#fff',
      surprise: '#fff',
      info: '#fff'
    },
    // comment
    highlight: {
      default: 'rgba(100, 114, 136, 1)',
      xxs: 'rgba(100, 114, 136, 0.05)',
      xs: 'rgba(100, 114, 136, 0.1)',
      sm: 'rgba(100, 114, 136, 0.2)',
      md: 'rgba(100, 114, 136, 0.4)',
      lg: 'rgba(100, 114, 136, 0.6)',
      xl: 'rgba(100, 114, 136, 0.8)'
    },
    styles: {
      sidebar: {
        background: {
          default: '#1b212c'
        }
      },
      dialog: {
        background: {
          default: '#1e2431'
        }
      },
      paneHeader: {
        background: {
          success: '#6af699',
          notice: '#fffa9e',
          warning: '#ffbf7a',
          danger: '#ff5874',
          surprise: '#c792ea',
          info: '#82aaff'
        }
      },
      transparentOverlay: {
        background: {
          default: 'rgba(7, 8, 11, 0.5)'
        }
      }
    }
  }
}
