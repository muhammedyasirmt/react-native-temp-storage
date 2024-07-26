import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  setItem(key: string, value: string): Promise<string>;
  getItem(key: string): Promise<string>;
  deleteItem(key: string): Promise<string>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('TempStorage');
