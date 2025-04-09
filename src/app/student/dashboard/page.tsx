// src/app/student/dashboard/page.tsx
import { StudentContent } from "@/components/dashboard/student-content";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header"
export default function StudentDashboardPage() {
  return (
    <div className="flex min-h-screen bg-">
      <div className="pl-6 py-4">
        <Sidebar />
      </div>
      <main className="flex-1 bg-background p-4">
      <Header />
      <StudentContent />
      </main>
    </div>
  );
}
