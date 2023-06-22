import Image from "next/image";
import { Inter } from "next/font/google";
import Flex from "@/components/common/Flex";
import DummyLogo from "@/assets/DummyLogo";
import Text from "@/components/common/Text";
import Card from "@/components/landing/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen text-white flex-col bg-[#0D0D2B] px-6  lg:px-24 py-8 ${inter.className}`}
    >
      <Flex className="flex-col ">
        <Flex className="space-x-4">
          <DummyLogo />
          <Text className="text-2xl">Bitcoin Search</Text>
        </Flex>

        {/*  tagline for bitcoin search feed*/}
        <Flex className="flex-col mt-20 lg:mt-40 lg:max-w-[80%]  mx-auto">
          <Text className=" text-xl lg:text-6xl lg:leading-[80px] font-bold text-center">
            Connecting the <span className="text-[#2154EC]">Bitcoin and Lightning Developer </span> Communities.
          </Text>
          <Text className="max-w-[500px] text-xs lg:text-base text-center mx-auto mt-6 lg:mt-10 ">
            As a community we can create a worldwide impact and help shape the
            future of the financial industry.
          </Text>
        </Flex>

        {/* Bitcoins  */}
        <Flex className="flex-col mt-20">
            <Text className="text-xl lg:text-3xl font-medium">
            Latest Bitcoin-dev  Summaries
            </Text>
            <Flex className="mt-8 gap-6 flex-wrap">
              <Card />
              <Card />
              <Card />
            </Flex>
        </Flex>
        <Flex className="flex-col  mt-20">
            <Text className="text-xl lg:text-3xl font-medium">
            Latest Lightening dev  Summaries
            </Text>
            <Flex className="mt-8 space-x-6 flex-wrap">
              <Card />
              <Card />
              <Card />
            </Flex>
        </Flex>
        {/* work */}
        
      </Flex>
    </main>
  );
}
