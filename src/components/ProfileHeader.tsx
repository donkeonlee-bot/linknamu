type Props = {
  name: string;
  bio: string;
};

export default function ProfileHeader({ name, bio }: Props) {
  return (
    <header className="flex flex-col items-center gap-3 text-center">
      <div
        className="h-28 w-28 rounded-2xl bg-zinc-200 ring-2 ring-zinc-300 dark:bg-zinc-800 dark:ring-zinc-700"
        role="img"
        aria-label={`${name} 프로필 사진`}
      />
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{bio}</p>
    </header>
  );
}
