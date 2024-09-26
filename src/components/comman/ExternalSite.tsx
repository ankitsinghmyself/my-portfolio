import React from "react";

interface ExternalSiteProps {
  url: string;
}

const ExternalSite: React.FC<ExternalSiteProps> = ({ url }) => {
  return (
    <>
      <main className="w-full h-screen">
        <iframe
          src={url}
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-forms"
        />
      </main>
    </>
  );
};

export default ExternalSite;
