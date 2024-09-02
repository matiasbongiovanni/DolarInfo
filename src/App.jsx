import Home from "./pages/Home";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  return (
    <>
    <Home />
    <Analytics />
    <SpeedInsights />
    </>
    
  )
}