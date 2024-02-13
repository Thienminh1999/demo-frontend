import React, { ReactNode } from "react";
import styles from "./Container.module.css";

type ContainerPropsType = {
  className: string;
  children: ReactNode;
};

function Container({ className, children }: ContainerPropsType) {
  return (
    <div className={`${styles.container_com} ${className}`}>{children}</div>
  );
}

export default Container;
