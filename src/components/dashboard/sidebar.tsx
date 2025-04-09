// src/components/dashboard/sidebar.tsx
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  MessageSquare, 
  User, 
  LogOut 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut } from "next-auth/react";

export function Sidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const role = session?.user?.role || "student";

  const studentNavItems = [
    { href: "/student/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/student/courses", label: "Courses", icon: BookOpen },
    { href: "/student/activity", label: "My Activity", icon: Users },
    { href: "/student/feedback", label: "Mentor Feedback", icon: MessageSquare },
    { href: "/student/profile", label: "Profile", icon: User },
  ];

  const mentorNavItems = [
    { href: "/mentor/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/mentor/students", label: "Student Data", icon: Users },
    { href: "/mentor/feedback", label: "Provide Feedback", icon: MessageSquare },
    { href: "/mentor/profile", label: "Profile", icon: User },
  ];

  const adminNavItems = [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/students", label: "Student Data", icon: Users },
    { href: "/admin/mentors", label: "Mentor Data", icon: MessageSquare },
    { href: "/admin/profile", label: "Profile", icon: User },
  ];

  const navItems = role === "student" 
    ? studentNavItems 
    : role === "mentor" 
      ? mentorNavItems 
      : adminNavItems;

  return (
    <div className="flex h-full flex-col border-r bg-white rounded-xl shadow-md p-4 w-64">
      <div className="flex flex-col items-center p-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
        <h2 className="mt-2 font-semibold">Full-name</h2>
      </div>
      
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center rounded-md px-3 py-2 text-sm font-medium",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <Icon className="mr-2 h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4">
        <Button 
          variant="outline" 
          className="w-full justify-start text-primary"
          onClick={() => signOut()}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Log Out
        </Button>
      </div>
    </div>
  );
}