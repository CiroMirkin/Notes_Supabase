import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export async function deleteNote(noteId: string)  {
    const supabase = createClientComponentClient();
    const { error } = await supabase
        .from("notes")
        .delete()
        .eq('id', noteId)

    if (error) {
        throw new Error("Fail to delete the note.")
    }
    return true
} 