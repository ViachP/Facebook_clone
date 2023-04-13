import StoryCard from "./StoryCard"

const stories = [
    {
        name: "Elon Mask",
        src: "https://i.ibb.co/6gWv5ST/Elon.jpg",
    },
    {
        name: "Jeff Bezoz",
        src: "https://i.ibb.co/Ntf3Vmy/Bezos.jpg",
    },
    {
        name: "Mark Zuckerberg",
        src: "https://i.ibb.co/MPXh8Lw/Mark.jpg",
    },
    {
        name: "Bill Gates",
        src: "https://i.ibb.co/XSW6zkG/Bill.jpg",
    },
]

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
        {stories.map(story => (
            <StoryCard key={story.src} name={story.name} src={story.src} />
        ))}
    </div>
  )
}

export default Stories