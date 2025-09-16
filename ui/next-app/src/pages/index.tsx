import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IoCart } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaGithub, FaHeart } from "react-icons/fa";
import { SignedIn, SignInButton, UserButton,SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Warehouse App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-start align-top min-h-lvh w-full min-w-xs ">
        
        
        <CustomNavbar></CustomNavbar>
        <HomeWhFilter></HomeWhFilter>
        <HomeAllItems></HomeAllItems>
      </main>
      <CustomFooter></CustomFooter>
      
    </div>
  );
}
 function HomeWhFilter() {
  return (
    <Card className="w-full max-w-11/12 mt-5 gap-0">
      <CardHeader>
        <CardTitle className="mb-3">Containers</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col  w-full">
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
          <WhMiniCard></WhMiniCard>
          <WhMiniCard></WhMiniCard>
          <WhMiniCard></WhMiniCard>
          <WhMiniCard></WhMiniCard>
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
      <CardContent className="flex flex-col w-full">
        <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
          <ItemMiniCard></ItemMiniCard>
          <ItemMiniCard></ItemMiniCard>
          <ItemMiniCard></ItemMiniCard>
          <ItemMiniCard></ItemMiniCard>
          <ItemMiniCard></ItemMiniCard>
          <ItemMiniCard></ItemMiniCard>
          <ItemMiniCard></ItemMiniCard>
          <ItemMiniCard></ItemMiniCard>
          <ItemMiniCard></ItemMiniCard>
          <ItemMiniCard></ItemMiniCard>
          <ItemMiniCard></ItemMiniCard>
          <ItemMiniCard></ItemMiniCard>
        </section>
        
        
      </CardContent>
      <Button className="w-30 m-auto mt-3">+</Button>
      
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
        <div className="flex flex-row w-full justify-end gap-6">
          <Avatar>
                <AvatarImage src="" />
                <AvatarFallback ><FaHeart className="h-full w-full m-1.5"/></AvatarFallback>
          </Avatar>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <Avatar className="hidden">
            <AvatarImage src="" />
            <AvatarFallback ><IoCart className="h-full w-full m-1"/></AvatarFallback>
          </Avatar>
          
        </div>
      </CardContent>
      
    </Card>
  )
}


 const CustomFooter = () => {
  return (
    <footer className={styles.footer }>
          <div
            
            className="min-w-11/12"
            
          >
            <div className="flex flex-row justify-between min-w-11/12">
              <p className="w-1/3"></p>
              <a
                href="https://github.com/jlopep09/WarehouseApp"
                target="_blank"
                
                
              ><FaGithub className="w-6 h-6 opacity-70"></FaGithub></a>
              <a
                href="https://joselp.com/"
                target="_blank"
                className="w-1/3"
                
              ><p className="w-1/3 text-end text-neutral-500">José Antonio López Pérez </p></a>
              
            </div>
            
          </div>
        </footer>
  )
}

