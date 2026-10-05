import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  imageSrc: string;
};

export default function ProfileHeader({ name, bio, imageSrc }: Props) {
  return (
    <header className="flex flex-col items-center gap-3 text-center">
      <Image
        src={imageSrc}
        alt={`${name} 프로필 사진`}
        width={112}
        height={112}
        priority
        className="h-28 w-28 rounded-2xl object-cover ring-2 ring-zinc-300 dark:ring-zinc-700"
      />
      <h1 className="text-3xl font-bold">{name}</h1>
      <p className="text-xl text-zinc-600 dark:text-zinc-400">{bio}</p>
    </header>
  );
}
