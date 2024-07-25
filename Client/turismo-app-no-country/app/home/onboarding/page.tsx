"use client";

import { useFormState } from "../../_ui/FormContext";
import ExperienciasBuscadas from "../../_ui/ExperiencesSought";
import LugaresPreferidos from "../../_ui/FavoritePlaces";
import EstilosDeViaje from "../../_ui/TravelStyles";
import Bienvenida from "../../_ui/FormWelcome";
import CircularProgress from "@mui/material/CircularProgress";
import ProgressIdentifier from "../../_ui/ProgressIdentifier";

function ActiveStepFormComponent() {
  const { step } = useFormState();
  switch (step) {
    case -1:
      return <Bienvenida />;
    case 0:
      return <EstilosDeViaje />;
    case 1:
      return <ExperienciasBuscadas />;
    case 2:
      return <LugaresPreferidos />;
    default:
      return null;
  }
}

const page = () => {
  const { step } = useFormState();

  return (
    <section className="h-screen flex justify-center items-center">
      {step !== 3 ? (
        <div className="bg-gray-400 w-5/6 rounded-xl min-h-[590px] flex items-center justify-center relative">
          <ActiveStepFormComponent />
          <ProgressIdentifier />
        </div>
      ) : (
          <CircularProgress />
      )}
    </section>
  );
};

export default page;
