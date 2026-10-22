import React from 'react';
import {
  Code,
  Terminal,
  Database,
  Brain,
  Server,
  FileText,
  Flame,
  Zap,
  Eye,
  BarChart2,
  Layout,
  Palette,
  GitBranch,
  Boxes
} from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = '', size = 24 }) => {
  const iconKey = name.toLowerCase();

  if (iconKey.includes('python')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.75h5.81v.825H3.89s-3.89.442-3.89 6.294c0 5.85 3.4 5.65 3.4 5.65h2.03v-2.85s-.11-3.4 3.34-3.4h5.75v-.84h-5.8v-2.76s-.1-3.4 3.2-3.4h5.68s3.15.06 3.15-3.15C20.73 0 11.914 0 11.914 0zM8.7 1.7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3.38 22.3c6.09 0 5.71-2.656 5.71-2.656l-.006-2.75h-5.81v-.825h8.126s3.89-.442 3.89-6.294c0-5.85-3.4-5.65-3.4-5.65h-2.03v2.85s.11 3.4-3.34 3.4h-5.75v.84h5.8v2.76s.1 3.4-3.2 3.4h-5.68s-3.15-.06-3.15 3.15c0 3.91 8.816 3.91 8.816 3.91zm3.214-1.7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
      </svg>
    );
  }

  if (iconKey.includes('react')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    );
  }

  if (iconKey.includes('javascript') || iconKey === 'js') {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#f7df1e" />
        <path d="M7 16.5c.5.8 1.4 1.3 2.5 1.3 1.5 0 2.5-.8 2.5-2.2v-6.6h-2.2v6.5c0 .6-.4.9-.9.9-.5 0-.8-.3-1-.6l-.9 1.1zm9.3-.1c.7 0 1.2-.3 1.5-.7l1.1 1.1c-.6.9-1.6 1.4-2.8 1.4-2.2 0-3.6-1.5-3.6-3.6 0-2.3 1.5-3.6 3.5-3.6 2 0 3.2 1.2 3.2 3.2v.5h-4.5c.1 1.1.9 1.7 1.6 1.7zm.1-2.9c-.6 0-1.1.4-1.2 1.1h2.5c-.1-.7-.6-1.1-1.3-1.1z" fill="#000" />
      </svg>
    );
  }

  if (iconKey.includes('linux') || iconKey.includes('ubuntu')) {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="#E95420"/>
        <circle cx="6" cy="12" r="2" fill="#fff"/>
        <circle cx="15" cy="6.8" r="2" fill="#fff"/>
        <circle cx="15" cy="17.2" r="2" fill="#fff"/>
        <path d="M12 6a6 6 0 0 0-4.7 9.8l1.3-1.3A4.2 4.2 0 0 1 12 7.8V6zm4.7 4.2A4.2 4.2 0 0 1 12 16.2v1.8a6 6 0 0 0 4.7-9.8l-1.3 1.3z" fill="#fff"/>
      </svg>
    );
  }

  if (iconKey.includes('git')) {
    return <GitBranch size={size} className={className} />;
  }

  if (iconKey.includes('database') || iconKey.includes('sql') || iconKey.includes('postgresql')) {
    return <Database size={size} className={className} />;
  }

  if (iconKey.includes('brain') || iconKey.includes('rag') || iconKey.includes('langchain')) {
    return <Brain size={size} className={className} />;
  }

  if (iconKey.includes('fastapi') || iconKey.includes('server') || iconKey.includes('node')) {
    return <Server size={size} className={className} />;
  }

  if (iconKey.includes('flask') || iconKey.includes('flame')) {
    return <Flame size={size} className={className} />;
  }

  if (iconKey.includes('zap') || iconKey.includes('groq') || iconKey.includes('llm')) {
    return <Zap size={size} className={className} />;
  }

  if (iconKey.includes('eye') || iconKey.includes('vision') || iconKey.includes('opencv')) {
    return <Eye size={size} className={className} />;
  }

  if (iconKey.includes('chart') || iconKey.includes('pandas') || iconKey.includes('numpy')) {
    return <BarChart2 size={size} className={className} />;
  }

  if (iconKey.includes('terminal') || iconKey.includes('c') || iconKey.includes('cpp')) {
    return <Terminal size={size} className={className} />;
  }

  if (iconKey.includes('file') || iconKey.includes('paddleocr')) {
    return <FileText size={size} className={className} />;
  }

  if (iconKey.includes('palette') || iconKey.includes('tailwind')) {
    return <Palette size={size} className={className} />;
  }

  if (iconKey.includes('layout') || iconKey.includes('streamlit')) {
    return <Layout size={size} className={className} />;
  }

  if (iconKey.includes('solidity')) {
    return <Boxes size={size} className={className} />;
  }

  return <Code size={size} className={className} />;
};
