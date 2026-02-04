import { Text, View } from 'react-native';

interface PageCardProps {
  icon: string;
  message: string;
}

export function PageCard({ icon, message }: PageCardProps) {
  return (
    <View className="flex-1 bg-gray-50 items-center justify-center px-6">
      <View className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <Text className="text-6xl text-center mb-4">{icon}</Text>
        <Text className="text-lg text-gray-600 text-center">{message}</Text>
      </View>
    </View>
  );
}
