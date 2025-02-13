/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from "react";
import Head from "next/head";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import type { LoginRequest } from "store/services/auth";
import styles from "styles/Login.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthLayout from "@/layouts/Auth.layout";
import google from "assets/svg/google.svg";
import Image from "next/image";
import LoadingIcon from "@/components/atoms/LoaingIcon";
import { useSession } from "next-auth/react";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Login: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setLoading] = React.useState<boolean>(false);

  const callbackUrl = searchParams?.get("callbackUrl") || "/dashboard";

  const lang = useMemo(() => {
    return ["login"];
  }, []);

  const { t: translate, i18n } = useTranslation("login", {
    bindI18n: "languageChanged loaded",
  });

  React.useEffect(() => {
    i18n.reloadResources(i18n.resolvedLanguage, lang);
  }, [i18n, lang]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>();

  const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
    setLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl,
      });
      if (res?.error) {
        console.log({ res, error: res?.error });
        setLoading(false);
        toast.error(
          res.error ? JSON.parse(res.error).error : "invalid email or password"
        );
      } else {
        setLoading(false);
        if (
          session &&
          session.user &&
          session.user?.account_setup_completed === true
        ) {
          router.push(callbackUrl);
        } else {
          router.push("/onboarding");
        }
      }
    } catch (err: any) {
      setLoading(false);
      toast.error(err.data.message);
    }
  };

  return (
    <AuthLayout>
      <Head>
        <title>Afrisplash | Login</title>
        <meta name="description" content="The Gateway To Africa'S Remote Workforce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`mt-10 ${styles.span}`}>
        <h2 className={styles.h2}>{translate("Welcome Back")}</h2>
        <p className="mb-20">{translate("Log in to see what's new")}</p>

        <button className={`flex justify-center items-center ${styles.button}`}>
          <span className="mr-2">
            <Image src={google} alt="google icon" />
          </span>
          {translate("Log in with Google")}
        </button>

        <div className="flex flex-row items-center my-6 mx-auto">
          <hr className="w-[100px] mr-5 h-[5px] text-[#D9DEDC]" />
          {translate("or with email")}
          <hr className="ml-5 w-[100px] h-[5px] text-[#97a39e]" />
        </div>

        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full ">
            <input
              className={styles.input}
              type="email"
              placeholder="email@gmail.com"
              {...register("email", {
                required: `${translate("Email is required")}`,
              })}
            />
            {errors.email && (
              <p role="alert" className="error_message pl-2 py-2">
                {(errors.email).message}
              </p>
            )}
          </div>
          <div>
            <input
              className={styles.input}
              type="password"
              placeholder={translate("Password")}
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <p role="alert" className="error_message pl-2 py-2">
                {(errors.password).message}
              </p>
            )}
          </div>
          <div className="flex justify-between mb-4">
            <div className="flex">
              <input type="checkbox" />
              <p className="ml-2">{translate("Keep me logged in")}</p>
            </div>
            <Link href={"/auth/forgot-password"}>
              <p>{translate("Forgot Password?")}</p>
            </Link>
          </div>

          <button
            type="submit"
            className={`bg-dark_blue hover:bg-primary_green cursor-pointer text-white ${styles.button}`}
          >
            <span className="flex gap-4 mx-auto item-center justify-center">
              {isLoading && <LoadingIcon />}
              {translate("Log in")}
            </span>
          </button>
        </form>
        <p className="text-center mt-4">
          {translate("Don't have an account?")}
          <span className="text-[#0D5520] underline font-[700]">
            <Link href={"/auth/signup"}>{translate("Join now")}</Link>
          </span>
        </p>
      </div>
    </AuthLayout>
  );
};

type Props = {
  _nextI18Next?: {
    initialI18nStore: any;
    initialLocale: string;
    ns: string[];
    userConfig: any;
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
}: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["login"], null, ["en", "no"])),
    },
  };
};

export default Login;
