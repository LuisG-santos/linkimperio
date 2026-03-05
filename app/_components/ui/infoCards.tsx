import Image from "next/image";
import { Button } from "./button";
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from "./dialog";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { title } from "process";
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
  ];

  const price = "R$20,00";
  const ervasData = [
    {
      title: "Pura folha",
      imgUrl: "purafolha.jpg",
    },
    {
      title: "Energético",
      imgUrl: "energetico.jpg",
    },
    {
      title: "Burrito",
      imgUrl: "burrito.jpg",
    },
    {
      title: "Menta boldo",
      imgUrl: "mentaboldo.jpg",
    },
    {
      title: "Menta",
      imgUrl: "menta.jpg",
    },
    {
      title: "Menta limão",
      imgUrl: "mentalimao.jpg",
    },
    {
      title: "Menta Xtreme",
      imgUrl: "mentaxtreme.jpg",
    },
    {
      title: "Hortelã ice",
      imgUrl: "hortelaice.jpg",
    },
    {
      title: "Limão",
      imgUrl: "limao.jpg",
    },
  ];
  return (
    <>
      {data.map((item, index) => (
        <div className="flex flex-col justify-start p-2" key={index}>
          <Button
            key={index}
            className={`${item.color} justify-start h-20 hover:opacity-75 hover:${item.color}`}
          >
            <img src={item.icon} alt={item.title} className="w-8 h-8" />
            {item.title && (
              <a
                href={item.href}
                className="text-lg text-white font-bebas-neue"
              >
                {item.title}
              </a>
            )}
          </Button>
        </div>
      ))}

      <div className="flex flex-col justify-start p-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className={`bg-yellow-400 font-bebas-neue text-lg justify-start h-20 hover:bg-yellow-400 hover:opacity-75`}
            >
              <img src="/catalogo.png" alt="catalogo" className="w-8 h-8" />
              Catálogo
            </Button>
          </DialogTrigger>

          <DialogContent className="grid grid-cols-2 max-h-[90vh] pt-16 overflow-y-auto">
            
            {ervasData.map((item, index) => (
              <Card key={index}>

                <CardHeader className="flex border-b rounded-lg justify-center h-3"><h1 className="text-lg justify-center font-bebas-neue">{item.title}</h1></CardHeader>

                <CardContent className="p-5">

                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="h-full w-full"
                  ></img>
                </CardContent>

                <CardFooter className="border-t flex justify-center border-zinc-200"><h2 className="text-2xl justify-center font-bebas-neue">{price}</h2></CardFooter>

              </Card>
            ))}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default InfoCards;
