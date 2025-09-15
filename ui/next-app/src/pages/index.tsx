import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { IoCart } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaHeart } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Warehouse App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-start align-top h-lvh w-full">
        
        
        <CustomNavbar></CustomNavbar>
      </main>
      
      
    </div>
  );
}




 function CustomNavbar() {
  return (
    <Card className="w-full max-w-11/12 mt-5">
      
      <CardContent className="flex flex-row w-full justify-between ">
        <h1 className="font-bold text-2xl"><span>W</span><span>house</span></h1>
        <div className="flex flex-row w-full justify-end gap-4">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback ><FaHeart className="h-full w-full m-1.5"/></AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback ><IoCart className="h-full w-full m-1"/></AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/jlopep09.png" />
            <AvatarFallback>Account</AvatarFallback>
          </Avatar>
        </div>
      </CardContent>
      
    </Card>
  )
}


 const CustomFooter = () => {
  return (
    <footer className={styles.footer }>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
  )
}

