import Header from "@/app/components/header";

import SideSection from "../components/ui/side-section";
import ChatSection from "../components/chat-section";
import { getServerSession } from "next-auth";


export default async function Home() {
  const session = await getServerSession();
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-10 background-gradient">
      <Header />
      <div className="flex w-full">

      
      <SideSection/>
      <ChatSection />
      </div>
    </main>
  );
}
