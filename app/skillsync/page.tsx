'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { Search, MessageSquare } from 'lucide-react';
import Link from 'next/link';

// Mock data
const users = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Frontend Developer',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    bio: 'Passionate about creating beautiful and intuitive user interfaces.',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Backend Developer',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'AWS'],
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    bio: 'Experienced in building scalable backend systems and APIs.',
  },
  // Add more mock users...
];

export default function SkillSync() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = users.filter((user) =>
    user.skills.some((skill) =>
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Search Section */}
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 mb-8">
          <h1 className="text-3xl font-bold mb-6">Find Your Perfect Team</h1>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <Input
                placeholder="Search by skills (e.g., React, Python, AWS)"
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button>Search</Button>
          </div>
        </div>

        {/* Popular Skills */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Popular Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'Python', 'Node.js', 'TypeScript', 'AWS', 'Docker'].map(
              (skill) => (
                <Button
                  key={skill}
                  variant="outline"
                  className="backdrop-blur-sm bg-white/5"
                  onClick={() => setSearchQuery(skill)}
                >
                  {skill}
                </Button>
              )
            )}
          </div>
        </div>

        {/* User Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <Card
              key={user.id}
              className="backdrop-blur-md bg-white/10 border-white/20 p-6 hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-12 h-12">
                  <img src={user.avatar} alt={user.name} className="rounded-full" />
                </Avatar>
                <div>
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {user.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{user.bio}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {user.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Link href={`/profile/${user.id}`}>
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </Link>
                <Link href={`/chat/${user.id}`}>
                  <Button size="sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}