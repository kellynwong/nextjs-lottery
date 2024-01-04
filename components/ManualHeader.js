import { useMoralis } from "react-moralis";
import { useEffect } from "react";

export default function ManualHeader() {
  const {
    enableWeb3,
    account,
    isWeb3Enabled,
    Moralis,
    deactivateWeb3,
    isWeb3EnableLoading,
  } = useMoralis();

  useEffect(() => {
    if (isWeb3Enabled) return;
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("connected")) {
        enableWeb3(); // we don't have to press the connected button anymore because it goes, oh i see that locally we stored this connected key whenever you refresh, it checks for this first it sees it and then runs enabled web 3
      }
    }
  }, [isWeb3Enabled]);

  // added this useEffect below so that when we disconnect, the metamask doesn't pop up annoyingly again
  // this useEffect will constantly look for us being connected
  // whenever there is a re render we want to run to check to see if any account has changed

  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      console.log(`Account changed to ${account}`);
      if (account == null) {
        // if null we can assume user has disconnected
        window.localStorage.removeItem("connected");
        deactivateWeb3(); // this will set isWeb3Enabled to false
        console.log("Null account found");
      }
    });
  }, []);

  return (
    <div>
      {account ? (
        <div>
          Connected to {account.slice(0, 6)}...
          {account.slice(account.length - 4)}!
        </div>
      ) : (
        <button
          onClick={async () => {
            await enableWeb3();
            if (typeof window !== "undefined") {
              window.localStorage.setItem("connected", "injected!!!");
            }
          }}
          disabled={isWeb3EnableLoading}
        >
          Connect
        </button>
      )}
    </div>
  );
}
