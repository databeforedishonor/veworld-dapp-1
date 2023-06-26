if (!process.env.REACT_APP_PUBLIC_PROJECT_ID)
  throw new Error("`REACT_APP_PUBLIC_PROJECT_ID` env variable is missing.")

export const DEFAULT_PROJECT_ID = process.env.REACT_APP_PUBLIC_PROJECT_ID
// If undefined will use the Wallet Connect default
export const DEFAULT_RELAY_URL = process.env.REACT_APP_RELAY_URL

export const DEFAULT_LOGGER =
  process.env.REACT_APP_WALLET_CONNECT_DEBUGGER === "true" ? "debug" : ""

export const DEFAULT_APP_METADATA = {
  name: "Official VeWorld Demo Dapp",
  description:
    "You can use this dapp to familiarize and know more about creation on VeChain",
  url: "https://vechain-demo-dapp.netlify.app/",
  icons: ["https://i.ibb.co/zb85hsL/vechain-vet-logo512.png"],
}

export const SUPPORTED_CHAINS = ["vechain:main", "vechain:test"]

export enum DEFAULT_METHODS {
  REQUEST_TRANSACTION = "request_transaction",
  IDENTIFY = "identify",
}

export enum DEFAULT_EVENTS {}
