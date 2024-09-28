import { create } from "zustand";

export type Note = {
	note: string;
	id: string;
};

export type ResultNote = {
	note: string;
	id: string;
};

interface NoteState {
	note: Note;
	notes: {
		[key: string]: Note;
	};
	setNote: (note: Note) => void;
	setNotes: (note: Note, key: string) => void;
}

export const useNoteStore = create<NoteState>()((set) => ({
	note: {
		note: "",
		id: "",
	},
	notes: {},
	setNote: (note: Note) => set((state) => ({ note: { ...state.note, ...note } })),
	setNotes: (note: Note, key: string) =>
		set((state) => {
			const updateNote = { ...state.notes, [key]: note };
			const sortedKeys = Object.keys(updateNote).sort();//The ordering is alphabetical based on the keys of the object

			const sortObject: {
				[key: string]: Note;
			} = {};

			for (const key of sortedKeys) {
				sortObject[key] = updateNote[key];
			}

			return { notes: sortObject };
		}),
}));