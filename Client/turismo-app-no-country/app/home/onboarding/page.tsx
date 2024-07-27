"use client";

import { useFormState } from "./FormOnboardingContext";
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
    <section className="h-screen flex justify-center items-center font-roboto">
      {step !== 3 ? (
        <div className=" bg-[url('/bg-secondary-onboarding.svg')] bg-no-repeat bg-cover w-5/6 rounded-xl min-h-[590px] flex items-center justify-center relative">
          <div className="bg-[url('/bg-onboarding.svg')] bg-no-repeat bg-cover w-full rounded-xl">
            <ActiveStepFormComponent />
          </div>
            <ProgressIdentifier />
        </div>
      ) : (
        <CircularProgress />
      )}
    </section>
  );
};

export default page;
