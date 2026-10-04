import LinkCard, { type Platform } from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

const profile = {
  name: "김클로드",
  bio: "세계최강 바이브코더",
};

const links: { id: number; title: string; platform: Platform; url: string }[] = [
  { id: 1, title: "블로그", platform: "blog", url: "https://example.com/blog" },
  { id: 2, title: "인스타그램", platform: "instagram", url: "https://instagram.com" },
  { id: 3, title: "GitHub", platform: "github", url: "https://github.com" },
  { id: 4, title: "LinkedIn", platform: "linkedin", url: "https://www.linkedin.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-8 px-5 py-12">
      <ProfileHeader name={profile.name} bio={profile.bio} />
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard title={link.title} url={link.url} platform={link.platform} />
          </li>
        ))}
      </ul>
    </main>
  );
}
