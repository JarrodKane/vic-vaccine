import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import styles from "../styles/Home.module.css";

import dynamic from "next/dynamic";

import { getVicData } from "../api/VicHealth";

// import { Map } from "../component/Map";

// export async function getServerSideProps() {
//   const ACCESS_TOKEN = process.env.NEXT_MAPBOX;
//   console.log(ACCESS_TOKEN);

//   return {
//     props: {
//       ACCESS_TOKEN,
//     },
//   };
// }

interface Cords {
  lat: number;
  lng: number;
}

const Map: any = dynamic(() => import("../components/Map") as any, {
  ssr: false,
});

export const getStaticProps = async () => {
  const res = await getVicData();

  return {
    props: {
      vicData: res,
    },
    // revalidate: 1,
  };
};

// TODO remove from using any and use some types instead
export default function Home({ ACCESS_TOKEN, vicData }: any) {
  const [startCords, setStartCords] = useState<Cords>();

  function success(pos: any) {
    var crd = pos.coords;

    const newCords: Cords = {
      lat: crd.latitude,
      lng: crd.longitude,
    };

    setStartCords(newCords);
  }

  function error(err: any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);

    return false;
  }

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  useEffect(() => {
    const currentCords = navigator.geolocation.getCurrentPosition(
      success,
      error,
      options
    );
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={`h-screen w-screen flex flex-col items-center bg-gray-200`}
      >
        <main className={`flex flex-col items-center w-full h-full`}>
          <div className={`w-full px-20 p-5 `}>
            <h1 className={`text-2xl`}>Find a vaccine in Victoria</h1>
            <div className={``}>
              <h2 className={`text-lg`}>Can I get the vaccine?</h2>
              <div className={`flex`}>
                <h4>Are you over 50?</h4>
                <div>Result</div>
              </div>
              <form>
                <label>Location</label>
                {/* <input>Location</input> */}
                <button>Search</button>
              </form>
            </div>
          </div>

          <div className={`h-5/6 w-5/6`}>
            <Map
              data={vicData}
              key={uuidv4()}
              accessToken={ACCESS_TOKEN}
              startCords={startCords}
            />
          </div>
        </main>

        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={``}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </>
  );
}
