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
        hey there, i'm joy. i graduated with a computer science degree, and i
        used to work at Microsoft as a QA Engineer working on Skype and Teams.
        right now, i am actively pursuing entrepreneurship by building a
        startup.
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
            18 repos all time
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
        although my previous role was as a QA Engineer, i have a strong passion
        for full-stack development and building products, which i continue to
        pursue as a startup founder.
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
