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
        hey there, my name is joy. it's great to have you here on my personal
        page. i'm currently on an exciting entrepreneurship journey in the
        startup game. my ultimate goal? freedom of{" "}
        <b>time, money, and location</b>.
      </p>

      <p>
        glad you got to this page because the image below showcases my ups and
        downs so far:
      </p>

      <Image
        className="rounded-lg"
        src="/images/assets/journey.png"
        alt="my life journey"
        width={1600}
        height={840}
      />

      <hr className="mt-5 mb-5 dark:opacity-25" />

      <p>
        when it comes to coding, there's nothing that excites me more than
        full-stack development. i really enjoy working with <b>Next.js</b> for
        building web applications, and i find <b>React Native</b> to be a
        fantastic tool for mobile app development.
      </p>

      <p>
        i know there is not much to say, but i'm going to keep on updating this
        page as life goes on 😊
      </p>

      <p>
        feel free to hit me up by clicking on one of the links below or send me
        an email to joylodra@gmail.com
      </p>

      <div className="grid grid-cols-1 gap-2 mt-5 md:grid-cols-3">
        <Link
          rel="noopener noreferrer"
          target="_blank"
          className="flex justify-between items-center border border-black dark:border-white border-opacity-25 
          rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-[#262626] transition-opacity"
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
