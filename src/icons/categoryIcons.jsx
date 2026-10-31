import React from "react";

const createAnimatedIcon = (paths, defaultColor = "currentColor") => {
  return function AnimatedIcon({ size = 22, className = "", color = defaultColor, ...props }) {
    return (
      <span
        className={`inline-flex items-center justify-center transition-transform duration-300 ease-out hover:scale-110 ${className}`}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-300 hover:rotate-3"
        >
          {paths}
        </svg>
      </span>
    );
  };
};

export const LaptopIcon = createAnimatedIcon(
  <>
    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    <path d="M12 12h.01" />
  </>
);

export const SmartphoneIcon = createAnimatedIcon(
  <>
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </>
);

export const HeadphonesIcon = createAnimatedIcon(
  <>
    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
  </>
);

export const WatchIcon = createAnimatedIcon(
  <>
    <circle cx="12" cy="12" r="7" />
    <polyline points="12 9 12 12 13.5 13.5" />
    <path d="M16.51 17.35l-.85 3.83a2 2 0 0 1-2 1.82H10.34a2 2 0 0 1-2-1.82l-.85-3.83" />
    <path d="M7.49 6.65l.85-3.83A2 2 0 0 1 10.34 1h3.32a2 2 0 0 1 2 1.82l.85 3.83" />
  </>
);

export const CpuIcon = createAnimatedIcon(
  <>
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <rect width="6" height="6" x="9" y="9" rx="1" />
    <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" />
  </>
);

export const TruckIcon = createAnimatedIcon(
  <>
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
    <path d="M15 18H9m10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-12 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path d="M14 9h4.5a1 1 0 0 1 .8.4L22 13v5h-2" />
  </>
);

export const RotateCcwIcon = createAnimatedIcon(
  <>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </>
);

export const TabletIcon = createAnimatedIcon(
  <>
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
    <line x1="12" x2="12.01" y1="18" y2="18" strokeWidth="2.5" />
  </>
);

