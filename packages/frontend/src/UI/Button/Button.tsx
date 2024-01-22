"use client";
import React, { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  className?: string;
}

function Button(props: ButtonProps) {
  const { variant = "container", className = "" } = props;

  const stylesButton =
    variant === "container"
      ? `${styles.button} ${styles.container} ${className}`
      : `${styles.button} ${styles.outline} ${className}`;

  return (
    <button {...props} className={stylesButton}>
      {props.children}
    </button>
  );
}

export default Button;
