"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GrAdd } from "react-icons/gr";
import { useNoteStore } from "@/store";
import { useToast } from "@/components/ui/use-toast";
import { submitNote } from "@/supabase/submitNote";

export function NewNote() {
  const { toast } = useToast();
  const note = useNoteStore((state) => state.note);
  const setNote = useNoteStore((state) => state.setNote);
  const setNotes = useNoteStore((state) => state.setNotes);

  const closeDialog = () => {
    document.getElementById("close-btn")?.click();
  };
  
  const createNote = () => {
    try {
      submitNote(note).then(() => {
        setNotes(note, crypto.randomUUID())
        toast({
          title: "Successfully create the note",
        })
        closeDialog()
      })
    } catch(e) {
      toast({
        variant: "destructive",
        title: "Fail to create the note",
        description: "Error: "+ e,
      })
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="w-full sm:w-72">
          <GrAdd />
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[425px]"
        style={{ backgroundColor: "#fff" }}
      >
        <DialogHeader>
          <DialogTitle>Create Note</DialogTitle>
          <DialogDescription>
            {
              "What do you have to do? Think about it."
            }
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Note
            </Label>
            <Input
              id="note"
              placeholder="Note..."
              className="col-span-3"
              value={note.note}
              onChange={(e) => setNote({ ...note, note: e.target.value })}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={createNote}>
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
