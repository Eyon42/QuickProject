/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { getCsrfToken, signIn } from "next-auth/react";
import type { FC } from "react";
import { useState } from "react";
import { SiweMessage } from "siwe";
import NoSSR from "@/components/utils/NoSSR";

import { BrandedSignInButton } from "./BrandedSigInButton";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { env } from "@/env.mjs";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal, useWeb3Modal } from "@web3modal/react";
import {
  configureChains,
  createConfig,
  useAccount,
  useDisconnect,
  useNetwork,
  useSignMessage,
  WagmiConfig,
} from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import { shortAddress } from "@/lib/utils";

const chains = [arbitrum, mainnet, polygon];
const projectId = env.NEXT_PUBLIC_WALLET_CONNECT || "";

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

const BaseComponent: FC = () => {
  const { address, isConnected } = useAccount({
    onConnect: ({ isReconnected }) => {
      if (!isReconnected) {
        setTimeout(() => void web3SignIn(), 1000);
      }
    },
  });

  const { chain } = useNetwork();
  const [signingIn, setSigningIn] = useState(false);

  const { signMessageAsync } = useSignMessage({});

  const web3SignIn = async () => {
    const message = new SiweMessage({
      domain: window.location.host,
      address: address,
      statement: "Sign in with Ethereum to the app.",
      uri: window.location.origin,
      version: "1",
      chainId: chain?.id,
      nonce: await getCsrfToken(),
    });
    setSigningIn(true);
    let signature: string;
    const signTimeout = setTimeout(() => {
      setSigningIn(false);
    }, 5000);
    try {
      signature = await signMessageAsync({
        message: message.prepareMessage(),
      });
      clearTimeout(signTimeout);
    } catch {
      setSigningIn(false);
      clearTimeout(signTimeout);
      return;
    }

    await signIn("wallet", {
      message: JSON.stringify(message),
      signature,
      callbackUrl: "/auth/signIn",
    });
  };

  const { disconnect } = useDisconnect();
  return (
    <>
      {isConnected ? (
        <>
          <div className="flex gap-2">
            <span className="flex text-lg">
              Conectado como: {shortAddress(address as string)}
            </span>
            <button
              onClick={() => void disconnect()}
              className="text-primary hover:opacity-50"
            >
              Desconectar
            </button>
          </div>
          <BrandedSignInButton
            name="Iniciar sesión con Wallet"
            id="walletConnect"
            onClick={() => void web3SignIn()}
            loading={signingIn} // || (isConnecting && pendingConnector?.id === x.id)}
          />
        </>
      ) : (
        <ConnectButton />
      )}
    </>
  );
};

const walletConnectConnector = new WalletConnectConnector({
  options: {
    projectId: env.NEXT_PUBLIC_WALLET_CONNECT,
    qrModalOptions: {
      enableExplorer: true,
    },
  },
});

const ConnectButton = () => {
  const { open, isOpen } = useWeb3Modal();
  return (
    <BrandedSignInButton
      name={walletConnectConnector.name}
      id={walletConnectConnector.id}
      onClick={() => void open()}
      loading={isOpen}
    />
  );
};

const WalletLogin: FC = () => (
  <>
    <WagmiConfig config={wagmiConfig}>
      <NoSSR>
        <BaseComponent />
      </NoSSR>
    </WagmiConfig>
    <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
  </>
);

export default WalletLogin;
