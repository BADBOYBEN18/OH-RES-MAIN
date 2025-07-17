import React from 'react';

interface SiteLockBadgeProps {
  domain?: string; // Optional: Make it reusable for different domains
  width?: number; // Optional: Customize popup width
  height?: number; // Optional: Customize popup height
}

export const SiteLockBadge: React.FC<SiteLockBadgeProps> = ({
  domain = 'oh-res.com', // Default domain
  width = 600,
  height = 600,
}) => {
  const openSiteLockPopup = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(
      `https://www.sitelock.com/verify.php?site=${domain}`,
      'SiteLock',
      `width=${width},height=${height},left=160,top=170`
    );
  };

  return (
    <a
      href="#"
      onClick={openSiteLockPopup}
      aria-label="Verify site security with SiteLock"
    >
      <img
        className="img-fluid"
        alt="SiteLock security badge"
        title="SiteLock security verification"
        src={`https://shield.sitelock.com/shield/${domain}`}
        loading="lazy" // Optional: Improves performance
      />
    </a>
  );
};
