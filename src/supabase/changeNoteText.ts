import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export async function changeNoteText(noteId: string, newText: string)  {
    const supabase = createClientComponentClient();
    const { error } = await supabase
        .from("notes")
        .update({ note: newText })
        .eq('id', noteId)

    if (error) {
        throw new Error("Fail to edit the note.")
    }
    return true
} 