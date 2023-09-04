import { Metadata } from "next";
import Book from "@components/book";

export const metadata: Metadata = {
  title: "books",
  description:
    "recommended self-help books i read during to improve my life in every aspect.",
  keywords: ["self-help books", "read", "reading habits"],
};

const Books = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-serif tracking-tighter font-bold">
        books i recommend 📚
      </h1>

      <Book
        title={"deep work"}
        author={"cal newport"}
        desc={
          "this book changed my mindset about the importance of the ability to focus."
        }
        shopeeLink="https://shope.ee/qEEPWsxQQ"
      />

      <hr className="dark:opacity-25 mt-5 mb-5" />

      <Book
        title={"the lean startup"}
        author={"Eric Ries"}
        desc={"the first book that got me interested into building a startup."}
        shopeeLink="https://shope.ee/AUOjv9CibQ"
      />

      <hr className="dark:opacity-25 mt-5 mb-5" />

      <Book
        title={"atomic habits"}
        author={"James Clear"}
        desc={"this book literally helped me double my productivity."}
        shopeeLink="https://shope.ee/2L32BvQvJg"
      />

      <hr className="dark:opacity-25 mt-5 mb-5" />

      <Book
        title={"psychology of money"}
        author={"Morgan Housel"}
        desc={"this book gave me different perspectives about money."}
        shopeeLink="https://shope.ee/2pzImxZOKv"
      />

      {/* <Book
        title={"deep work"}
        author={"cal newport"}
        desc={
          "this book changed my mindset about the importance of the ability to focus."
        }
        printLink={"https://amzn.to/3J5gEcX"}
        eBookLink={"https://amzn.to/3YAGhYS"}
        audioBookLink={"https://amzn.to/3JrDdKq"}
      />

      <hr className="dark:opacity-25 mt-5 mb-5" />

      <Book
        title={"the minimalist entrepreneur"}
        author={"saahil lavingia"}
        desc={
          "the minimalist entrepreneur approach to building a startup is just exceptional."
        }
        printLink={"https://amzn.to/3mCq4W7"}
        eBookLink={"https://amzn.to/3F5rwGz"}
        audioBookLink={"https://amzn.to/3Jt11he"}
      />

      <hr className="dark:opacity-25 mt-5 mb-5" />

      <Book
        title={"the coaching habit"}
        author={"Michael Bungay Stanier"}
        desc={
          "the points in the book truly changed the way I interact with other people."
        }
        printLink={"https://amzn.to/3kXxSRB"}
        eBookLink={"https://amzn.to/3yrIHPc"}
        audioBookLink={"https://amzn.to/3yoTcm9"}
      />

      <hr className="dark:opacity-25 mt-5 mb-5" />

      <Book
        title={"the lean startup"}
        author={"Eric Ries"}
        desc={"the first book that got me interested into building a startup."}
        printLink={"https://amzn.to/3kXxSRB"}
        eBookLink={"https://amzn.to/3yrIHPc"}
        audioBookLink={"https://amzn.to/3yoTcm9"}
      /> */}
    </div>
  );
};

export default Books;
