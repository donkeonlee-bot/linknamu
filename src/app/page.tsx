import LinkCard, { type Platform } from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";

const profile = {
  name: "이개발",
  bio: "사업관리운영자 요즘에는 AI orchestration에 관심이 많아요",
  image: "/profile-photo.png",
};

const links: { id: number; title: string; platform: Platform; url: string }[] = [
  { id: 1, title: "블로그", platform: "blog", url: "https://example.com/blog" },
  { id: 2, title: "Email", platform: "email", url: "mailto:donkeon.lee@gmail.com" },
  { id: 3, title: "GitHub", platform: "github", url: "https://github.com" },
  { id: 4, title: "LinkedIn", platform: "linkedin", url: "https://www.linkedin.com/in/donkeon-lee-0464521b6/?isSelfProfile=true" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-8 px-5 py-12">
      <ProfileHeader name={profile.name} bio={profile.bio} imageSrc={profile.image} />
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
