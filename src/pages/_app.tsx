import "@/styles/globals.css";
import "@/styles/index.css"
import "@/styles/create.css"
import "@/styles/loom.css"
import type { AppProps } from "next/app";
import {NextUIProvider} from "@nextui-org/react";
import {useRouter} from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    // <NextUIProvider navigate={router.push}>
      <Component {...pageProps} />
    // </NextUIProvider>
  );
}
