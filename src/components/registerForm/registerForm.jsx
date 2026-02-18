"use client";

import { useFormState } from "react-dom";
import styles from "./registerForm.module.css";
import { register } from "@/lib/action";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [state, fromAction] = useFormState(register, undefined);
  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <form className={styles.form} action={fromAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Have and account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
