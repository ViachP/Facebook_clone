import Image from "next/image";

function StoryCard({ name, src }) {
  return (
    <div className="relative w-16 h-16 md:w-20 md:h-24 lg:w-28 lg:h-56 xl:w-32 xl:h-64">
      <Image
        className="object-cover brightness-80 rounded-3xl"
        src={src}
        alt="small_image"
        loading='lazy'
        fill
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
    </div>
  );
}

export default StoryCard;
