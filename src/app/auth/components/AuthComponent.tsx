"use client";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AuthComponent() {
  const supabase = createClientComponentClient();
  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="p-5">
      <NavBar />
      <div className="flex justify-center items-center h-80vh">
        <div className="text-center space-y-5">
          <Button variant="secondary" onClick={handleLogin}>
            Login with gihub
          </Button>
        </div>
      </div>
    </div>
  );
}
