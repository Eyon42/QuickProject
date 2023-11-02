import { getProviders, signIn, useSession } from "next-auth/react";
import BareLayout from "@/components/layout/layouts/BareLayout";
import WalletLogin from "@/components/auth/WalletLogin";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getServerSession } from "next-auth";
import { getAuthOptions } from "../api/auth/[...nextauth]";
import { BrandedSignInButton } from "@/components/auth/BrandedSigInButton";

function Signin({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data: session } = useSession();
  const oauthProviders = Object.values(
    providers as unknown as { id: string; name: string; type: string }[]
  ).filter((p) => p.type === "oauth");
  console.log(oauthProviders);
  console.log(session);
  return (
    <BareLayout>
      <div className="flex w-fit flex-col items-center gap-5 rounded-lg bg-background2 px-2  py-16 md:px-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-5xl">Configura tu perfil de SIWA</h1>
          <h2 className="text-center text-2xl font-thin uppercase leading-5 text-primary">
            Registrate gratis en 10 segundos
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-2">
            <h2 className="mt-[-5px] text-3xl font-normal">¿Nuevo en Web3?</h2>
            {oauthProviders.map((provider) => (
              <LoginCard key={provider.id}>
                <BrandedSignInButton
                  id={provider.id}
                  name={"Iniciar sesión con " + provider.name}
                  onClick={() => void signIn(provider.id)}
                />
              </LoginCard>
            ))}
          </div>
          <span className="w-full border-t-2 border-primary/10"></span>
          <div className="flex flex-col items-center gap-2">
            <h2 className="mt-[-5px] text-3xl font-normal">
              ¿Ya tenés tu wallet?
            </h2>
            <LoginCard>
              <WalletLogin />
            </LoginCard>
          </div>
          {/* <LoginCard title={"Email y contraseña"}>
            <button onClick={() => void signIn("email-password")}>
              Sign in
            </button>
          </LoginCard> */}
        </div>
      </div>
    </BareLayout>
  );
}

function LoginCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full max-w-lg flex-col items-center justify-center ">
      {children}
    </div>
  );
}

export async function getServerSideProps({
  req,
  res,
}: GetServerSidePropsContext) {
  const providersPromise = getProviders();
  const session = await getServerSession(
    req,
    res,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    getAuthOptions(req as any, res as any)
  );

  if (session) {
    if (!session.user.onboarded) {
      return {
        redirect: {
          destination: "/onboarding",
        },
      };
    }
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  const providers = await providersPromise;
  return {
    props: { providers },
  };
}

export default Signin;
