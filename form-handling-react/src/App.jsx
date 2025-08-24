import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div>
      {/* Controlled version */}
      <RegistrationForm />

      {/* Formik + Yup version */}
      <FormikForm />
    </div>
  );
}

export default App;
