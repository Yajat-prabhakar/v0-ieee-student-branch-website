'use client';

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { GlassmorphismProfileCard } from './ui/profile-card-1';

interface LeadershipCardProps {
  name: string;
  role: string;
  image?: string;
  banner?: string;
  objectPosition?: string;
  linkedin?: string;
  github?: string;
  email?: string;
  about?: string;
  onViewProfile?: () => void;
}

export default function LeadershipCard({ 
  name, 
  role, 
  image, 
  linkedin, 
  github, 
  email, 
  about,
  onViewProfile 
}: LeadershipCardProps) {
  
  const socialLinks = [];
  if (github && github !== '#') {
    socialLinks.push({ id: 'github', icon: Github, label: 'GitHub', href: github });
  }
  if (linkedin && linkedin !== '#') {
    socialLinks.push({ id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: linkedin });
  }
  if (email && email !== '#') {
    socialLinks.push({ id: 'email', icon: Mail, label: 'Email', href: `mailto:${email}` });
  }

  const cardProps = {
    avatarUrl: image || `https://placehold.co/128x128/00629B/white?text=${name.charAt(0)}`,
    name: name,
    title: role,
    bio: about || 'Member of IEEE BVIMR Student Branch.',
    socialLinks: socialLinks,
    actionButton: onViewProfile ? {
      text: 'View Profile',
      href: '#',
    } : undefined,
    onClick: onViewProfile,
  };

  return <GlassmorphismProfileCard {...cardProps} />;
}
