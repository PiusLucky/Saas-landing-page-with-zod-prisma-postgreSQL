import { toast } from "@/components/ui/use-toast";

type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";

interface RequestOptions {
  method?: RequestMethod;
  body?: any;
}

async function makeApiCallService<T>(
  url: string,
  options: RequestOptions = {}
): Promise<T | void> {
  try {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    // Include Bearer token in the Authorization header if provided
    const localStorageToken = localStorage.getItem("TOKEN");
    if (localStorageToken) {
      headers["Authorization"] = `Bearer ${localStorageToken}`;
    }

    const response = await fetch(url, {
      method: options.method || "GET",
      headers,
      body: JSON.stringify(options.body),
    });

    if (!response.ok) {
      const res = await response.json();

      if (res?.response?.meta?.message === "jwt expired") {
        window.location.replace("/login");
      }

      toast({
        variant: "destructive",
        title: "Error",
        description: res?.response?.meta?.message,
      });

      return;
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    toast({
      title: "API Service error",
      description: `An error occurred while making the API call: ${
        ((error as unknown) as any)?.message
      }`,
    });

    return;
  }
}

export default makeApiCallService;
