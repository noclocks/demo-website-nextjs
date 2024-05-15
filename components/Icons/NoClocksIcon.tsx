import React from 'react';
import Image from "next/image"
import NoClocksLogo from "@/assets/noclocks-badge-main-dark.svg"

interface IconProps {
  className?: string
}

export const NoClocksIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <Image src={NoClocksLogo} alt="NoClocks Logo" width={34} height={34} className={className} />
  );
};
