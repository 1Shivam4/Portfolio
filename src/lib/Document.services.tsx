interface FormProps {
  endpoint: string;
  formData: Object;
  method: "GET" | "POST";
}
export async function makeRequestWithForm({
  endpoint,
  formData,
  method,
}: FormProps) {
  try {
    const response = await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const responseData = await response.json();

    if (
      !response.ok ||
      responseData?.status === "error" ||
      responseData?.status === "fail"
    ) {
      return {
        status: "error",
        message: responseData.message || `HTTP Error ${response.status}`,
      };
    }

    return responseData;
  } catch (error) {
    return {
      status: "error",
      message: "Something went wrong",
    };
  }
}
