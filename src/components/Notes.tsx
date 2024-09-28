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

export default function Notes() {
  //list from supabase
  const notes = useNoteStore((state) => state.notes);

  const handleClick = (nodeId: string) => {

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
                  <Button onClick={() => handleClick("")}>Delete</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
