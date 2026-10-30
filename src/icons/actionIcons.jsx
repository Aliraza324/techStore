import React from "react";

const createAnimatedAction = (paths, hoverClass = "hover:scale-110") => {
  return function AnimatedActionIcon({ size = 20, className = "", color = "currentColor", ...props }) {
    return (
      <span
        className={`inline-flex items-center justify-center transition-all duration-300 ease-out ${hoverClass} ${className}`}
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
        >
          {paths}
        </svg>
      </span>
    );
  };
};

export const ShoppingCartIcon = createAnimatedAction(
  <>
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </>,
  "hover:-translate-y-0.5 hover:scale-110"
);

export const MenuIcon = createAnimatedAction(
  <>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </>
);

export const XIcon = createAnimatedAction(
  <>
    <path d="M18 6 6 18M6 6l12 12" />
  </>,
  "hover:rotate-90 hover:scale-110"
);

export const StarIcon = createAnimatedAction(
  <>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </>,
  "hover:rotate-12 hover:scale-125"
);


export const PlusIcon = createAnimatedAction(
  <>
    <path d="M5 12h14M12 5v14" />
  </>
);

export const MinusIcon = createAnimatedAction(
  <>
    <path d="M5 12h14" />
  </>
);

export const Trash2Icon = createAnimatedAction(
  <>
    <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2M10 11v6M14 11v6" />
  </>,
  "hover:text-red-500 hover:rotate-6 hover:scale-110"
);

export const CheckCircle2Icon = createAnimatedAction(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </>
);

export const AlertCircleIcon = createAnimatedAction(
  <>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <line x1="12" x2="12.01" y1="16" y2="16" />
  </>
);

export const UserIcon = createAnimatedAction(
  <>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </>,
  "hover:-translate-y-0.5 hover:scale-110"
);


