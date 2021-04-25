#  PlantManager

[![Author](https://img.shields.io/badge/author-Felipe%20Lima-red)](https://github.com/felipelhol)

<br />

<p align="center">
<img src="/src/assets/plantmanager-preview.png" />
![](/assets/splash.png?raw=true)
</p>

# :pushpin: Table of Contents

This project was developed on the Next Level Week event by [Rocketseat](https://rocketseat.com.br/) &nbsp;🚀💜

- [Requirements](#computer-requirements)
- [Installation](#round_pushpin-installation)
- [Getting Started](#runner-getting-started)
- [FAQ](#sos-faq)
- [License](#closed_book-license)

## Getting started

# :computer: Requirements

\*\*You need to install [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/) first and [Expo](https://expo.io/)

# :round_pushpin: Installation

Then in order to clone the project via HTTPS, run this command:

```
git clone https://github.com/felipelhol/plantmanager.git
```

SSH URLs provide access to a Git repository via SSH, a secure protocol. If you have a SSH key registered in your Github account, clone the project using this command:

```
git clone git@github.com:felipelhol/plantmanager.git
```

**Install dependencies**

```
expo start
expo install expo-notifications
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
expo install expo-app-loading
expo install expo-font @expo-google-fonts/jost
expo install @expo/vector-icons
expo install @react-native-community/datetimepicker
expo install @react-native-async-storage/async-storage
expo install lottie-react-native
expo install react-native-svg

yarn add date-fns
yarn add @react-navigation/native
yarn add react-native-iphone-x-helper
yarn add @react-navigation/stack
yarn add axios
```

# :runner: Getting Started

**Manually setup**

Run the following command in order to start the application in a development environment:

**Follow the steps below**

### Backend

```bash

# Install the dependencies
$ yarn

# Use fake api json
$ yarn global add json-server

# Starting from the project root folder, go to server folder
$ json-server ./src/services/server.json

# Well done, project is started!
```

### Mobile

_Obs.: Before to continue, be sure to have the API running_

```bash
# Starting from the project root folder, go to mobile folder
$ cd plantmanager

# Install the dependencies
$ yarn

# Be sure the file json-server ./src/services/server.json have the IP to your fake API

# Start the expo service and scan the QR code with Expo Client
$ yarn start
```

# :sos: Faq

**Question:** What are the tecnologies used in this project?

**Answer:** The tecnologies used in this project are [React Native](https://reactnative.dev/) + [TypeScript](https://www.typescriptlang.org/) + [React Leaflet](https://react-leaflet.js.org/) + [Expo](https://expo.io/) + [React Navigation](https://reactnavigation.org/) + [React Icons](https://react-icons.netlify.com/#/) + [EditorConfig](https://editorconfig.org/) + Others

##

# :exclamation: Issues

Feel free to **file a new issue** with a respective title and description on the the [plantmanager](https://github.com/felipelhol/.../issues) repository. If you already found a solution to your problem, **i would love to review your pull request**!

# :closed_book: License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Released in 2021.
Made with love by [Felipe Lima](https://github.com/felipelhol) 👏🚀
[See my linkedin](https://www.linkedin.com/in/felipe-holanda-198224128/)
