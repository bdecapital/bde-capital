import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

const paths: Record<string, JSX.Element> = {
  shield: (
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
  ),
  home: (
    <>
      <path d="M3 11l9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  umbrella: (
    <>
      <path d="M12 3v2" />
      <path d="M3 12a9 9 0 0118 0z" />
      <path d="M12 12v6a2.5 2.5 0 005 0" />
    </>
  ),
  clipboard: (
    <>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4a3 3 0 016 0" />
      <path d="M9 11h6M9 15h4" />
    </>
  ),
  check: <path d="M5 12l4.5 4.5L19 7" />,
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  phone: (
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 12l5 2v3a2 2 0 01-2 2A14 14 0 013 6a2 2 0 012-2z" />
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 9h16M8 3v4M16 3v4" />
    </>
  ),
  star: (
    <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.5 9.2l5.9-.9L12 3z" />
  ),
  quote: (
    <path d="M9 7H5v6h4l-2 4M19 7h-4v6h4l-2 4" />
  ),
  chevron: <path d="M6 9l6 6 6-6" />,
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 018 0v3" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.5-7-9.5A3.5 3.5 0 0112 7a3.5 3.5 0 017 3.5C19 15.5 12 20 12 20z" />
  ),
  dollar: (
    <>
      <path d="M12 3v18" />
      <path d="M16 7.5A3 3 0 0013 6h-1.5a2.5 2.5 0 000 5h1a2.5 2.5 0 010 5H10a3 3 0 01-3-1.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20a6 6 0 0112 0" />
      <path d="M16 5a3.5 3.5 0 010 6.5M21 20a6 6 0 00-4-5.6" />
    </>
  ),
  chat: (
    <path d="M4 5h16v11H9l-5 4V5z" />
  ),
  trending: (
    <>
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M17 8h4v4" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5L8 21l4-2 4 2-1-7.5" />
    </>
  ),
  family: (
    <>
      <circle cx="8" cy="7" r="2.5" />
      <circle cx="16" cy="7" r="2.5" />
      <path d="M4 20v-2a4 4 0 014-4 4 4 0 014 4M12 20v-2a4 4 0 014-4 4 4 0 014 4" />
    </>
  ),
  doc: (
    <>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v4h4M10 13h5M10 17h5" />
    </>
  ),
  x: <path d="M6 6l12 12M18 6L6 18" />,
  bolt: <path d="M13 3L5 13h6l-1 8 8-10h-6l1-8z" />,
  building: (
    <>
      <path d="M4 21V5l8-2v18" />
      <path d="M12 21V9l6 2v10M3 21h18" />
      <path d="M7 8h1M7 12h1M7 16h1M15 13h1M15 17h1" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5M3 16.5l9 5 9-5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </>
  ),
  rocket: (
    <>
      <path d="M5 15c-1 1-1.5 4-1.5 4s3-.5 4-1.5a2.1 2.1 0 00-2.5-2.5z" />
      <path d="M9 13l-2-2c1-5 5-8 11-8 0 6-3 10-8 11l-2-2z" />
      <path d="M14 8h.01" />
    </>
  ),
};

export type IconName = keyof typeof paths;

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
