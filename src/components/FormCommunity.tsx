import { useState } from "react";
import cls from "./form.module.css";

type FormCommunityProps = {
  //isShowForm: boolean;
  setIsShowForm: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormFields = {
  email: string;
  firstname: string;
  lastname: string;
};

type FormFieldsErrors = {
  email: string | undefined;
  firstname: string | undefined;
  lastname: string | undefined;
};

// type FormFields = {
//   [key: string]: string
// };

// type FormFields = Record<string, string> // type key, value

function isValidName(input: string) {
  const reg = /^[a-z ,.'-]+$/i;

  if (!reg.test(input)) {
    return false;
  } else {
    return true;
  }
}

function isValidEmail(input: string) {
  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!reg.test(input)) {
    return false;
  } else {
    return true;
  }
}

export function FormCommunity(props: FormCommunityProps) {
  // const [email, setEmail] = useState("");
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");

  //const [isShowForm, setIsShowForm] = useState(false);
  //const [isFormValid, setIsFormValid] = useState(false);

  const [formFields, setFormFields] = useState<FormFields>({
    email: "",
    firstname: "",
    lastname: "",
  });

  const [formFieldsErrors, setFormFieldsErrors] = useState<FormFieldsErrors>({
    email: undefined,
    firstname: undefined,
    lastname: undefined,
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const field = event.target.name as keyof FormFields;

    setFormFields((prevFormFields) => {
      const copiedFormFields = { ...prevFormFields };
      copiedFormFields[field] = event.target.value;

      return copiedFormFields;
    });
  }

  // function handleShowForm() {
  //   //event.preventDefault();

  //   setFormFieldsErrors({
  //     email: undefined,
  //     firstname: undefined,
  //     lastname: undefined,
  //   });

  //   setFormFields({
  //     email: "",
  //     firstname: "",
  //     lastname: "",
  //   });

  //   setIsShowForm(true);
  // }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setFormFieldsErrors({
      email: undefined,
      firstname: undefined,
      lastname: undefined,
    });

    let isError = false;

    if (!formFields.email) {
      setFormFieldsErrors((prevFormFieldsErrors) => {
        const copiedFormFieldsErrors = { ...prevFormFieldsErrors };
        copiedFormFieldsErrors.email = "email empty!!!";

        return copiedFormFieldsErrors;
      });

      isError = true;
    } else if (!isValidEmail(formFields.email)) {
      setFormFieldsErrors((prevFormFieldsErrors) => {
        const copiedFormFieldsErrors = { ...prevFormFieldsErrors };
        copiedFormFieldsErrors.email = "Invalid email";

        return copiedFormFieldsErrors;
      });

      isError = true;
    }

    if (!formFields.firstname) {
      setFormFieldsErrors((prevFormFieldsErrors) => {
        const copiedFormFieldsErrors = { ...prevFormFieldsErrors };
        copiedFormFieldsErrors.firstname = "firstname empty!!!";

        return copiedFormFieldsErrors;
      });

      isError = true;
    } else if (!isValidName(formFields.firstname)) {
      setFormFieldsErrors((prevFormFieldsErrors) => {
        const copiedFormFieldsErrors = { ...prevFormFieldsErrors };
        copiedFormFieldsErrors.firstname = "Invalid Firstname";

        return copiedFormFieldsErrors;
      });

      isError = true;
    }

    if (!formFields.lastname) {
      setFormFieldsErrors((prevFormFieldsErrors) => {
        const copiedFormFieldsErrors = { ...prevFormFieldsErrors };
        copiedFormFieldsErrors.lastname = "lastname empty!!!";

        return copiedFormFieldsErrors;
      });

      isError = true;
    } else if (!isValidName(formFields.lastname)) {
      setFormFieldsErrors((prevFormFieldsErrors) => {
        const copiedFormFieldsErrors = { ...prevFormFieldsErrors };
        copiedFormFieldsErrors.lastname = "Invalid Lastname";

        return copiedFormFieldsErrors;
      });

      isError = true;
    }

    // setIsFormValid(() => {
    //   console.log(formFieldsErrors);
    //   return (
    //     formFieldsErrors.email === undefined &&
    //     formFieldsErrors.firstname === undefined &&
    //     formFieldsErrors.lastname === undefined
    //   );
    // });

    if (!isError) {
      props.setIsShowForm(false);
      setFormFields({
        email: "",
        firstname: "",
        lastname: "",
      });
      alert("Welcome to our club!");
    }
  }

  return (
    <>
      <div className={cls.formBox}>
        <h1>Register to Photo Club Member</h1>
        <p>Get countless benefit by joining as a member of Photo Club!</p>
        <div>
          <form className={cls.form} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">
                <div className={cls.formKey}>User Email</div>
              </label>
              <input
                onChange={handleInputChange}
                value={formFields.email}
                id="email"
                className={cls.formValue}
                type="text"
                name="email"
                placeholder="Insert your email"
              />
              <span style={{ color: "red" }}>{formFieldsErrors.email}</span>
            </div>

            <div>
              <label htmlFor="firstname">
                <div className={cls.formKey}>First Name</div>
              </label>
              <input
                onChange={handleInputChange}
                value={formFields.firstname}
                id="firstname"
                className={cls.formValue}
                type="text"
                name="firstname"
                placeholder="Insert your first name"
              />
              <span style={{ color: "red" }}>{formFieldsErrors.firstname}</span>
            </div>

            <div>
              <label htmlFor="lastname">
                <div className={cls.formKey}>Last Name</div>
                <input
                  onChange={handleInputChange}
                  value={formFields.lastname}
                  id="lastname"
                  className={cls.formValue}
                  type="text"
                  name="lastname"
                  placeholder="Insert your last name"
                />
              </label>
              <div style={{ color: "red" }}>{formFieldsErrors.lastname}</div>
            </div>

            <button className={cls.formButton}>Register Now</button>
          </form>
        </div>
      </div>
    </>
  );
}
