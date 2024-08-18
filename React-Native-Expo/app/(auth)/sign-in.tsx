import { Text, StatusBar } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignIn() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center text-lg font-bold">
      <Text className="text-green-500 font-bold">Sign In</Text>
      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  );
}