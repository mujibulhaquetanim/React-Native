import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Text, View } from 'react-native-reanimated/lib/typescript/Animated';

export default function HomeScreen() {
  return (
    <view className='flex-1 text-lg font-bold'>
      <Text>Hello World</Text>
      <HelloWave />
    </view>
  );
}
