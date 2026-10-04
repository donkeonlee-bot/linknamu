import type { IconType } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedinIn, FaPenNib } from "react-icons/fa6";
import { FiChevronRight } from "react-icons/fi";

export type Platform = "blog" | "instagram" | "github" | "linkedin";

const platforms: Record<
  Platform,
  { icon: IconType; badge: string; hover: string }
> = {
  blog: {
    icon: FaPenNib,
    badge: "bg-emerald-500",
    hover: "hover:border-emerald-500",
  },
  instagram: {
    icon: FaInstagram,
    badge: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
    hover: "hover:border-pink-500",
  },
  github: {
    icon: FaGithub,
    badge: "bg-zinc-900 dark:bg-zinc-700",
    hover: "hover:border-zinc-900 dark:hover:border-zinc-400",
  },
  linkedin: {
    icon: FaLinkedinIn,
    badge: "bg-[#0A66C2]",
    hover: "hover:border-[#0A66C2]",
  },
};

type Props = {
  title: string;
  url: string;
  platform: Platform;
};

export default function LinkCard({ title, url, platform }: Props) {
  const { icon: Icon, badge, hover } = platforms[platform];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex w-full items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98] dark:border-zinc-800 dark:bg-zinc-900 ${hover}`}
    >
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl text-white ${badge}`}
      >
        <Icon aria-hidden />
      </span>
      <span className="flex-1 text-base font-semibold">{title}</span>
      <FiChevronRight
        aria-hidden
        className="mr-1 text-xl text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-zinc-700 dark:group-hover:text-zinc-200"
      />
    </a>
  );
}
