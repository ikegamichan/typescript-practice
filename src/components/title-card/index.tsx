import Link from 'next/link';

type Props = {
  primaryTitle: string;
  href: string;
};

export const TitleCard = ({ primaryTitle, href }: Props) => {
  return (
    <Link href={href}>
      <div className="my-auto grid h-24 cursor-pointer items-center rounded-lg border border-gray-300 p-2 text-center shadow-md transition duration-500 ease-in-out hover:bg-gray-100">
        <div className="text-2xl font-bold">{primaryTitle}</div>
      </div>
    </Link>
  );
};
