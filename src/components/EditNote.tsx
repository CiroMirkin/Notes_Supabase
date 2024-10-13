import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Note, useNoteStore } from "@/store";
import { KeyboardEvent, useState } from "react";
import { changeNoteText } from "@/supabase/changeNoteText";
import { useToast } from "./ui/use-toast";

export function EditNote({ note }: { note: Note}) {
    const [ noteText, setNoteText ] = useState(note.note)
    const editTextOfThisNote = useNoteStore((state) => state.editTextOfThisNote)
    const { toast } = useToast();

    const handleSubmit = () => {
        try {
            changeNoteText(note.id, noteText).then(() => {
              toast({
                title: "Note successfully edited.",
              })
              editTextOfThisNote(note.id, noteText)
            })
        } catch(e) {
            console.error("Fail to edit the note.")
        }
    }

    function handleKeyDown(e: KeyboardEvent<HTMLInputElement>): void {
		if (e.key === 'Enter') handleSubmit()
	}

    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button>Edit</Button>
            </DialogTrigger>
            <DialogContent
                className="sm:max-w-[425px]"
                style={{ backgroundColor: "#fff" }}
            >
                <DialogHeader>
                    <DialogTitle>Edit Note</DialogTitle>
                    <DialogDescription>
                        {
                            "What do you really have to do? Think about it."
                        }
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">Note</Label>
                        <Input
                            id="edit_note"
                            placeholder="Note..."
                            className="col-span-3"
                            value={noteText}
                            onChange={(e) => setNoteText(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSubmit}>
                        Save change
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}