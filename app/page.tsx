import Image from "next/image";
import Link from "next/link";
import {
  BsTwitter,
  BsInstagram,
  BsGithub,
  BsArrowUpRight,
  BsYoutube,
} from "react-icons/bs";

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-serif tracking-tighter">joy lodra</h1>

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
        for building web and mobile apps, with expertise in coding and
        development using Next.js, TypeScript, Tailwind CSS, and Prisma. But
        what really drives me is the process of bringing innovative products to
        life for my clients, and exploring the world of entrepreneurship
      </p>

      <div className="flex flex-col gap-3 md:flex-row mt-5">
        <Link
          rel="noopener noreferrer"
          target="_blank"
          className="flex items-center gap-1 opacity-50 hover:opacity-100 hover:underline"
          href="https://twitter.com/joylodra"
        >
          <BsArrowUpRight />
          follow me on twitter
        </Link>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          className="flex items-center gap-1 opacity-50 hover:opacity-100 hover:underline"
          href="https://instagram.com/joylodra"
        >
          <BsArrowUpRight />
          follow me on the gram
        </Link>
      </div>
    </div>
  );
};

export default Home;
