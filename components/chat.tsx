'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send } from 'lucide-react';

// Mock data
const conversations = [
  {
    id: "1",
    name: 'HackTech 2025 Team',
    type: 'group',
    avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400',
    messages: [
      {
        id: 1,
        sender: 'Sarah Chen',
        content: "Hey team! How's the progress on the UI components?",
        timestamp: '10:30 AM',
      },
      {
        id: 2,
        sender: 'Mike Peters',
        content: 'Almost done with the dashboard. Will push the changes soon.',
        timestamp: '10:32 AM',
      },
    ],
  },
  // Add more conversations...
];

interface ChatProps {
  initialChatId?: string;
}

export function Chat({ initialChatId }: ChatProps) {
  const [message, setMessage] = useState('');
  const [activeConversation, setActiveConversation] = useState(
    conversations.find(conv => conv.id === initialChatId) || conversations[0]
  );

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-black to-black">
      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-12 gap-6 h-[calc(100vh-8rem)]">
          {/* Conversations List */}
          <div className="col-span-4 glass rounded-2xl p-4">
            <h2 className="text-xl font-semibold mb-4">Conversations</h2>
            <ScrollArea className="h-[calc(100vh-12rem)]">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                    activeConversation.id === conv.id
                      ? 'bg-white/20'
                      : 'hover:bg-white/10'
                  }`}
                  onClick={() => setActiveConversation(conv)}
                >
                  <Avatar className="w-10 h-10">
                    <img src={conv.avatar} alt={conv.name} className="rounded-full" />
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{conv.name}</h3>
                    <p className="text-sm text-gray-300">
                      {conv.type}
                    </p>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </div>

          {/* Chat Area */}
          <div className="col-span-8 glass rounded-2xl p-4 flex flex-col">
            {/* Chat Header */}
            <div className="flex items-center gap-3 p-3 border-b border-white/10 mb-4">
              <Avatar className="w-10 h-10">
                <img
                  src={activeConversation.avatar}
                  alt={activeConversation.name}
                  className="rounded-full"
                />
              </Avatar>
              <div>
                <h3 className="font-semibold">{activeConversation.name}</h3>
                <p className="text-sm text-gray-300">
                  {activeConversation.type}
                </p>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              {activeConversation.messages.map((msg) => (
                <div key={msg.id} className="mb-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-8 h-8">
                      <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
                        alt={msg.sender}
                        className="rounded-full"
                      />
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{msg.sender}</span>
                        <span className="text-xs text-gray-400">
                          {msg.timestamp}
                        </span>
                      </div>
                      <p className="mt-1 text-gray-300">
                        {msg.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </ScrollArea>

            {/* Message Input */}
            <div className="flex gap-2 mt-4">
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 bg-white/5"
              />
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}