import { motion } from "framer-motion";
import Section from "./Section";
import Heading from "./Heading";

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    price: "$890",
    days: "5 days",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80",
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    price: "$1,240",
    days: "7 days",
    img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80",
  },
  {
    id: 3,
    name: "Bali, Indonesia",
    price: "$650",
    days: "6 days",
    img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80",
  },
  {
    id: 4,
    name: "Reykjavik, Iceland",
    price: "$1,050",
    days: "4 days",
    img: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=600&q=80",
  },
  {
    id: 5,
    name: "Marrakech, Morocco",
    price: "$720",
    days: "5 days",
    img: "https://images.unsplash.com/photo-1597212720158-3e9a8a7f6b87?w=600&q=80",
  },
  {
    id: 6,
    name: "Queenstown, New Zealand",
    price: "$1,380",
    days: "8 days",
    img: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=600&q=80",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: function (i) {
    return { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } };
  },
};

export default function Destinations() {
  return (
    <Section id="destinations">
      <Heading
        tagline="Trending now"
        title="Where travelers are going this season"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map(function (item, i) {
          return (
            <motion.div
              key={item.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-n-9 via-n-9/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h5 className="h5 mb-1">{item.name}</h5>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-n-2">{item.days}</span>
                  <span className="text-lg font-bold text-gradient">
                    {item.price}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
