import { Dispatch } from "react";

export interface Screens {
  initalized: boolean;
  setInitialized: Dispatch<boolean>;
}