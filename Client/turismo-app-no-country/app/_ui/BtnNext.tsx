import { useRouter } from "next/navigation";
import React from "react";
import { useFormState } from "./FormContext";
import Button from '@mui/material/Button';

const BtnNext = () => {
  const { step } = useFormState();
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/home");
  };

  return (
    <>
      {step !== 2 ? (
        <Button type="submit" className="py-2 px-5 rounded border-none text-white bg-primary">
          Siguiente
        </Button>
      ) : (
        <Button
          onClick={handleRedirect}
          type="submit"
          className="py-2 px-5 rounded border-none text-white bg-primary"
        >
          Finalizar
        </Button>
      )}
    </>
  );
};

export default BtnNext;
