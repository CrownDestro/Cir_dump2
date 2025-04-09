"use client";

import { useState } from "react";
import Image from 'next/image';
import carrer from "@/assets/images/carrer.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function StudentContent() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const progressData = {
    percentage: 56,
    segments: [
      { name: "Converted", color: "bg-green-500", percentage: 30 },
      { name: "Unassigned", color: "bg-yellow-400", percentage: 26 },
      { name: "Assigned", color: "bg-blue-400", percentage: 24 },
      { name: "Dropped", color: "bg-red-500", percentage: 20 },
    ]
  };

  const upcomingTasks = [
    { title: "Code hour", date: "24 Sep 2019, Friday", color: "bg-pink-100" },
    { title: "Aptitude test", date: "05 Oct 2019, Monday", color: "bg-blue-100" },
    { title: "Eng - Vocabulary", date: "05 Oct 2019, Monday", color: "bg-green-100" },
    { title: "Eng - Vocabulary test", date: "05 Oct 2019, Monday", color: "bg-gray-100 text-muted line-through" },
  ];

  const academicData = [
    { subject: "Math", score: 85 },
    { subject: "Physics", score: 72 },
    { subject: "Chemistry", score: 90 },
    { subject: "English", score: 65 },
    { subject: "CS", score: 78 },
    { subject: "Elective", score: 88 },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 px-6 py-4 bg-background">
      {/* Main Content Area */}
      <div className="flex-1 space-y-6">
        {/* Hero Banner */}
        <Card className="bg-ring">
          <CardContent className="flex flex-col md:flex-row justify-between items-center pl-6 gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-primary">Step Up Your Career Game!</h2>
              <p className="mt-2 max-w-md text-sm text-foreground">
                Develop essential career skills and achieve your goals with structured learning—guided by expert mentors to help you grow
              </p>
            </div>
            <Image src={carrer} alt="Career" className="w-40 md:w-48"></Image>
          </CardContent>
        </Card>

        {/* Progress and Performance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-surface text-card-foreground">
            <CardHeader>
              <CardTitle className="text-base font-medium">My progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <div className="relative h-28 w-28">
                  <svg className="h-full w-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#f3f4f6" strokeWidth="10" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="10"
                      strokeDasharray="251.2"
                      strokeDashoffset="110.5"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                    <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" className="text-xl font-bold fill-current">
                      56%
                    </text>
                  </svg>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                {progressData.segments.map((segment) => (
                  <div key={segment.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`h-3 w-3 rounded-full ${segment.color}`} />
                      <span className="ml-2 text-sm text-foreground">{segment.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recharts Academic Performance Card */}
          <Card className="bg-surface text-card-foreground">
            <CardHeader>
              <CardTitle className="text-base font-medium">Academic Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[220px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={academicData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="subject" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Bar dataKey="score" fill="#10b981" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mentors Card */}
        <Card className="bg-surface text-card-foreground">
          <CardHeader>
            <CardTitle>Mentors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <img src="/api/placeholder/48/48" className="h-12 w-12 rounded-full bg-muted" alt="Mentor" />
              <div>
                <h3 className="font-medium text-dark">Mentor Name</h3>
                <p className="text-sm text-muted">Mentor Role</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar */}
      <div className="w-full lg:w-64 space-y-6 flex-shrink-0">
        <Card className="bg-surface text-card-foreground">
          <CardContent className="p-4 pt-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-lg"
            />
          </CardContent>
        </Card>

        <Card className="bg-surface text-card-foreground">
          <CardHeader>
            <CardTitle className="text-dark">Upcoming tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map((task, i) => (
                <div key={i} className={`rounded-md p-3 ${task.color}`}>
                  <h3 className="font-medium text-dark">{task.title}</h3>
                  <p className="text-sm text-muted">{task.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
