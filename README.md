<div align="center">
  <h1>Envoy</h1>
  <img align="center" src="./assets/envoy.png" height="86" width="86"/>
  <p>Be updated. Be productive.</p>
</div>

## Contents

- [Development](#development)
- [License](#license)

## Development

```bash
# Clone Envoy repository.
git clone https://bitbucket.org/thegrapefruitcollective/envoy.git

# Checkout to dev branch.
git checkout dev

# Go to Envoy directory.
cd envoy

# Install package dependencies.
yarn
```

### Setup environment variables

```bash
# Create the .env file.
touch .env

# Edit the .env file as follows.
apiKey=<apiKey>
authDomain=<authDomain>
databaseURL=<databaseURL>
projectId=<projectId>
storageBucket=<storageBucket>
messagingSenderId=<messagingSenderId>
appId=<appId>
```

### Run Envoy in Android emulator

```bash
# Run Envoy.
yarn run android

# Run Enoy with cleared build cache.
yarn run android --clear
```

### Build APK.

```bash
# Build Envoy APK with production profile.
eas build --profile production --platform android
```

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
