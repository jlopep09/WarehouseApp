import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Warehouse App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-start align-top h-lvh w-full">
        <h1>hola</h1>
        <Button>hola</Button>
      </main>
      
      
    </div>
  );
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

