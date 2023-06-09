import cls from "./form.module.css";

type FormCommunityProps = {
  isShowForm: boolean;
};

export function FormCommunity(props: FormCommunityProps) {
  return (
    <div className={props.isShowForm ? cls.showForm : cls.hiddenForm}>
      <div className={cls.formBox}>
        <h1>Register to Photo Club Member</h1>
        <p>Get countless benefit by joining as a member of Photo Club!</p>
        <div>
          <form className={cls.form}>
            <label>
              <div className={cls.formKey}>User Email</div>
              <input
                className={cls.formValue}
                type="text"
                name="email"
                placeholder="Insert your email"
              />
            </label>
            <label>
              <div className={cls.formKey}>First Name</div>
              <input
                className={cls.formValue}
                type="text"
                name="firstname"
                placeholder="Insert your first name"
              />
            </label>
            <label>
              <div className={cls.formKey}>Last Name</div>
              <input
                className={cls.formValue}
                type="text"
                name="lastname"
                placeholder="Insert your last name"
              />
            </label>
            <button className={cls.formButton}>Register Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}
