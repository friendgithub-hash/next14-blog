"use client";

import { useFormState } from "react-dom";
import styles from "./loginForm.module.css";
import { login } from "@/lib/action";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [state, fromAction] = useFormState(login, undefined);
  const router = useRouter();

  //   useEffect(() => {
  //     state?.success && router.push("/login");
  //   }, [state?.success, router]);

  return (
    <form className={styles.form} action={fromAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have and account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
