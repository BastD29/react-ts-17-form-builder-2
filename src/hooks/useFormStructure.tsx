import { useMemo } from "react";

export interface TestFormValues {
  firstname: string;
  lastname: string;
  sex: string;
}

interface IFormStructure<T> {
  inputType: "input" | "radio";
  name: keyof T;
  placeholder?: string;
  label: string;
  col: number;
  options?: { label: string; value: string }[];
}

export const useFormStructure = () => {
  const formStructure = useMemo<IFormStructure<TestFormValues>[]>(
    () => [
      {
        inputType: "input",
        name: "firstname",
        placeholder: "first name",
        label: "first name",
        col: 24,
      },
      {
        inputType: "input",
        name: "lastname",
        placeholder: "last name",
        label: "last name",
        col: 24,
      },
      {
        inputType: "radio",
        name: "sex",
        label: "sex",
        col: 24,
        options: [
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ],
      },
    ],
    []
  );

  return formStructure;
};
