import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsArrowUpRight,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

export const metadata: Metadata = {
  title: "about me",
  description: "full-stack developer, reader, & startup founder",
  keywords: ["startup founder", "reader", "full-stack developer"],
};

const About = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-serif tracking-tighter">about me</h1>

      <p>
        It's great to have you here on my personal page. I'm currently on an
        exciting entrepreneurship journey in building an influencer marketing
        platform, connecting brands and influencers to work together.
      </p>

      <hr className="dark:opacity-25" />

      <p>
        When it comes to coding, there's nothing that excites me more than
        full-stack development. Thank God, I discovered Next.js along the way.
        What sets Next.js apart is its focus on the developer experience. And
        with its support for TypeScript and React, I can write safer, more
        maintainable code that's easier to debug and scale.
      </p>

      <p>
        But what really makes Next.js special is how fast it enables me to ship
        products to customers
      </p>

      <p>
        I know there is not much to say, but i'm going to keep on updating this
        page as life goes on 😊. Oh, I'm always happy to connect with
        like-minded individuals, so feel free to reach out to me on any social
        media platform or via email at joylodra@gmail.com
      </p>

      <div className="grid grid-cols-1 gap-2 mt-5 md:grid-cols-3">
        <Link
          rel="noopener noreferrer"
          target="_blank"
          className="flex justify-between items-center border border-black dark:border-white border-opacity-25 
          rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-[#262626] transition-all"
          href="https://twitter.com/joylodra"
        >
          <div className="flex items-center gap-2">
            <BsTwitter /> Twitter
          </div>
          <BsArrowUpRight />
        </Link>

        <Link
          rel="noopener noreferrer"
          target="_blank"
          className="flex justify-between items-center border border-black dark:border-white border-opacity-25 
          rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-[#262626] transition-opacity"
          href="https://instagram.com/joylodra"
        >
          <div className="flex items-center gap-2">
            <BsInstagram /> Instagram
          </div>
          <BsArrowUpRight />
        </Link>

        <Link
          rel="noopener noreferrer"
          target="_blank"
          className="flex justify-between items-center border border-black dark:border-white border-opacity-25 
          rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-[#262626] transition-opacity"
          href="https://youtube.com/@joylodra"
        >
          <div className="flex items-center gap-2">
            <BsYoutube /> YouTube
          </div>
          <BsArrowUpRight />
        </Link>

        <Link
          rel="noopener noreferrer"
          target="_blank"
          className="flex justify-between items-center border border-black dark:border-white border-opacity-25 
          rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-[#262626] transition-opacity"
          href="https://github.com/joylodra"
        >
          <div className="flex items-center gap-2">
            <BsGithub /> GitHub
          </div>
          <BsArrowUpRight />
        </Link>

        <Link
          rel="noopener noreferrer"
          target="_blank"
          className="flex justify-between items-center border border-black dark:border-white border-opacity-25 
          rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-[#262626] transition-opacity"
          href="https://linkedin.com/in/joylodra"
        >
          <div className="flex items-center gap-2">
            <BsLinkedin /> LinkedIn
          </div>
          <BsArrowUpRight />
        </Link>
      </div>
    </div>
  );
};

export default About;
