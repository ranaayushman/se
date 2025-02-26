'use client';

import Link from 'next/link';
import { Button } from './button';
import { Code2, Users2, MessageSquare, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'backdrop-blur-md bg-black/10 border-b border-white/10 py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              SkillSync
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/skillsync"
              className="text-sm font-medium hover:text-purple-400 transition-colors"
            >
              Find Teams
            </Link>
            <Link
              href="/chat"
              className="text-sm font-medium hover:text-purple-400 transition-colors"
            >
              Messages
            </Link>
            <Link
              href="/profile"
              className="text-sm font-medium hover:text-purple-400 transition-colors"
            >
              Profile
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" className="text-sm">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="text-sm bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}