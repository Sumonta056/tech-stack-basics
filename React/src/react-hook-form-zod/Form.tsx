import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, LogInIcon } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FormField, schema } from "./FormField";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormField>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormField> = async (data) => {
    // Handle Login Logic in DB & Backend
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen font-raleway bg-gradient-to-r from-blue-400 to-white-50">
      <div className="w-full max-w-md p-8 space-y-3 bg-white shadow-2xl rounded-3xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-700">
          Welcome back!
        </h2>
        <p className="text-sm text-center text-gray-600">
          Please Enter your credential login !
        </p>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <div className="flex items-center w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
              <FaEnvelope className="text-gray-400" />
              <input
                {...register("email")}
                placeholder="Email"
                className="w-full ml-2 bg-transparent focus:outline-none"
              />
            </div>
            {errors.email && (
              <div className="pt-2">
                <span className="text-sm text-red-500 ">
                  {errors.email.message}
                </span>
              </div>
            )}
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex items-center w-full px-4 py-2 mt-1 border rounded-lg bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
              <FaLock className="text-gray-400" />
              <input
                {...register("password")}
                placeholder="Password"
                // type="password"
                className="w-full ml-2 bg-transparent focus:outline-none"
              />
            </div>
            {errors.password && (
              <div className="pt-2">
                <span className="text-sm text-red-500 ">
                  {errors.password.message}
                </span>
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            {isSubmitting ? (
              <div>
                <LoaderIcon size={20} className="inline-block mr-2" />
                Loading...
              </div>
            ) : (
              <div>
                <LogInIcon size={20} className="inline-block mr-2" />
                Login
              </div>
            )}
          </button>
          <p className="text-sm text-center text-gray-600">
            Dont't have an account{" "}
            <a
              href="/register"
              className="font-bold text-blue-500 hover:underline"
            >
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;