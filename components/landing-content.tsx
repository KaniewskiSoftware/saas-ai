"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "John Doe",
    avatar: "JD",
    title: "CEO of Company A",
    description: "This is the best product ever!",
  },
  {
    name: "Jane Smith",
    avatar: "JS",
    title: "Chief Marketing Officer (CMO) of Company B",
    description:
      "Passionate about creating unforgettable brand experiences and connecting with customers.",
  },
  {
    name: "Michael Johnson",
    avatar: "MJ",
    title: "CFO of Company C",
    description:
      "Dedicated to optimizing financial strategies and driving sustainable growth.",
  },
  {
    name: "Emily Brown",
    avatar: "EB",
    title: "Lead Software Engineer at Tech Co. X",
    description:
      "Innovating through code and building solutions to real-world challenges.",
  },
  {
    name: "Alex Williams",
    avatar: "AW",
    title: "Head of Design at Startup Y",
    description:
      "Transforming ideas into stunning visual experiences that leave a lasting impact.",
  },
  {
    name: "Sarah Lee",
    avatar: "SL",
    title: "Director of Human Resources at Company Z",
    description:
      "Building a diverse and inclusive workplace where every employee can thrive.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4l text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 sd:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
