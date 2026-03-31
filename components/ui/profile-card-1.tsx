'use client';

import React, { useState } from 'react';
import { LucideIcon, Twitter, Github, Linkedin, ArrowUpRight, Mail } from 'lucide-react';

//================================================================================
// 1. DEMO COMPONENT (demos/default/code.demo.tsx)
// This file demonstrates how to use the reusable GlassmorphismProfileCard.
//================================================================================

export function Component() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 font-sans bg-background transition-colors duration-500 sm:p-8 w-full">
      <ProfileCardDemo />
    </div>
  );
}

const ProfileCardDemo = () => {
  const cardProps = {
    avatarUrl: 'https://vucvdpamtrjkzmubwlts.supabase.co/storage/v1/object/public/users/user_2zMtrqo9RMaaIn4f8F2z3oeY497/avatar.png',
    name: 'Ravi Katiyar',
    title: 'Sr. Designer',
    bio: 'Building beautiful and intuitive digital experiences. Passionate about design systems and web animation.',
    socialLinks: [
      { id: 'github', icon: Github, label: 'GitHub', href: '#' },
      { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: '#' },
      { id: 'twitter', icon: Twitter, label: 'Twitter', href: '#' },
    ],
    actionButton: {
      text: 'Contact Me',
      href: '#',
    },
    onClick: () => console.log('Card clicked'),
  };

  return <GlassmorphismProfileCard {...cardProps} />;
};

//================================================================================
// 2. REUSABLE COMPONENT (your-component/code.tsx)
// This is the core, reusable component logic. It is fully customizable via props.
//================================================================================

export interface SocialLink {
  id: string;
  icon: LucideIcon;
  label: string;
  href: string;
}

export interface ActionButtonProps {
  text: string;
  href: string;
}

interface GlassmorphismProfileCardProps {
  avatarUrl: string;
  name: string;
  title: string;
  bio: string;
  socialLinks?: SocialLink[];
  actionButton?: ActionButtonProps;
  onClick?: () => void;
}

export const GlassmorphismProfileCard = ({
  avatarUrl,
  name,
  title,
  bio,
  socialLinks = [],
  actionButton,
  onClick,
}: GlassmorphismProfileCardProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div 
      className="relative w-full max-w-sm group/card transition-all duration-500 cursor-pointer" 
      onClick={onClick}
    >
      <div 
        className="relative flex flex-col items-center p-8 rounded-3xl border transition-all duration-500 ease-out backdrop-blur-xl bg-card/40 border-white/10 hover:border-white/20"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="w-24 h-24 mb-4 rounded-full p-1 border-2 border-white/20 group-hover/card:border-primary/50 transition-colors duration-500 overflow-hidden">
          <img 
            src={avatarUrl} 
            alt={`${name}'s Avatar`}
            className="w-full h-full rounded-full object-cover"
            onError={(e) => { 
                const target = e.currentTarget as HTMLImageElement;
                target.onerror = null; 
                target.src = `https://placehold.co/96x96/00629B/white?text=${name.charAt(0)}`; 
            }}
          />
        </div>

        <h2 className="text-2xl font-bold text-card-foreground">{name}</h2>
        <p className="mt-1 text-sm font-medium text-primary uppercase tracking-wider">{title}</p>
        <p className="mt-4 text-center text-sm leading-relaxed text-muted-foreground line-clamp-3">{bio}</p>

        <div className="w-1/2 h-px my-6 rounded-full bg-border/50" />

        <div className="flex items-center justify-center gap-3">
          {socialLinks.map((item) => (
            <SocialButton key={item.id} item={item} setHoveredItem={setHoveredItem} hoveredItem={hoveredItem} />
          ))}
        </div>

        {actionButton && <ActionButton action={actionButton} />}
      </div>
      
      <div className="absolute inset-0 rounded-3xl -z-10 transition-all duration-500 ease-out blur-2xl opacity-0 group-hover/card:opacity-30 bg-gradient-to-r from-primary to-accent" />
    </div>
  );
};

// --- Sub-components ---

const SocialButton = ({ item, setHoveredItem, hoveredItem }: { 
  item: SocialLink, 
  setHoveredItem: (id: string | null) => void, 
  hoveredItem: string | null 
}) => (
  <div className="relative">
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ease-out group overflow-hidden bg-secondary/50 hover:bg-primary hover:text-primary-foreground border border-white/5"
      onMouseEnter={() => setHoveredItem(item.id)}
      onMouseLeave={() => setHoveredItem(null)}
      aria-label={item.label}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative z-10 flex items-center justify-center">
        <item.icon size={18} className="transition-all duration-200 ease-out text-muted-foreground group-hover:text-white" />
      </div>
    </a>
    <Tooltip item={item} hoveredItem={hoveredItem} />
  </div>
);

const ActionButton = ({ action }: { action: ActionButtonProps }) => (
  <div
    className="flex items-center gap-2 px-6 py-2.5 mt-8 rounded-full font-semibold text-sm backdrop-blur-sm transition-all duration-300 ease-out hover:scale-[1.03] active:scale-95 group bg-primary text-primary-foreground cursor-pointer"
    style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
  >
    <span>{action.text}</span>
    <ArrowUpRight size={14} className="transition-transform duration-300 ease-out group-hover:rotate-45" />
  </div>
);

const Tooltip = ({ item, hoveredItem }: { item: SocialLink, hoveredItem: string | null }) => (
  <div 
    role="tooltip"
    className={`absolute -top-10 left-1/2 -translate-x-1/2 z-50 px-2 py-1 rounded-md backdrop-blur-md border text-[10px] font-medium whitespace-nowrap transition-all duration-300 ease-out pointer-events-none bg-popover text-popover-foreground border-border ${hoveredItem === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
    style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
  >
    {item.label}
    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rotate-45 bg-popover border-b border-r border-border" />
  </div>
);
