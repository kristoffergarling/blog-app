import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-20 md:p-20 lg:p-40">
        <h1 className="text-primary font-bold text-4xl md:text-6xl lg:text-7xl">
          Frontend Blog
        </h1>
      </div>
      <BlogCard />
    </>
  );
}
