"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNoteStore } from "@/store";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { deleteNote } from "@/supabase/deleteNote";

export default function Notes() {
  //list from supabase
  const notes = useNoteStore((state) => state.notes);
  const deleteThisNote = useNoteStore((state) => state.deleteThisNote)
  const { toast } = useToast();

  const handleClick = (nodeId: string, noteKey: string) => {
    try {
      deleteNote(nodeId).then(() => {
        toast({
          title: "Note successfully deleted.",
        })
        deleteThisNote(noteKey)
      })
    } catch(e) {
      console.error("Fail to delete the note.")
    }
  }

  return (
    <div>
      <Table style={{ backgroundColor: "#f3f4f6" }}>
        <TableCaption className="text-black">A list of notes</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Note</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.keys(notes).map((key) => {
            const note = notes[key];
            return (
              <TableRow
                key={key}
              >
                <TableCell className="flex justify-between">
                  <span>{note.note}</span>
                  <Button onClick={() => handleClick(note.id, key)}>Delete</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
