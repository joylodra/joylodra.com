import Image from "next/image";
import Link from "next/link";
import {
  BsTwitter,
  BsInstagram,
  BsGithub,
  BsArrowUpRight,
  BsYoutube,
  BsWhatsapp,
  BsLinkedin,
} from "react-icons/bs";

const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-serif tracking-tighter font-bold">
        joy lodra 👋
      </h1>

      <p>
        Hey there, my name is Joy. A little bit about me, I graduated with a
        computer science degree, and I used to work at Microsoft as a QA
        Engineer. Right now, I am building my own startup in the creator
        economy.
      </p>

      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <Image
          className="rounded-full"
          src={"https://github.com/joylodra.png"}
          alt="profile picture"
          width={120}
          height={120}
        />

        <div className="flex flex-col">
          <Link
            className="flex items-center gap-2 opacity-50 p-1 hover:opacity-100 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/joylodra"
          >
            <BsTwitter /> 10 tweets all time
          </Link>

          <Link
            className="flex items-center gap-2 p-1 opacity-50 hover:opacity-100 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
            href="https://instagram.com/joylodra"
          >
            <BsInstagram /> 4 instagram posts all time
          </Link>

          <Link
            className="flex items-center gap-2 p-1 opacity-50 hover:opacity-100 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/joylodra"
          >
            <BsGithub />
            22 repos all time
          </Link>
          <Link
            className="flex items-center gap-2 p-1 opacity-50 hover:opacity-100 hover:underline"
            href="https://youtube.com/@joylodra"
          >
            <BsYoutube /> 0 youtube video views all time
          </Link>
        </div>
      </div>

      <p>
        Although my previous role was as a QA Engineer, I have a strong passion
        for building web apps, with skill in coding and development using
        Next.js, TypeScript, Tailwind CSS, and Prisma. But what really drives me
        is the process of bringing innovative products to life for my clients,
        and exploring the world of entrepreneurship
      </p>

      <div className="grid grid-cols-1 gap-2 mt-5 md:grid-cols-3">
        <Link
          rel="noopener noreferrer"
          target="_blank"
          className="flex justify-between items-center border border-black dark:border-white border-opacity-25 
          rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-[#262626] transition-all"
          href="https://wa.me/6282330423003"
        >
          <div className="flex items-center gap-2">
            <BsWhatsapp /> Whatsapp
          </div>
          <BsArrowUpRight />
        </Link>

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

export default Home;
