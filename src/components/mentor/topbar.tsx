// src/components/mentor/topbar.tsx
"use client";
import { useState } from 'react';
import { useSession } from "next-auth/react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem} from "@/components/ui/dropdown-menu";
const students = [
    {name: "Ritika",id: "AM.XX.XXXXXX",email: "am.xx.xxxxx@am.students.amrita.edu",status: "submitted",dept: "CSE-A",year: 2022,},
    {name: "John",id: "AM.XX.XXXXXX",email: "am.xx.xxxxx@am.students.amrita.edu",status: "pending",dept: "CSE-A",year: 2023,},
    {name: "Tanisha",id: "AM.XX.XXXXXX",email: "am.xx.xxxxx@am.students.amrita.edu",status: "submitted",dept: "CSE-B",year: 2024,},
    {name: "Alice",id: "AM.XX.XXXXXX",email: "am.xx.xxxxx@am.students.amrita.edu",status: "pending",dept: "ECE",year: 2021,},
];

const departments = ['CSE', 'AIE', 'AID', 'CYS', 'MECH', 'ECE', 'ELC', 'EEE'];

export function Topbar() {
    const [selectedYears, setSelectedYears] = useState<number[]>([]);
    const [selectedDepts, setSelectedDepts] = useState<string[]>([]);

    const toggleItem = (value: string | number, list: any[], setList: (arg0: any[]) => void) => {
        if (list.includes(value)) {
            setList(list.filter(item => item !== value));
        } else {
            setList([...list, value]);
        }
    };

    const filteredStudents = students.filter(student => {
        const yearMatch = selectedYears.length === 0 || selectedYears.includes(student.year);
        const deptMatch = selectedDepts.length === 0 || selectedDepts.includes(student.dept);
        return yearMatch && deptMatch;
    });

    const years = [...new Set(students.map(s => s.year))];

    const { data: session } = useSession();
    const role = session?.user?.role || "mentor";

    return (
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
            <div className='flex gap-4'>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="text-card-foreground">
                            {selectedYears.length > 0
                                ? `Years: ${selectedYears.join(', ')}`
                                : 'Year'}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {years.map(year => (
                            <DropdownMenuCheckboxItem
                                key={year}
                                checked={selectedYears.includes(year)}
                                onCheckedChange={() => toggleItem(year, selectedYears, setSelectedYears)}
                            >
                                {year}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Department Dropdown */}

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="text-card-foreground">
                            {selectedDepts.length > 0
                                ? `Depts: ${selectedDepts.join(', ')}`
                                : 'Department'}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {departments.map(dept => (
                            <DropdownMenuCheckboxItem
                                key={dept}
                                checked={selectedDepts.includes(dept)}
                                onCheckedChange={() => toggleItem(dept, selectedDepts, setSelectedDepts)}
                                onSelect={(e: { preventDefault: () => any; }) => e.preventDefault()}
                            >
                                {dept}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
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