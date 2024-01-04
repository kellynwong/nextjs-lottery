import { ConnectButton } from "web3uikit";

export default function Header() {
  return (
    <div>
      <ConnectButton moralisAuth={false} />{" "}
      {/* the moralisAuth is just to make it explicit that we are not connecting to any server*/}
    </div>
  );
}
