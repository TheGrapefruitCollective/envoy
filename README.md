<div align="center">
  <h1>Envoy</h1>
  <img align="center" src="./assets/envoy.png" height="86" width="86"/>
  <p>Be updated. Be productive.</p>
</div>

## Contents

- [Development](#development)
- [License](#license)

## Development

### Clone Envoy repository.

`git clone https://bitbucket.org/thegrapefruitcollective/envoy.git`

### Go to Envoy directory

`cd envoy`

### Install package dependencies

`yarn`

### Run Envoy in Android emulator

`yarn run android`

### Build APK.

`eas build --profile production --platform android`

#### Profile:

- development
- preview
- production

#### Platform:

- android
- ios

Learn more at [EAS Build - Expo Documentation](https://docs.expo.dev/build/introduction)

## License

Envoy is provided under the [MIT license](./LICENSE).

Envoy uses NotoSans font, licensed under the [SIL Open Font License, Version 1.1](./LICENSE-font).
