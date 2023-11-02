import { FC, FormEvent, useState, ChangeEvent } from "react";
import { TestFormValues, useFormStructure } from "../../hooks/useFormStructure";

const Test1: FC = () => {
  const formStructure = useFormStructure();

  const [formValues, setFormValues] = useState<TestFormValues>({
    firstname: "",
    lastname: "",
    sex: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("submitted data:", formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formStructure.map((field, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <label>{field.label}</label>
          {field.inputType === "input" && (
            <input
              type="text"
              name={field.name as string}
              placeholder={field.placeholder}
              value={(formValues[field.name] as string) || ""}
              onChange={handleInputChange}
            />
          )}

          {field.inputType === "radio" &&
            field.options &&
            field.options.map((option, i) => (
              <div key={i}>
                <input
                  type="radio"
                  name={field.name as string}
                  value={option.value}
                  checked={formValues[field.name] === option.value}
                  onChange={handleInputChange}
                />
                {option.label}
              </div>
            ))}
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Test1;
