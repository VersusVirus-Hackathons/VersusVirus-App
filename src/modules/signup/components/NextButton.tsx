import React from "react";

import Link from "next/link";
import { LinkButton } from "../../core/components/Button";

export interface NextButtonProps {
  step: string | number;
  disabled?: boolean;
}

const NextButton: React.FC<NextButtonProps> = ({ step, disabled }) => {
  if (disabled) {
    return <LinkButton disabled>Next</LinkButton>;
  }
  return (
    <Link href="/signup/steps/[step]" as={`/signup/steps/${step}`} passHref>
      <LinkButton>Next</LinkButton>
    </Link>
  );
};

export default NextButton;
