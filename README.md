# react-native-temp-storage

Simple package to store data in native side for temporary. So it will be available after hot-reload, bundle restart, but not app restart

## Installation

```sh
npm install react-native-temp-storage
```
or
```sh
yarn add react-native-temp-storage
```

#### iOS

```sh
npx pod-install
```
## Usage


```js
import { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as TempStorage from 'react-native-temp-storage';

export default function App() {
  const [result, setResult] = useState<string | undefined>();

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Button
        title="set Color Red"
        onPress={() => TempStorage.setItem('color', 'Red')}
      />
      <Button
        title="set Taste sweet"
        onPress={() => TempStorage.setItem('taste', 'Sweet')}
      />
      <Button
        title="set Color Blue"
        onPress={() => TempStorage.setItem('color', 'Blue')}
      />
      <Button
        title="delete Color"
        onPress={() => TempStorage.deleteItem('color')}
      />
      <Button
        title="delete Taste"
        onPress={() => TempStorage.deleteItem('taste')}
      />
      <Button
        title="get Color"
        onPress={() => TempStorage.getItem('color').then(setResult)}
      />
      <Button
        title="get Taste"
        onPress={() => TempStorage.getItem('taste').then(setResult)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
