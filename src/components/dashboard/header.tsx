// src/components/dashboard/header.tsx
"use client";

import { useSession } from "next-auth/react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Header() {
  const { data: session } = useSession();
  const role = session?.user?.role || "student";

  return (
    <header className="flex h-16 items-center justify-between border-b bg-surface px-6">
      <h1 className="text-xl font-bold">Dashboard</h1>
      
      <div className="flex items-center">
        <Badge className="mr-4 bg-blue-100 text-blue-800">
          CIR SKILL DEVELOPMENT
        </Badge>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}