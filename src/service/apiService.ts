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

    const response = await fetch(url, {
      method: options.method || "GET",
      headers,
      body: JSON.stringify(options.body),
    });

    if (!response.ok) {
      const res = await response.json();
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
      title: "You submitted the following values:",
      description: `An error occurred while making the API call: ${
        ((error as unknown) as any)?.message
      }`,
    });

    return;
  }
}

export default makeApiCallService;
