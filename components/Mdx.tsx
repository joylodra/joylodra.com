import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Link from "next/link";

type Props = {
  code: string;
};

const CustomLink = (props: any) => {
  const href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const RoundedImage = (props: any) => {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
};

function Callout(props: any) {
  return (
    <div
      className="flex bg-neutral-100 dark:bg-neutral-900
            border border-neutral-200 dark:border-neutral-800 rounded-lg p-4"
    >
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

const components = {
  a: CustomLink,
  Image: RoundedImage,
  Callout,
};

const Mdx = ({ code }: Props) => {
  const MDXContent = useMDXComponent(code);
  return (
    <>
      <MDXContent components={{ ...components }} />
    </>
  );
};

export default Mdx;
