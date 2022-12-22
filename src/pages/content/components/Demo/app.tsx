import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    console.log("content view loaded");
  }, []);

  return <div className="w-screen h-screen bg-blue-300">content view</div>;
}
