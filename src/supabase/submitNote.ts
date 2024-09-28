import { Note } from "@/store";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { v4 as uuidv4 } from 'uuid';

export async function submitNote(note: Note)  {
    const supabase = createClientComponentClient();

    const { error } = await supabase
        .from("notes")
        .upsert({ ...note, id: uuidv4() })
        .select("*")
        .single()

    if (error) {
        throw new Error("error")
    }
    return true
} 