import Image from "next/image";

type AvatarCardProps = {
  name: string;
  accountId: string;
  imageSrc: string;
  imageAlt?: string;
};

export default function AvatarCard({
  name,
  accountId,
  imageSrc,
  imageAlt,
}: AvatarCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-muted/40 bg-background/80 px-4 shadow-sm my-4">
      <Image
        src={imageSrc}
        alt={imageAlt ?? name}
        width={64}
        height={64}
        className="h-16 w-16 rounded-full object-cover"
      />
      <div className="space-y-1">
        <p className="text-base font-semibold leading-none">{name}</p>
        <p className="text-sm text-muted-foreground">{accountId}</p>
      </div>
    </div>
  );
}
