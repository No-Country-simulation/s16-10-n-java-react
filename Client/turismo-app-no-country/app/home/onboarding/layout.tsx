'use client'
import React from "react";
import { FormProvider } from "./FormOnboardingContext";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <FormProvider>{children}</FormProvider>;
};

export default layout;
