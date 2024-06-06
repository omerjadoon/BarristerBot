import Header from "@/app/components/header";

import SideSection from "../components/ui/side-section";
import ChatSection from "../components/chat-section";
import { getServerSession } from "next-auth";
import LogoutButton from "../components/buttons/LogoutButton";
import ToggleButton from "../components/buttons/ToggleButton";
import Link from "next/link";


export default async function Disclaimer() {
  const session = await getServerSession();
  return (
    <main className=" w-full">
      
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">
  <div className="bg-white  dark:bg-blue-950 dark:border-gray-800 w-20 flex-shrink-0 border-r border-gray-200 flex-col hidden sm:flex">
    <div className="h-16 text-blue-500 flex items-center justify-center">
    

    </div>
    <div className="flex mx-auto flex-grow mt-4 flex-col  text-gray-400 space-y-4">
      {/* home */}
      <Link href="/home">
      <button className="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center" >
        <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </button>
      </Link>
      
      <Link href="/disclaimer">
      <button    className="h-10 w-12 dark:bg-gray-700 dark:text-white rounded-md flex items-center justify-center bg-blue-100 text-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
</svg>

      </button>
      </Link>

      <Link href="/future">
      <button className="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
</svg>


      </button>
      </Link>
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
            <a href="#" className="px-3 border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white pb-1.5">Disclaimer</a>
            
          </div>
        </div>
        <div className="sm:p-7 p-4">
        <h4 className="font-bold text-3xl mb-4">Disclaimer</h4>
      
        <p>Welcome to BarristerBot, a web application designed to provide general legal guidance and information. Please read the following disclaimer carefully before using this service:</p>

        <p><strong>1. General Legal Information:</strong> BarristerBot provides general legal information and guidance based on its programming and data sources. It is not a substitute for professional legal advice tailored to your specific circumstances. For detailed legal advice, consultation, and representation, please seek the services of a qualified attorney.</p>

        <p><strong>2. No Attorney-Client Relationship:</strong> The use of BarristerBot does not create an attorney-client relationship between you and any legal professional or between you and the developers of this application. Any information or guidance provided by BarristerBot should be considered general in nature.</p>

        <p><strong>3. Accuracy and Reliability:</strong> While we strive to ensure the information provided by BarristerBot is accurate and up-to-date, the law is continually evolving. The information from BarristerBot may not always reflect the latest legal developments or interpretations. We strongly recommend verifying any information obtained from BarristerBot with a qualified legal professional.</p>

        <p><strong>4. User Responsibility:</strong> Users of BarristerBot are responsible for their own actions and decisions based on the information provided by the app. BarristerBot and its developers are not responsible for any actions taken or not taken based on the guidance offered by the app.</p>

        <p><strong>5. No Intent to Harm:</strong> BarristerBot is designed to assist users in understanding general legal concepts and issues. It is not intended to cause harm, mislead, or provide malicious advice. If you encounter any inappropriate or harmful advice, please contact us immediately so we can address the issue.</p>

        <p><strong>6. Limitation of Liability:</strong> To the fullest extent permitted by law, BarristerBot and its developers disclaim any and all liability for any loss or damage arising from the use or misuse of the information provided by the app. This includes, but is not limited to, direct, indirect, incidental, punitive, and consequential damages.</p>

        <p><strong>7. Updates and Changes:</strong> The information and functionality provided by BarristerBot may be updated or changed at any time without notice. Users are encouraged to verify information with a legal professional and not rely solely on the app for legal decisions.</p>

        <p>By using BarristerBot, you acknowledge and agree to this disclaimer and accept that the use of the app is at your own risk. If you have any questions or concerns, please do not hesitate to contact us for further clarification.</p>

        <p>Thank you for using BarristerBot.</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </main>
  );
}
