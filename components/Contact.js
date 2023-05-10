import Image from "next/image";

function Contact({ src, name }) {
  return (
    <div className=" flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 ">
      <div  style={{ position: "relative", width: "50px", height: "50px" }}>
        <Image className="rounded-full" src={src} fill="fill" style={{objectFit:"cover"}} alt="contact_image" />
      </div>
      <p>{name}</p>
      <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full"></div>
    </div>
  );
}

export default Contact;
