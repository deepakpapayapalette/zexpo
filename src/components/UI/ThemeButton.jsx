import React from "react";

const ThemeButton = ({
  children,
  variant = "outline", // "fill" | "outline"
  type = "button",
  className = "",
  disabled = false,
  onClick,
}) => {

  const baseClasses = `
    px-8 py-2
    font-medium font-sourcePro
    text-lg rounded-md
    transition-all duration-200
    cursor-pointer
    disabled:opacity-50 disabled:cursor-not-allowed
    border-2
  `;

  const variants = {
    fill: `
      bg-webprimary
      text-white
      border-webprimary
      hover:bg-websecondary
      hover:border-websecondary
    `,
    outline: `
      bg-transparent
      text-webprimary
      border-webprimary
      hover:bg-websecondary
      hover:text-white
      hover:border-websecondary
    `,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default ThemeButton;
