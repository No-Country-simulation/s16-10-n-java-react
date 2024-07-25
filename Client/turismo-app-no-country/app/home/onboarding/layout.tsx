'use client'
import React from "react";
import { FormProvider } from "../../_ui/FormContext";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <FormProvider>{children}</FormProvider>;
};

export default layout;
