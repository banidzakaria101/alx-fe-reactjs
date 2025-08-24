import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center space-y-10 p-6">
      <h1 className="text-3xl font-bold text-gray-800">React Form Handling</h1>

      <RegistrationForm />

      <FormikForm />
    </div>
  );
}

export default App;
