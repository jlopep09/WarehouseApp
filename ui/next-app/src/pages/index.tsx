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

      <main className="flex flex-col items-center justify-start align-top h-lvh w-full min-w-xs">
        
        
        <CustomNavbar></CustomNavbar>
        <HomeWhFilter></HomeWhFilter>
        <HomeAllItems></HomeAllItems>
      </main>
      
      
    </div>
  );
}
 function HomeWhFilter() {
  return (
    <Card className="w-full max-w-11/12 mt-5 gap-0">
      <CardHeader>
        <CardTitle className="mb-3">Containers</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row w-full justify-between gap-3">
        <section className="flex flex-col w-full gap-3">
          <WhMiniCard></WhMiniCard>
          <WhMiniCard></WhMiniCard>
        </section>
        <section className="flex flex-col w-full gap-3">
          <WhMiniCard></WhMiniCard>
          <WhMiniCard></WhMiniCard>
        </section>
        <section className="flex flex-col w-full gap-3">
          <WhMiniCard></WhMiniCard>
          <WhMiniCard></WhMiniCard>
        </section>
        
      </CardContent>
      <Button className="w-30 m-auto mt-0">+</Button>
      
    </Card>
  )
}

 function HomeAllItems() {
  return (
    <Card className="w-full max-w-11/12 mt-5 gap-0">
      <CardHeader>
        <CardTitle className="mb-3 flex flex-row justify-between text-center"><span className="flex flex-col justify-center">Items</span> <Button>Filter</Button></CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row w-full justify-between gap-3">
        <section className="flex flex-col w-full gap-3">
          <ItemMiniCard></ItemMiniCard>
          <ItemMiniCard></ItemMiniCard>
        </section>
        <section className="flex flex-col w-full gap-3">
          <ItemMiniCard></ItemMiniCard>
          <ItemMiniCard></ItemMiniCard>
        </section>
        <section className="flex flex-col w-full gap-3">
          <ItemMiniCard></ItemMiniCard>
          <ItemMiniCard></ItemMiniCard>
        </section>
        
      </CardContent>
      <Button className="w-30 m-auto mt-0">+</Button>
      
    </Card>
  )
}

 
 function WhMiniCard() {
   return (
     <article className="w-full min-h-30 ">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Warehouse </CardTitle>
          <CardDescription className="flex flex-row gap-4 justify-between"><span>nº 72610367</span><span>3 items stored</span></CardDescription>
        </CardHeader>
        
        
      </Card>
      </article>
   )
 }
 function ItemMiniCard() {
   return (
     <article className="w-full min-h-30 ">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Item name </CardTitle>
          <CardDescription className="flex flex-row gap-4 justify-between"><span>Ref: i7160ad6</span></CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full h-48 bg-black flex items-center justify-center">
            <img
              src="https://github.com/jlopep09.png"
              className="h-full w-full object-cover"
            />
          </div>
        </CardContent>
        
      </Card>
      </article>
   )
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

