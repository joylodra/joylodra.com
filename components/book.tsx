import Link from "next/link";
import {
  BsArrowUpRight,
  BsBook,
  BsPrinter,
  BsHeadphones,
  BsLink,
} from "react-icons/bs";

interface Props {
  title: string;
  author: string;
  desc: string;
  printLink?: string;
  eBookLink?: string;
  audioBookLink?: string;
  shopeeLink?: string;
}

const Book = ({
  title,
  author,
  desc,
  printLink,
  eBookLink,
  audioBookLink,
  shopeeLink,
}: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <h4 className="text-sm opacity-50 capitalize italic">by {author}</h4>
      </div>

      <p className="opacity-50">{desc}</p>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
        {shopeeLink && (
          <Link
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center p-2 border border-black dark:border-white border-opacity-25
          rounded-lg justify-between gap-2 hover:bg-neutral-100 dark:hover:bg-[#262626] transition-opacity"
            href={shopeeLink}
          >
            <div className="flex items-center gap-2">
              <BsLink />
              get it here
            </div>
            <BsArrowUpRight />
          </Link>
        )}

        {printLink && (
          <Link
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center p-2 border border-black dark:border-white border-opacity-25
          rounded-lg justify-between gap-2 hover:bg-neutral-100 dark:hover:bg-[#262626] transition-opacity"
            href={printLink}
          >
            <div className="flex items-center gap-2">
              <BsPrinter />
              print
            </div>
            <BsArrowUpRight />
          </Link>
        )}

        {eBookLink && (
          <Link
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center p-2 border border-black dark:border-white border-opacity-25
          rounded-lg justify-between gap-2 hover:bg-neutral-100 dark:hover:bg-[#262626] transition-opacity"
            href={eBookLink}
          >
            <div className="flex items-center gap-2">
              <BsBook />
              e-book
            </div>
            <BsArrowUpRight />
          </Link>
        )}

        {audioBookLink && (
          <Link
            rel="noopener noreferrer"
            target="_blank"
            className="flex items-center p-2 border border-black dark:border-white border-opacity-25
          rounded-lg justify-between gap-2 hover:bg-neutral-100 dark:hover:bg-[#262626] transition-opacity"
            href={audioBookLink}
          >
            <div className="flex items-center gap-2">
              <BsHeadphones />
              audiobook
            </div>
            <BsArrowUpRight />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Book;
