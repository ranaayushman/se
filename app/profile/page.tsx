'use client';

import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Trophy, Users } from 'lucide-react';
import Link from 'next/link';

// Mock data
const userData = {
  name: 'Alex Johnson',
  branch: 'Computer Science',
  avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400',
  skills: ['React', 'Node.js', 'Python', 'AWS', 'TypeScript'],
  bio: 'Full-stack developer passionate about building innovative solutions. Always eager to learn and collaborate on exciting projects.',
  linkedin: 'https://linkedin.com/in/alexjohnson',
  github: 'https://github.com/alexjohnson',
  hackathons: [
    {
      name: 'TechCrunch Disrupt 2025',
      position: 'Winner',
      project: 'EcoTrack - Sustainability Monitoring Platform',
      description: 'Built a real-time sustainability monitoring platform using IoT sensors and AI.',
      team: ['Sarah Chen', 'Mike Peters', 'Lisa Kumar'],
    },
    {
      name: 'Global Health Hackathon',
      position: 'Runner Up',
      project: 'MedConnect - Healthcare Communication Platform',
      description: 'Developed a secure platform for patient-doctor communication using end-to-end encryption.',
      team: ['John Doe', 'Emma Wilson'],
    },
  ],
};

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 mb-8">
          <div className="flex items-center gap-6">
            <Avatar className="w-24 h-24">
              <img src={userData.avatar} alt={userData.name} className="rounded-full" />
            </Avatar>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{userData.name}</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{userData.branch}</p>
              <div className="flex gap-4">
                <Link href={userData.linkedin} target="_blank">
                  <Button variant="outline" size="sm">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </Link>
                <Link href={userData.github} target="_blank">
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Bio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2 backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold mb-4">Bio</h2>
            <p className="text-gray-600 dark:text-gray-300">{userData.bio}</p>
          </div>
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {userData.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Hackathon History */}
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-semibold mb-4">Hackathon History</h2>
          <Accordion type="single" collapsible className="w-full">
            {userData.hackathons.map((hackathon, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>
                  <div className="flex items-center gap-4">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <span>{hackathon.name}</span>
                    <Badge variant="secondary">{hackathon.position}</Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Card className="p-4 bg-white/5">
                    <h3 className="font-semibold mb-2">{hackathon.project}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {hackathon.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">Team:</span>
                      {hackathon.team.map((member, i) => (
                        <Badge key={i} variant="outline">
                          {member}
                        </Badge>
                      ))}
                    </div>
                    <Button className="mt-4" variant="outline" size="sm">
                      Request to Join Team
                    </Button>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}