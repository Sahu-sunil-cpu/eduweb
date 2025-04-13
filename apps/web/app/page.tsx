import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";



export default function Home() {
  return (
    <div>
     <Dashboard/>
    </div>
  );
}
