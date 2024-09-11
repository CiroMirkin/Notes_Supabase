"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "@/components/ui/button";
import { IoTimer } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
export default function NavBar() {
  const router = useRouter();

  const path = usePathname();
  const supabase = createClientComponentClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };
  const isAuthPage = path === "/auth";

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center text-white font-bold tracking-widest">
        <h1>Notes</h1>
      </div>
      {!isAuthPage && (
        <Button variant="secondary" onClick={handleLogout}>
          Logout
        </Button>
      )}
    </div>
  );
}
