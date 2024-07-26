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
