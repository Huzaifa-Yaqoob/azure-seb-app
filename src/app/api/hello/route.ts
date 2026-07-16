import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Hello from Azure Web App!",
    framework: "Next.js",
    deployedOn: "Azure App Service",
  });
}
