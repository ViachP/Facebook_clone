import Image from "next/image"

function StoryCard({name,src, profile}) {
  return (
    <div className="relative h-14 w-14">
        <Image 
        className=" absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
        src={profile}
        width={40}
        height={40}
        alt="story_image"
        />
        {/* <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl" 
        src={src}
        alt="small_image"
        /> */}
    </div>
  )
}

export default StoryCard