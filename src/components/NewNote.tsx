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
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export function NewNote() {
  const { toast } = useToast();
  const note = useNoteStore((state) => state.note);
  const setNote = useNoteStore((state) => state.setNote);
  const setNotes = useNoteStore((state) => state.setNotes);
  const supabase = createClientComponentClient();

  const closeDialog = () => {
    document.getElementById("close-btn")?.click();
  };
  
  const submitNote = async () => {
    try {
      // const date = log.date as Date;
      const { error } = await supabase
        .from("notes")
        .upsert({ ...note })
        .select("*")
        .single();
      if (!error) {
        setNotes(note, crypto.randomUUID());
        toast({
          title: "Successfully create the note",
        });
        closeDialog();
      } else {
        toast({
          variant: "destructive",
          title: "Fail to create the note",
          description: "Error: "+ error.message,
        });
      }
      //call to supabase
    } catch (e) {
      toast({
        variant: "destructive",
        title: "Fail to create the note",
        description: e as string,
      });
    }
  };

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
          <Button type="submit" onClick={submitNote}>
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
