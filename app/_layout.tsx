import { QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import "../global.css";
import { queryClient } from '../src/lib/queryClient';

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'AWS Kit' }} />
        <Stack.Screen name="dynamodb/index" options={{ title: 'DynamoDB Manager' }} />
        <Stack.Screen name="s3/index" options={{ title: 'S3 Storage' }} />
      </Stack>
      <StatusBar style="dark" />
    </ QueryClientProvider>
  );
}
