import Image from "next/image";
import Head from "next/head";
import ManualHeader from "/components/ManualHeader";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Smart Contract Lottery</title>
        <meta name="description" content="Our Smart Contract Lottery" />{" "}
        {/*content will be read by webscrapers*/}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ManualHeader />
      {/*header / connect button / nav bar*/}
      Hello!
    </div>
  );
}
