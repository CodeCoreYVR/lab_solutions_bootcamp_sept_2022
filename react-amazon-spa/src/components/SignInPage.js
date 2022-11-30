import { Session } from "../requests";

 function SignInPage(props) {
   const { onSignIn } = props;

   function handleSubmit(event) {
     event.preventDefault();
     const { currentTarget } = event;
     const formData = new FormData(currentTarget);
     const params = {
       email: formData.get("email"),
       password: formData.get("password"),
     };

     Session.create(params).then((data) => {
       console.log(data);
       if (data.id) {
         onSignIn();

         // props.history.push("/products");
       }
     });
   }

   return (
     <main>
       <h1>Sign In</h1>
       <form onSubmit={handleSubmit}>
         <div>
           <label htmlFor="email">Email</label>
           <input type="text" name="email" id="email" />
         </div>
         <div>
           <label htmlFor="password">Password</label>
           <input type="password" name="password" id="password" />
         </div>
         <input type="submit" value="Sign In" />
       </form>
     </main>
   );
 }

 export default SignInPage;