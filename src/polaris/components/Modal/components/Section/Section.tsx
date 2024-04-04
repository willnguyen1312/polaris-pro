import React from "react";

import { classNames } from "../../../../utilities/css";
import { Box } from "../../../Box";

import styles from "./Section.module.css";

export interface SectionProps {
  children?: React.ReactNode;
  flush?: boolean;
  subdued?: boolean;
  titleHidden?: boolean;
}

export function Section({
  children,
  flush = false,
  subdued = false,
  titleHidden = false,
}: SectionProps) {
  const className = classNames(
    styles.Section,
    titleHidden && styles.titleHidden
  );

  return (
    <div className={className}>
      <Box
        as="section"
        padding={flush ? "0" : "400"}
        {...(titleHidden && { paddingInlineEnd: "0" })}
        {...(subdued && {
          background: "bg-surface-tertiary",
        })}
      >
        {children}
      </Box>
    </div>
  );
}
