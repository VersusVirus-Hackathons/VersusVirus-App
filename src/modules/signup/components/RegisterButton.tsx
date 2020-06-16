import { useRouter } from "next/router";
import React, { useState } from "react";
import { useStoreActions } from "../../../model";
import Button from "../../core/components/Button";

export interface RegisterButtonProps {}

const RegisterButton: React.FC<RegisterButtonProps> = ({}) => {
  const router = useRouter();
  const [processing, setProcessing] = useState(false);
  const register = useStoreActions((s) => s.signup.registerHacker);
  const onRegister = async () => {
    try {
      setProcessing(true);
      await register();

      await router.push("/signup/thankyou", "/signup/thankyou");
    } catch (e) {
      alert(e.message);
      await router.push("/signup/steps/[step]", "/signup/steps/1");
    } finally {
      setProcessing(false);
    }
  };
  return (
    <Button disabled={processing} onClick={onRegister}>
      {processing ? "Please wait" : "Yes, I Accept"}
    </Button>
  );
};

export default RegisterButton;
