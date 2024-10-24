"use client";

import React from "react";

interface TooltipProps {
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ children }) => {
  return <div>{children}</div>;
};

const TooltipTrigger: React.FC<TooltipProps> = ({ children }) => {
  return <div>{children}</div>;
};

const TooltipContent: React.FC<TooltipProps> = ({ children }) => {
  return <div>{children}</div>;
};

const TooltipProvider: React.FC<TooltipProps> = ({ children }) => {
  return <div>{children}</div>;
};

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
