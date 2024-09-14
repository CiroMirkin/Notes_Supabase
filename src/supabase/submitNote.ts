import { Note } from "@/store";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export async function submitNote(note: Note)  {
    const supabase = createClientComponentClient();

    const { error } = await supabase
        .from("notes")
        .upsert({ ...note })
        .select("*")
        .single()

    if (error) {
        throw new Error("error")
    }
    return true
} 