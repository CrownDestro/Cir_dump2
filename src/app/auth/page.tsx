import logo from "@/assets/images/logo.png";
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LoginScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-[35vw]">
      <Image src={logo} alt="logo" className="mx-auto mb-4"></Image>
        <CardHeader className="">
          <CardTitle className="text-center font-nunito text-3xl font-normal pt-3">Login To Your Account</CardTitle>
        </CardHeader>
        <CardContent>
        <form className="space-y-4">
            <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            Amrita Mail ID
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your Amrita Mail ID"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button type="submit" className="w-full mt-4 bg-primary">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
