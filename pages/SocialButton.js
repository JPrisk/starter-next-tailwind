import Image from "next/image";
export default function SocialButton({source, socialLabel}) {
  return (
    <div className="cursor-pointer bg-off-white text-blue-500 flex p-1 m-1 rounded-full items-center">
      <Image
        src={source}
        alt="Facebook logo"
        className="dark:invert"
        width={20}
        height={20}
        priority
      />
      {socialLabel}
    </div>
  );
}
