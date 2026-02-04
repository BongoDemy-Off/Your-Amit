import React from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface ManifestoItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: React.ComponentType<any>;
}