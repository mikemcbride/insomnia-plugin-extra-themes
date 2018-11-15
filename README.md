# Extra Themes for Insomnia REST Client

This is a plugin for [Insomnia REST client](https://insomnia.rest) that adds additional themes.

## Installation

1. Navigate to `Preferences > Plugins`
1. In the "Install plugin" field, enter `insomnia-plugin-extra-themes`
1. Click "Install plugin"
1. Navigate to `Preferences > Themes` and you should see new themes available.

## Contributing

Right now I've just got one theme, Electron Highlighter, based off my syntax theme for [Atom](https://github.com/mikemcbride/electron-highlighter-syntax) and [Hyper](https://github.com/mikemcbride/hyper-electron-highlighter). I wanted to make this plugin flexible so that others could contribute their own themes more easily, and also have a frame of reference for how to do it.

If you would like to add your own theme, you can use the `themes/electron-highlighter.js` file as a template and customize the colors.

To do that, I'd suggest you fork and clone this repo, and move the cloned folder (or symlink it) to your local Insomnia plugins folder. You can find that by opening `Preferences > Plugins` then clicking "Show Plugins Folder" at the bottom.

Once you've got it working, feel free to cut a PR here! Screenshots are always appreciated in PRs.
