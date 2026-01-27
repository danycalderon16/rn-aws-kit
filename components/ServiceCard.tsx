import { ValidRoute } from '@/types';
import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

interface ServiceCardProps {
  href: ValidRoute;
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  marginBottom?: boolean;
}

export function ServiceCard({
  href,
  icon,
  title,
  description,
  bgColor,
  marginBottom = false,
}: ServiceCardProps) {
  return (
    <Link href={href} asChild>
      <Pressable className={marginBottom ? 'mb-4 active:opacity-80' : 'active:opacity-80'}>
        <View className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <View className={`w-12 h-12 ${bgColor} rounded-full items-center justify-center mb-3`}>
            <Text className="text-2xl">{icon}</Text>
          </View>
          <Text className="text-xl font-bold text-gray-900">{title}</Text>
          <Text className="text-gray-600 text-sm mt-2">{description}</Text>
        </View>
      </Pressable>
    </Link>
  );
}
