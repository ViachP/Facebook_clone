import Image from "next/image";

function StoryCard({ name, src }) {
  return (
    <div className="relative w-16 h-16 md:w-20 md:h-24 lg:w-28 lg:h-56">
      <Image
        className="object-cover brightness-80 rounded-3xl cursor-pointer hover:scale-105 transition duration-200 ease-in shadow-none  hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/30"
        src={src}
        alt={name}
        loading='lazy'
        fill
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
      <div className="absolute bottom-0 left-0 right-0 text-white text-center p-2 hidden lg:block">{name}</div>
    </div>
  );
}

export default StoryCard;
