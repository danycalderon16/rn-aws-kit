import { useState } from 'react';
import { FlatList, Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function DynamoDBScreen() {
   const [itemValue, setItemValue] = useState('');
   const [items, setItems] = useState<string[]>([]);

   const handleCreateItem = () => {
      if (itemValue) {
         setItems([...items, itemValue]);
         setItemValue('');
      } else {
         alert('Please enter an item');
      }
   };

   return (
      <View className="flex-1 bg-gray-50 px-4 py-6">
      <View className="flex-1 bg-white rounded-lg p-4 mb-4 shadow-sm">
         <SafeAreaProvider>
            <SafeAreaView className="flex-1">
               <View className=" flex-row gap-2">
                  <TextInput
                     className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
                     placeholder="Enter item"
                     value={itemValue}
                     onChangeText={setItemValue}
                  />
                  <Pressable
                     className="bg-green-800 rounded-lg px-4 justify-center active:bg-green-900"
                     onPress={handleCreateItem}
                  >
                     <Text className="text-white font-semibold">Add</Text>
                  </Pressable>
               </View>

               <Text className="text-lg font-semibold text-gray-700 mb-3">Items:</Text>
               <FlatList
                  data={items}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => (
                     <View className="bg-white rounded-lg p-3 mb-2 border border-gray-200 flex-row">
                        <Text className="text-gray-800">{item}</Text>
                     </View>
                  )}
                  scrollEnabled={false}
               />
            </SafeAreaView>
         </SafeAreaProvider>
      </View>
      </View>
   );
}
