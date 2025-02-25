"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const schema = z.object({
  email: z
    .string()
    .nonempty("Email is Required")
    .email("Email format is not valid")
    .trim(),
  password: z.string().nonempty("Password is Required").trim(),
  username: z.string().nonempty("Username is Required").trim(),
  profileImage: z.string().nullable(),
});

type FormValues = {
  email: string;
  password: string;
  username: string;
  profileImage: string | null;
};

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const form = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      username: "",
      profileImage: "",
    },
    resolver: zodResolver(schema),
  });

  const { register, formState, handleSubmit, setError } = form;
  const { errors } = formState;

  const onSubmit = async (formData: FormValues) => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        if (result.error) {
          setError("email", { type: "manual", message: result.error });
        }
        return;
      }
      alert("Registrasi berhasil!");
      router.push("/login");
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat registrasi");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center py-8 bg-gray-100 min-h-screen">
      <div className="mb-8">
        <img
          src={"/Logo.png"}
          alt="Workify logo"
          className="inline-block w-20"
        />
        <span className="text-2xl font-semibold text-gray-800 ml-2">
          SiniLoker.id
        </span>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-[80%] md:w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="name mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">
              Name :
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg bg-blue-100"
              {...register("username")}
              placeholder="Nama Lengkap"
            />
            <span className="text-red-400">{errors?.username?.message}</span>
          </div>
          <div className="image_url mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="profileImage">
              Profile Picture URL :
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg bg-blue-100"
              {...register("profileImage")}
              placeholder="URL Link Gambar"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg bg-blue-100"
              {...register("email")}
              placeholder="name@email.com"
            />
            <span className="text-red-400">{errors?.email?.message}</span>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full p-3 border rounded-lg bg-blue-100 pr-12"
                placeholder="********"
                {...register("password")}
                minLength={8}
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon size={20} />
                ) : (
                  <EyeIcon size={20} />
                )}
              </button>
            </div>
            <span className="text-red-400">{errors?.password?.message}</span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold"
          >
            Register
          </button>
        </form>
        <p className="text-center text-gray-500 mt-6">
          already have an account?
          <Link
            href={"/login"}
            className="text-blue-600 ml-1 hover:border-b-2 hover:border-blue-600 cursor-pointer"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
