import Header from "@/app/components/header";

import SideSection from "../components/ui/side-section";
import ChatSection from "../components/chat-section";
import { getServerSession } from "next-auth";
import LogoutButton from "../components/buttons/LogoutButton";
import ToggleButton from "../components/buttons/ToggleButton";


export default async function Home() {
  const session = await getServerSession();
  return (
    <main className=" w-full">
      
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
  <div className="bg-white  dark:bg-blue-950 dark:border-gray-800 w-20 flex-shrink-0 border-r border-gray-200 flex-col hidden sm:flex">
    <div className="h-16 text-blue-500 flex items-center justify-center">
    

    </div>
    <div className="flex mx-auto flex-grow mt-4 flex-col  text-gray-400 space-y-4">
      {/* home */}
      <button className="h-10 w-12 dark:bg-gray-700 dark:text-white rounded-md flex items-center justify-center bg-blue-100 text-blue-500">
        <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </button>
      
      
      <button className="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      </button>
    </div>
  </div>
  <div className="flex-grow overflow-hidden h-full flex flex-col">
    
    <div className="flex-grow flex overflow-x-hidden">
      <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
        <div className="text-xs text-gray-400 tracking-wider"></div>
        
        <div className="space-y-2 mt-2">
        <img src="/bot_logo.png" className=" mr-4 " alt="Barristerbot" />
        <br />
          BarristerBot is an AI based legal assistant, which can help you in your legal matters in Pakistan.
        </div>
        <div className="space-y-2 mt-3">
        
       
          <h3>Key Features</h3>
          <li>LLM & RAG Based Chatbot</li>
          <li>Dynamic Knowledge Base</li>
          <li>Cost-Effective Legal Assistance</li>
          <li>24/7 Availability</li>
          <li>Private & Secure</li>
          <li>Text and Speech Support</li>
        </div>
      </div>
      <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
        <div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800 sticky top-0">
          <div className="flex w-full items-center">
            <div className="flex items-center text-3xl text-gray-900 dark:text-white">
              <img src="/bot_logo.png" className="w-14 mr-4 rounded-full" alt="Barristerbot" />
              Ask Me about your legal problem?
            </div>
            <div className="ml-auto sm:flex hidden items-center justify-end">
              <div className="text-right">
                <div className="text-xs text-gray-400 dark:text-gray-400"></div>
               
              </div>
            

              <ToggleButton/>
              
              <LogoutButton/>
              
            </div>
          </div>
          <div className="flex items-center space-x-3 sm:mt-7 mt-4">
            <a href="#" className="px-3 border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white pb-1.5">Chat</a>
            
          </div>
        </div>
        <div className="sm:p-7 p-4">
        <ChatSection />
        </div>
      </div>
    </div>
  </div>
</div>
    </main>
  );
}
