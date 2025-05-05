"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamic import with no SSR to improve build time
const IconCloud = dynamic(
  () => import('./magicui/icon-cloud').then((mod) => mod.IconCloud),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-full rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 animate-pulse flex items-center justify-center">
        <div className="text-sm text-gray-500 dark:text-gray-400">Loading...</div>
      </div>
    ) 
  }
);

interface IconCloudProps {
  icons?: React.ReactNode[];
  images?: string[];
}

export function DynamicIconCloud(props: IconCloudProps) {
  return (
    <Suspense fallback={
      <div className="w-full h-full rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 animate-pulse flex items-center justify-center">
        <div className="text-sm text-gray-500 dark:text-gray-400">Loading...</div>
      </div>
    }>
      <IconCloud {...props} />
    </Suspense>
  );
}