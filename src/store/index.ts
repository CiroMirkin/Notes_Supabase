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
	deleteThisNote: (noteId: string) => void;
	editTextOfThisNote: (noteId: string, text: string) => void;
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
	deleteThisNote: (key: string) =>
		set((state) => {
			const notes = {...state.notes}
			delete notes[key]

			return { notes: notes }
		}),
	editTextOfThisNote: (noteId: string, text: string) =>
		set((state) => {
			let notes = {...state.notes}

			const newNotes = Object.keys(notes).map(key => {
				const note = notes[key]
				if (note.id === noteId) {
                    note.note = text
                }
				return note 
			})

			// Format

			const result: {
				[key: string]: Note
			} = {}

			newNotes.forEach(n => {
				const { note, ...rest } = n
				result[note] = { note, ...rest }
			})

			return { notes: result }
		}),
}));