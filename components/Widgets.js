import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  VideoCameraIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/solid";

const contacts = [
  {
    name: "Elon Mask",
    src: "https://i.ibb.co/6gWv5ST/Elon.jpg",
  },
  {
    name: "Jeff Bezoz",
    src: "https://i.ibb.co/VBQfZXd/Bezos.jpg",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://i.ibb.co/MPXh8Lw/Mark.jpg",
  },
  {
    name: "Bill Gates",
    src: "https://i.ibb.co/XSW6zkG/Bill.jpg",
  },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <MagnifyingGlassIcon className="h-6" />
          <EllipsisHorizontalIcon className="h-6" />
        </div>
      </div>
    </div>
  );
}

export default Widgets;
