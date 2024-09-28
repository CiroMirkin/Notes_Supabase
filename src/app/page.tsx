import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { NewNote } from "../components/NewNote";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ResultNote } from "@/store";

import Notes from "@/components/Notes";
import NavBar from "../components/NavBar";
import InitNote from "@/components/state/InitNote";

export const dynamic = "force-dynamic";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    return redirect("/auth");
  }

  const { data: notes } = await supabase
    .from("notes")
    .select("*")
  
  return (
    <div className="space-y-5">
      <InitNote notes={notes as ResultNote[]} />
      <NavBar />
      <main className="px-5 flex flex-col gap-4">
        <NewNote />
        <Notes />
      </main>
    </div>
  );
}
