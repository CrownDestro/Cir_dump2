"use client"
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const students = [
    { name: "Ritika", id: "AM.XX.XXXXXX", email: "am.xx.xxxxx@am.students.amrita.edu", status: "submitted", dept: "CSE-A", year: 2022, },
    { name: "John", id: "AM.XX.XXXXXX", email: "am.xx.xxxxx@am.students.amrita.edu", status: "pending", dept: "CSE-A", year: 2023, },
    { name: "Tanisha", id: "AM.XX.XXXXXX", email: "am.xx.xxxxx@am.students.amrita.edu", status: "submitted", dept: "CSE-B", year: 2024, },
    { name: "Alice", id: "AM.XX.XXXXXX", email: "am.xx.xxxxx@am.students.amrita.edu", status: "pending", dept: "ECE", year: 2021, },
];
const departments = ["ALL", ...new Set(students.map((s) => s.dept))];

const getBadgeVariant = (status: string) => {
    return status === "submitted" ? "success" : "destructive";
};

export function StudentTable() {
    const [selectedDept, setSelectedDept] = useState("ALL");
    const [searchTerm, setSearchTerm] = useState("");

  const filtered = students.filter((s) => {
    const matchesDept = selectedDept === "ALL" || s.dept === selectedDept;
    const matchesSearch =
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDept && matchesSearch;
  });

    return (
        <div className="p-6 max-w-full mx-auto">
            <div className="flex items-center justify-between mb-6 gap-4 flex-wrap bg-surface">
        <Input
          type="text"
          placeholder="Search by name, ID, or email..."
          className="w-full sm:w-96 h-14"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Tabs defaultValue="ALL" onValueChange={setSelectedDept}>
          <TabsList>
            {departments.map((dept) => (
              <TabsTrigger
                key={dept}
                value={dept}
                className={dept === selectedDept ? "font-bold text-primary" : "text-card-foreground"}
              >
                {dept === "ALL" ? "All Departments" : dept}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

            <div className="overflow-x-auto border rounded-xl shadow-sm">
                <table className="bg-surface w-full text-sm text-left">
                    <thead className="text-card-foreground">
                        <tr>
                            <th className="p-4"></th>
                            <th className="p-4">Student</th>
                            <th className="p-4">Goal submission</th>
                            <th className="p-4">Mail-ID</th>
                            <th className="p-4 text-center">View Goals</th>
                            <th className="p-4 text-center">View Profile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map((s, idx) => (
                            <tr key={idx} className="border-t">
                                <td className="p-4 align-middle">
                                    <Avatar className="h-16 w-16">
                                        <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                                        <AvatarFallback>UN</AvatarFallback>
                                    </Avatar>
                                </td>
                                <td className="p-4">
                                    <div className="font-medium text-card-foreground">{s.name}</div>
                                    <div className="text-xs text-card-foreground">{s.id}</div>
                                </td>
                                <td className="p-4">
                                    <Badge
                                        variant="outline"
                                        className={`text-xs ${s.status === "submitted"
                                            ? "text-green-600 border-green-600"
                                            : "text-red-600 border-red-600"
                                            }`}
                                    >
                                        ● {s.status}
                                    </Badge>
                                </td>
                                <td className="p-4 text-card-foreground">{s.email}</td>
                                <td className="p-4 text-center">
                                    <Button variant="secondary" className="bg-rose-700 text-white hover:bg-rose-800">
                                        Goal Plan
                                    </Button>
                                </td>
                                <td className="p-4 text-center">
                                    <Button variant="secondary" className="bg-gray-900 text-white hover:bg-gray-800">
                                        Profile
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
