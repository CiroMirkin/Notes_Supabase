"use client";
import { Note, ResultNote, useNoteStore } from "@/store";
import { useRef } from "react";

export default function InitNote({ notes }: { notes: ResultNote[] }) {
  const initRef = useRef<boolean>();

  const prepareNote = () => {
    const result: {
      [key: string]: Note;
    } = {};

    notes.forEach((noteInNotes) => {
      // Usa `note` como clave y crea un objeto con la propiedad note, el resto del objeto esta en rest
      const { note, id, ...rest } = noteInNotes;
      result[note] = { note, id };
    });

    return result;
  };

  if (!initRef.current) {
    useNoteStore.setState({
      notes: prepareNote(),
    });
    initRef.current = true;
  }
  return null;
}
