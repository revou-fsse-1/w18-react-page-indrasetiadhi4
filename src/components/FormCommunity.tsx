import cls from "./form.module.css";

type FormCommunityProps = {
  isShowForm: boolean;
};

export function FormCommunity(props: FormCommunityProps) {
  return (
    <div className={props.isShowForm ? cls.form : cls.hiddenForm}>
      <div>
        <h1>Register to Photo Club Member</h1>
        <p>Get countless benefit by joining as a member of Photo Club!</p>
        <div>
          <form>
            <label>
              <span>User Email</span>
              <input type="text" name="email" placeholder="Insert your email" />
              <span></span>
            </label>
            <label>
              <span>First Name</span>
              <input
                type="text"
                name="firstname"
                placeholder="Insert your first name"
              />
              <span></span>
            </label>
            <label>
              <span>Last Name</span>
              <input
                type="text"
                name="lastname"
                placeholder="Insert your last name"
              />
              <span></span>
            </label>
            <button>Register Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}
