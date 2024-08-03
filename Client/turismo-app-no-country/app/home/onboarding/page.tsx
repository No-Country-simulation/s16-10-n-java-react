"use client";

import { useFormState } from "./FormOnboardingContext";
import ProgressIdentifier from "../../_ui/ProgressIdentifier";
import CircularProgress from "@mui/material/CircularProgress";
import FormWelcome from "../../_ui/FormWelcome";
import TravelStyles from "../../_ui/TravelStyles";
import ExperiencesSought from "../../_ui/ExperiencesSought";
import FavoritePlaces from "../../_ui/FavoritePlaces";
import MostEnjoyActivities from "@/app/_ui/MostEnjoyActivities";
import ImportanceToLocalEvents from "@/app/_ui/ImportanceToLocalEvents";
import ReceiveRecomendarions from "@/app/_ui/ReceiveRecommendations";
import WheaterInformation from "@/app/_ui/WheatherInformation";

function ActiveStepFormComponent() {
  const { step } = useFormState();
  switch (step) {
    case -1:
      return <FormWelcome />;
    case 0:
      return <TravelStyles />;
    case 1:
      return <ExperiencesSought />;
    case 2:
      return <FavoritePlaces />;
    case 3:
      return <MostEnjoyActivities />;
    case 4:
      return <ImportanceToLocalEvents />;
    case 5:
      return <WheaterInformation />;
    case 6:
      return <ReceiveRecomendarions />;
    default:
      return null;
  }
}

const Page = () => {
  const { step } = useFormState();

  return (
    <section className="min-h-full flex justify-center items-center font-roboto max-w-[1040px] mx-auto">
      {step !== 7 ? (
        <div className="w-5/6 rounded-xl min-h-[590px] relative">
          <div className="bg-[url('/bg-onboarding.svg')] bg-no-repeat bg-cover w-full min-h-[590px] rounded-xl flex items-center justify-center ">
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

export default Page;
