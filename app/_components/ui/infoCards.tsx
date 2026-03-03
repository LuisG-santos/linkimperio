import { Button } from "./button";
const InfoCards = () => {
  const data = [
    {
      title: "Fale com a gente pelo WhatsApp",
      href: "http://Wa.me/5518991968276",
      icon: "/whatsapp.png",
      color: "bg-green-500",
    },

    {
      title: "Siga no Instagram",
      href: "https://www.instagram.com/imperiodaservas?igsh=MWdudW4weTJiaWwxOQ==",
      icon: "/instalogo3.png",
      color: "bg-gradient-to-r from-pink-500 to-yellow-500",
    },

    {
      title: "Catálogo",
      href: "#",
      icon: "/catalogo.png",
      color: "bg-yellow-500",
    },
  ];
  return (
    <>
      {data.map((item, index) => (
        <div className="flex flex-col justify-start p-2" key={index}>
          <Button key={index} className={`${item.color} justify-start h-20 hover:opacity-75 hover:${item.color}`} >
            <img src={item.icon} alt={item.title} className="w-8 h-8" />
            {item.title && (
              <a href={item.href} className="text-lg text-white">
                {item.title}
              </a>
            )}
          </Button>
        </div>
      ))}
    </>
  );
};

export default InfoCards;
