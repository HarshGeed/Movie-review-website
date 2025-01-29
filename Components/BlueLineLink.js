import { useState } from "react";
import Link from "next/link";

const HoverLink = ({ href, children }) => {
  const [showFlyout, setShowFlyout] = useState(false);

  return (
    <Link
      href={href}
      className="relative text-white"
      onMouseEnter={() => setShowFlyout(true)}
      onMouseLeave={() => setShowFlyout(false)}
    >
      {children}
      <span
        style={{
          transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
        }}
        className="absolute -bottom-2 left-0 right-0 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
      />
    </Link>
  );
};

export default HoverLink;
