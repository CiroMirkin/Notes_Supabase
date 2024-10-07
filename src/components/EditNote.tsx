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
import { Note } from "@/store";

export function EditNote({ note }: { note: Note}) {

    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button>Editar</Button>
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
                    <Label htmlFor="username" className="text-right">
                    Note
                    </Label>
                    <Input
                    id="edit_note"
                    placeholder="Note..."
                    className="col-span-3"
                    value={note.note}
                    onChange={() => {}}
                    />
                </div>
                </div>
                <DialogFooter>
                <Button type="submit" onClick={() => {}}>
                    Edit
                </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}