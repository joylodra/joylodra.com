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
  BsWhatsapp,
} from "react-icons/bs";

export const metadata: Metadata = {
  title: "about me",
  description: "full-stack developer, reader, & startup founder",
  keywords: ["startup founder", "reader", "full-stack developer"],
};

const About = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-serif tracking-tighter font-bold">
          services i offer 🛠
        </h1>
        <p>
          Below, you'll discover the services I provide – skills I've honed and
          mastered over several years.
        </p>
        <hr className="dark:opacity-25" />
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold tracking-tighter">
          <span className="text-4xl">1.</span> high-conversion landing page 💰
        </h2>
        <Image
          className="rounded-xl w-full max-w-sm"
          src={"/images/assets/services-landing.png"}
          alt="professional-looking company profile"
          width={400}
          height={400}
        />
        <p className="italic">"I'll Help You Convert Clicks into Customers"</p>
        <p>
          Ready to turn your website visitors into loyal customers? My
          High-Conversion Landing Page service is designed to capture attention
          and drive action. I craft landing pages that not only look great but
          also convert, helping you achieve your marketing goals.
        </p>
        <div className="flex flex-col gap-5 md:flex-row mt-5">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center gap-1 opacity-50 hover:opacity-100 hover:underline"
            href="https://seefluencer.com/cap"
          >
            <BsArrowUpRight />
            landing page portfolio #1
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center gap-1 opacity-50 hover:opacity-100 hover:underline"
            href="https://seefluencer.com/ocwe"
          >
            <BsArrowUpRight />
            landing page portfolio #2
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold tracking-tighter">
          <span className="text-4xl">2.</span> professional-looking company
          profile 🏢
        </h2>
        <Image
          className="rounded-xl w-full max-w-sm"
          src={"/images/assets/services-company.png"}
          alt="professional-looking company profile"
          width={400}
          height={400}
        />
        <p className="italic">"I'll Elevate Your Company's Online Presence"</p>
        <p>
          First impressions count. Make yours unforgettable with my expertise. I
          specialize in creating visually stunning and information-rich
          Professional Company Profiles. Let your digital presence speak volumes
          about your business with my help.
        </p>
        <div className="flex flex-col gap-5 md:flex-row mt-5">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center gap-1 opacity-50 hover:opacity-100 hover:underline"
            href="https://seefluencer.com"
          >
            <BsArrowUpRight />
            company profile portfolio #1
          </Link>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center gap-1 opacity-50 hover:opacity-100 hover:underline"
            href="https://sekilasaja.com"
          >
            <BsArrowUpRight />
            company profile portfolio #2
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold tracking-tighter">
          <span className="text-4xl">3.</span> advanced full-stack web
          development 🌐
        </h2>
        <Image
          className="rounded-xl w-full max-w-sm"
          src={"/images/assets/services-fullstack.png"}
          alt="advanced full-stack web
          development"
          width={400}
          height={400}
        />
        <p className="italic">"Unleash the Power of Next.js"</p>
        <p>
          For cutting-edge web solutions, look no further. My Advanced
          Full-Stack Web Development service harnesses the capabilities of
          Next.js to create high-performance, dynamic websites and web
          applications
        </p>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          className="flex items-center gap-1 opacity-50 hover:opacity-100 hover:underline"
          href="https://sekilasaja.com"
        >
          <BsArrowUpRight />
          full-stack web development portfolio #1
        </Link>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-bold tracking-tighter">
          <span className="text-4xl">4.</span> personal brand consulting 🤳🏽
        </h2>
        <Image
          className="rounded-xl w-full max-w-sm"
          src={"/images/assets/services-content.png"}
          alt="personal brand consulting"
          width={400}
          height={400}
        />
        <p className="italic">
          "I'm here to Unlock the Power of Your Personal Brand"
        </p>
        <p>
          As an experienced manager of Samuel Christ, an influencer with 4.5+
          million followers across various platforms, I understand the
          intricacies of the digital world. My Social Media and Personal
          Branding Consulting service will guide you through the process of
          crafting a compelling online presence that resonates with your
          audience.
        </p>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          className="flex items-center gap-1 opacity-50 hover:opacity-100 hover:underline"
          href="https://instagram.com/samuelchrist"
        >
          <BsArrowUpRight />
          client #1
        </Link>
      </div>

      <div className="flex flex-col gap-5">
        <hr className="dark:opacity-25" />

        <p>
          Oh, feel free to reach out to me on any social media platform using
          the links down below or you can always email at joylodra@gmail.com 🫡
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
    </div>
  );
};

export default About;
