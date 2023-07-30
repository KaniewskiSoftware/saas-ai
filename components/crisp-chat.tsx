"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("6963af80-cac0-4104-8a08-dde3bac94681");
  }, []);

  return null;
};
