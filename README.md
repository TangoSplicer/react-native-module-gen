# react-native-module-gen

> Generate **Turbo Native Modules** and **Fabric Components** for React Native 0.79.5+ and 0.81.1+ with one command.

No more boilerplate. No more missing files. Just generate and go.

## Install & Use

```bash
npx react-native-module-gen generate Camera --method takePhoto,preview --constant

npx react-native-module-gen generate-component MapView \
  --props "region:object,zoomEnabled:boolean" \
  --events "onRegionChange,onPress"

## Features
TurboModule (JSI) generation
Fabric Component support
TypeScript, Swift, Kotlin
Codegen spec (.js)
iOS + Android
Constants & methods
Props & events
Podspec & Gradle

## Commands
##generate <name>

Create a Turbo Native Module.

rn-module-gen generate MyModule \
  --method echo,fetch \
  --constant

## generate-component <name>

rn-module-gen generate-component VideoView \
  --props "src:string,paused:boolean" \
  --events "onLoad,onError"

## OUTPUT

modules/MyModule/
├── src/
│   ├── NativeMyModule.js
│   └── MyModule.ts
├── ios/
│   ├── MyModule.swift
│   └── NativeMyModule.h
└── android/
    ├── MyModuleModule.kt
    └── MyModulePackage.kt

#### Requirements
React Native 0.79.5+
Node.js 16+
Hermes enabled (recommended)
🤝 Contributing
PRs welcome! See CONTRIBUTING.md .

📄 License
MIT

















 # react-native-module-gen
# react-native-module-gen
# react-native-module-gen
