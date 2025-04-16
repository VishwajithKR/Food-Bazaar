import { FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useFormik } from "formik";
import { loginSchema } from "../validations/authValidation";
import { Credentials } from "../assets/data/data";
import { useDispatch } from "react-redux";
import { setLogin } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {

   const dispatch = useDispatch();
   const navigate = useNavigate();

      const formik = useFormik({
        initialValues: { username: "", password: "" },
        validationSchema: loginSchema,
        onSubmit: (values) => {
          const user = Credentials.find(
            (item) => item.username === values.username && item.password === values.password
          );
          if (user) {
            dispatch(setLogin(user));
            navigate("/");
        } else {
              formik.resetForm();
            alert("Invalid Username or Password");
          }
        },
      });
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-3xl shadow-lg w-[850px] h-[550px] flex overflow-hidden">
        <div className="w-1/2 flex flex-col items-center justify-center text-black rounded-l-3xl">
          <p className="text-3xl font-bold">Hello, Welcome!</p>
          <button className="mt-4 px-6 py-2 border-2 border-white rounded-lg font-bold">Buddy</button>
        </div>

        <div className="w-1/2 p-10 flex flex-col items-center justify-center relative">
          <h1 className="text-3xl font-bold text-opacity-70">Login</h1>
          <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="relative w-full mt-6">
              <input type="text" name="username" placeholder="Username"
                className="w-full p-3 bg-gray-200 tracking-[3px] rounded-lg text-lg focus:outline-none"
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.username}</p>
              )}
            </div>
            <div className="relative w-full mt-4">
              <input type="password" name="password" placeholder="Password"
                className="w-full p-3 bg-gray-200 placeholder:tracking-[3px] tracking-[10px] rounded-lg text-lg focus:outline-none"
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="mt-8 w-full cursor-pointer bg-gray-500 hover:bg-gray-600 text-white p-3 rounded-lg font-bold"
            >
              Login
            </button>
          </form>
          <p className="mt-4">or login with social platforms</p>
          <div className="flex gap-4 mt-3">
            {[FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn].map((Icon, index) => (
              <a key={index} className="p-2 border-2 border-gray-300 hover:bg-gray-200 rounded-lg cursor-pointer">
                <Icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
