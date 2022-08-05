/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    
    <div class={tw`flex flex-col min-h-screen`}>
      <div class={tw`flex justify-end bg-purple-200 items-center`}>
       <section class={tw`w-full min-h-screen flex justify-center items-center flex-col bg-purple-200`}>
        <p class={tw`text-3xl pb-10 font-bold`}>Ancient Futures</p>
        <a href="/" class={tw`border-1 border-black inline-flex items-center h-10 px-4 m-4 text-black bg-transparent rounded hover:bg-white`}>
        Documentation
       </a>
      </section>
      </div>
      <footer class={tw`border-t-2 border-gray-200 bg-gray-100 h-32 flex flex-col gap-4 justify-center`}>
        <div class={tw`text-center`}>
           © 2022 Ancient Futures
        </div>
       
      </footer>
    </div>
    
  );
}
