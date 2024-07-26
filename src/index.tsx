import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-temp-storage' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const TempStorageModule = isTurboModuleEnabled
  ? require('./NativeTempStorage').default
  : NativeModules.TempStorage;

const TempStorage = TempStorageModule
  ? TempStorageModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function setItem(key: string, value: string): Promise<string> {
  return TempStorage.setItem(key, value);
}

export function getItem(key: string): Promise<string> {
  return TempStorage.getItem(key);
}

export function deleteItem(key: string): Promise<string> {
  return TempStorage.deleteItem(key);
}
