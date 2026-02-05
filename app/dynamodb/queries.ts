import { apiFetch, createNote } from "@/src/lib/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const API = "https://3iluyfgnzj.execute-api.us-east-1.amazonaws.com/prod"

export function useNotes(){
    return useQuery({
        queryKey: ['notes'],
        queryFn: () => apiFetch(API, "notes"),
    })
}

export function useCreateNote() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (note: string) => createNote(API, "notes", note),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['notes']})
        },
        onError: (error) => {
            console.error('Error creating note:', error);
        }
    })
}   

export function useDeleteNote() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => apiFetch(API, `notes/${id}`, {method: 'DELETE'}),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['notes']})
        },
        onError: (error) => {
            console.error('Error deleting note:', error);
            // Even if server returns error, the note might be deleted, so refresh
            queryClient.invalidateQueries({queryKey: ['notes']})
        }
    })
}