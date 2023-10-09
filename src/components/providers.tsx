'use client'

import { errorMessageAtom, successMessageAtom, infoMessageAtom, warnMessageAtom } from "@/lib/atoms";
import { MantineProvider } from "@mantine/core"
import { Notifications, notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { useAtom } from "jotai";
import { ReactNode, useEffect } from "react"
import { Provider } from "jotai";

export default function Providers({children}: {children: ReactNode}) {

    const [errorMessage, setErrorMessage] = useAtom(errorMessageAtom);
  const [successMessage, setSuccessMessage] = useAtom(successMessageAtom);
  const [infoMessage, setInfoMessage] = useAtom(infoMessageAtom);
  const [warnMessage, setWarnMessage] = useAtom(warnMessageAtom);

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


    useEffect(() => {
        if (successMessage !== "") {
          notifications.show({
            message: `${successMessage}`,
            radius: "4px",
            withBorder: true,
            styles: () => ({
              root: {
                backgroundColor: "",
                paddingLeft: "20px",
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingRight: "20px",
                "&::before": { backgroundColor: "#4ade80" },
              },
              description: {
                color: "#4ade80",
                fontFamily: "monospace",
                fontSize: "14px",
              },
              closeButton: {
                color: "",
                "&:hover": {
                  backgroundColor: "",
                },
              },
            }),
          });
          setTimeout(() => {
            setSuccessMessage("");
          }, 1000);
        }
    
        if (errorMessage !== "") {
          notifications.show({
            message: `${errorMessage}`,
            radius: "4px",
            withBorder: true,
            styles: () => ({
              root: {
                backgroundColor: "",
                paddingLeft: "20px",
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingRight: "20px",
                "&::before": { backgroundColor: "#dc2626" },
              },
              description: {
                color: "#dc2626",
                fontFamily: "monospace",
                fontSize: "14px",
              },
              closeButton: {
                color: "",
                "&:hover": {
                  backgroundColor: "",
                },
              },
            }),
          });
          setTimeout(() => {
            setErrorMessage("");
          }, 1000);
        }
    
        if (infoMessage !== "") {
          notifications.show({
            message: `${infoMessage}`,
            radius: "4px",
            withBorder: true,
            styles: () => ({
              root: {
                backgroundColor: "",
                paddingLeft: "20px",
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingRight: "20px",
                "&::before": { backgroundColor: "#38bdf8" },
              },
              description: {
                color: "#38bdf8",
                fontFamily: "monospace",
                fontSize: "14px",
              },
              closeButton: {
                color: "",
                "&:hover": {
                  backgroundColor: "",
                },
              },
            }),
          });
          setTimeout(() => {
            setInfoMessage("");
          }, 1000);
        }
    
        if (warnMessage !== "") {
          notifications.show({
            message: `${warnMessage}`,
            radius: "4px",
            withBorder: true,
            styles: () => ({
              root: {
                backgroundColor: "",
                paddingLeft: "20px",
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingRight: "20px",
                "&::before": { backgroundColor: "#b45309" },
              },
              description: {
                color: "#b45309",
                fontFamily: "monospace",
                fontSize: "14px",
              },
              closeButton: {
                color: "",
                "&:hover": {
                  backgroundColor: "",
                },
              },
            }),
          });
          setTimeout(() => {
            setWarnMessage("");
          }, 1000);
        }
      }, [
        errorMessage,
        successMessage,
        infoMessage,
        warnMessage,
        setSuccessMessage,
        setErrorMessage,
        setInfoMessage,
        setWarnMessage,
      ]);

    return (
        <>
        <QueryClientProvider client={queryClient}>

          <Provider>
            <MantineProvider withGlobalStyles withNormalizeCSS>
              <Notifications
                position="bottom-left"
                zIndex={2077}
                limit={2}
                autoClose={6000}
              />
              {children}



            </MantineProvider>
          </Provider>
          
            
        
            
        </QueryClientProvider>
        </>
    )
}