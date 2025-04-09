// src/app/student/dashboard/page.tsx
import { Sidebar } from "@/components/dashboard/sidebar";
import { Topbar } from "@/components/mentor/topbar"
import {StudentTable} from "@/components/mentor/StudentTable"
export default function MentorDashboard() {
  return (
    <div className="flex min-h-screen">
      <div className="pl-6 py-4">
        <Sidebar />
      </div>
      <main className="flex-1 bg-background p-4">
      <Topbar />
      <StudentTable />
      </main>
    </div>
  );
}