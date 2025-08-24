import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  const initialValues = { username: "", email: "", password: "" };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitting with Formik:", values);
    alert("User registered successfully (Formik + Yup)");
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="space-y-6 bg-white p-6 rounded-2xl shadow-md max-w-md mx-auto">
        <h2 className="text-xl font-bold text-gray-700">Formik + Yup Form</h2>

        <div>
          <label className="block text-gray-600 font-medium">Username</label>
          <Field
            type="text"
            name="username"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage name="username" component="p" className="text-red-500 text-sm mt-1" />
        </div>

        <div>
          <label className="block text-gray-600 font-medium">Email</label>
          <Field
            type="email"
            name="email"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
        </div>

        <div>
          <label className="block text-gray-600 font-medium">Password</label>
          <Field
            type="password"
            name="password"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
        </div>

        <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
