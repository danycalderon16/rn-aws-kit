import { ServiceCard } from '@/src/components/ServiceCard';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      <View className="flex-1 px-4 pt-6">
        <Text className="text-gray-700 text-lg font-semibold mb-4 px-2">Services</Text>

        <ServiceCard
          href="/dynamodb"
          icon="📊"
          title="DynamoDB"
          description="NoSQL database service"
          bgColor="bg-orange-100"
          marginBottom
        />

        <ServiceCard
          href="/s3"
          icon="💾"
          title="S3"
          description="Object storage service"
          bgColor="bg-green-100"
        />
      </View>
    </View>
  );
}
