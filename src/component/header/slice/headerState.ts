import { ProjectTypeRespones } from "./interface";

export interface StateHeader {
  projectTypeResponse: ProjectTypeRespones[];
  projectResponse: ProjectTypeRespones[];
}

export const HeaderState: StateHeader = {
  projectTypeResponse: [],
  projectResponse: [],
};
