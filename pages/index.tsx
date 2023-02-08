import Head from "next/head";
import Image from "next/image";
import { initFirebase } from "../utils/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard/BlogCard";

export default function Home() {
  const app = initFirebase();
  console.log(app);
  return (
    <>
      <Navbar />
      <main className="container mx-auto xl:max-w-6xl pt-24">
        <h1 className="font-medium text-4xl mb-8">Frontend Blog</h1>
        <BlogCard
          title="This is an article about software engineering"
          date="05 March, 2022"
          imageSource="https://images.unsplash.com/photo-1611688298941-f2a508ee1c9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGJhYmV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
        />
        <BlogCard
          title="Typescript is a language"
          date="06 September, 2022"
          imageSource="https://images.unsplash.com/photo-1517182751830-ffc46df69129?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJhYmV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
        />
        <BlogCard
          title="Sweden is a country"
          date="02 March, 2022"
          imageSource="https://images.unsplash.com/photo-1610559185499-b84f6308e259?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGJhYmV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
        />
        <BlogCard
          title="Cheesedoodles is great"
          date="10 March, 2022"
          imageSource="https://images.unsplash.com/photo-1620313617489-902a1eb0449b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGJhYmV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
        />
      </main>
    </>
  );
}
