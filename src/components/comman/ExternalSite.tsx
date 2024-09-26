// pages/external-content.tsx
import React from 'react';

interface ExternalContentProps {
  url: string;
}

const ExternalSite: React.FC<ExternalContentProps> = ({ url }) => {
  return (
    <div className="w-full h-screen">
      <iframe
        src={`/api/fetch-site?url=${encodeURIComponent(url)}`} 
        className="w-full h-full border-none relative"
        allowFullScreen
        title="External Content"
      />
    </div>
  );
};

export default ExternalSite;
