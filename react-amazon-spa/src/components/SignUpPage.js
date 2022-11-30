import { User } from "../requests";

const SignUpPage = (props) => {
  const { onSignUp } = props;
  const handleSubmit = (event) => {
    const { currentTarget } = event;
    event.preventDefault();
    const formData = new FormData(currentTarget);
    const params = {
      user: {
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
        email: formData.get("email"),
        password: formData.get("password"),
        password_confirmation: formData.get("password_confirmation"),
      },
    };
    User.create(params).then((user) => {
      if (user?.id) {
        onSignUp();
        props.history.push("/products");
      }
    });
  };

  return (
    <main>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">First name</label>
          <input type="text" name="first_name" id="first_name" />
        </div>
        <div>
          <label htmlFor="last_name">Last name</label>
          <input type="text" name="last_name" id="last_name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <label htmlFor="password_confirmation">Password</label>
          <input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
          />
        </div>
        <input type="submit" value="Sign Up" />
      </form>
    </main>
  );
};

export default SignUpPage;