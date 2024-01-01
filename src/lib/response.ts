import { NextResponse } from "next/server";

const success_response = (
  data: any,
  message: string = "Success",
  code = 200
) => {
  const response = {
    meta: {
      success: true,
      message,
    },
    data,
  };
  return NextResponse.json({ response }, { status: code });
};

const error_response = (
  message: string = "Error",
  code = 400,
  data: any = null
) => {
  const response = {
    meta: {
      success: false,
      message,
    },
    data,
  };
  return NextResponse.json({ response }, { status: code });
};

export { success_response, error_response };
