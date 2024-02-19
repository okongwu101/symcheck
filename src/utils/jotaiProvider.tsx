'use client'


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { ReactNode } from "react"
import { Provider } from "jotai";
import NotificationProvider from "./notificationProvider";



export default function Providers({ children }: { children: ReactNode }) {

  



  // define a default query function for react query
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: async ({ queryKey: [url] }) => {
          // narrow the type of url to string so that we can work with it
          if (typeof url === "string") {
            const { data } = await axios.get(`${url}`
            );
            return data;
          }
          throw new Error("Invalid QueryKey");
        },
      },
    },
  });


  

  return (
    <>
      <QueryClientProvider client={queryClient}>
       
        <Provider>

          <NotificationProvider>
            {children}
          </NotificationProvider>

         




        </Provider>




      </QueryClientProvider>
    </>
  )
}