'use client';

import { Component as ProfileCard1 } from "@/components/ui/profile-card-1";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container mx-auto py-20 translate-y-10">
        <h1 className="text-4xl font-bold text-white text-center mb-12">Glassmorphism Profile Card Demo</h1>
        <ProfileCard1 />
      </div>
    </main>
  );
}
