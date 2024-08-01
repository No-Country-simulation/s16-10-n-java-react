import { useRouter } from "next/navigation";
import React from "react";
import { useFormState } from "../home/onboarding/FormOnboardingContext";
import Button from "@mui/material/Button";

const BtnNext = () => {
  const { step } = useFormState();
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/home");
  };

  return (
    <>
      {step !== 6 ? (
        <Button
          sx={{ textTransform: "none" }}
          type="submit"
          className="py-3 px-5 rounded border-none text-white bg-primary text-xs lg:text-sm"
        >
          Siguiente
        </Button>
      ) : (
        <Button
          sx={{ textTransform: "none" }}
          onClick={handleRedirect}
          type="submit"
          className="py-3 px-5 rounded border-none text-white bg-primary text-xs lg:text-sm"
        >
          Finalizar
        </Button>
      )}
    </>
  );
};

export default BtnNext;
