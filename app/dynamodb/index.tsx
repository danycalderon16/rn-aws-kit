import { useState } from 'react';
import { Alert, FlatList, Platform, Pressable, Text, TextInput, ToastAndroid, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useCreateNote, useDeleteNote, useNotes } from './queries';

export default function DynamoDBScreen() {

   const { data: notes, isLoading, isError } = useNotes();
   const createNoteMutation = useCreateNote();
   const deleteNoteMutation = useDeleteNote();

   const [noteText, setNoteText] = useState('');

   const handleNotePress = (item: any) => {
      if (Platform.OS === 'android') {
         ToastAndroid.show(`Clicked: ${item.id}`, ToastAndroid.SHORT);
      } else {
         alert(`Clicked: ${item.note}`);
      }
   };

   const handleNoteLongPress = (item: any) => {
      Alert.alert("Delete item", `Are you sure to delete this item "${item.id}"?`,
         [
            {
               text: "Cancel",
            },
            {
               text: "Delete",
               onPress: () => {handleDeleteNote(item.id)}
            }
         ]
      )
   };

   const handleCreateNote = async () => {
      if (noteText.trim()) {
         await createNoteMutation.mutateAsync(noteText.trim());
         setNoteText('');
      } else {
         alert('Please enter a note');
      }
   };

   const handleDeleteNote = (id: string) => {
      deleteNoteMutation.mutate(id);
   };

   return (
      <View className="flex-1 bg-gray-50 px-4 py-6">
         <View className="flex-1 bg-white rounded-lg p-4 mb-4 shadow-sm">
            <SafeAreaProvider>
               <SafeAreaView className="flex-1">
                  <View className=" flex-row gap-2">
                     <TextInput
                        className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
                        placeholder="Enter note"
                        value={noteText}
                        onChangeText={setNoteText}
                     />
                     <Pressable
                        className="bg-green-800 rounded-lg px-4 justify-center active:bg-green-900"
                        onPress={handleCreateNote}
                     >
                        <Text className="text-white font-semibold">Add</Text>
                     </Pressable>
                  </View>
                  <Text className="text-lg font-semibold text-gray-700 mb-3">Notes:</Text>
                  { isLoading && (
                     <Text className="text-gray-500 mt-4">Loading notes...</Text>
                  )}
                  <FlatList
                     data={notes || []}
                     keyExtractor={(item, index) => index.toString()}
                     renderItem={({ item }) => (
                        <Pressable
                           className="bg-white rounded-lg p-3 mb-2 border border-gray-200 flex-row active:bg-gray-100"
                           // onPress={() => handleNotePress(item)}
                           onPress={()=> handleNoteLongPress(item)}
                        >
                           <Text className="text-gray-800">{item.note}</Text>
                        </Pressable>
                     )}
                     scrollEnabled={false}
                  />
               </SafeAreaView>
            </SafeAreaProvider>
         </View>
      </View>
   );
}
