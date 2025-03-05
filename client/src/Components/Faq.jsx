import { useState } from "react";

const faqs = [
  {
    question: "What is HTML website design?",
    answer:
      "HTML website design refers to the process of creating a website using HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and sometimes JavaScript. It involves designing the structure, layout, and appearance of a website, ensuring it is user-friendly and responsive.",
  },
  {
    question: "Do I need a custom HTML design, or can I use a template?",
    answer:
      "While templates are an affordable option, custom HTML design allows for a unique website tailored specifically to your brand and needs. Custom designs also provide more flexibility for functionality and future scalability.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes, all websites designed by us are responsive, meaning they automatically adjust to different screen sizes, ensuring a seamless experience on mobile phones, tablets, and desktops.",
  },
  {
    question: "How long does it take to design an HTML website?",
    answer:
      "The time required depends on the complexity of the project. A basic HTML website may take a few days, while a more complex site with advanced features can take several weeks.",
  },
  {
    question: "Can you help with website content?",
    answer:
      "Yes, we offer content creation and editing services, including copywriting, image sourcing, and video integration to make sure your website content is compelling and engaging.",
  },
  {
    question: "Will my website be SEO-friendly?",
    answer:
      "We ensure that your HTML website is built with SEO best practices in mind, such as clean code, fast load times, and proper heading structure. However, ongoing SEO efforts are needed to improve your ranking on search engines.",
  },
  {
    question: "Do I need hosting and a domain for my website?",
    answer:
      "Yes, you will need a hosting provider and a domain name to make your website live. We can recommend hosting options and help set up your domain if needed.",
  },
  {
    question: "Can I make changes to the website after it's launched?",
    answer:
      "Yes, once your website is live, you can make changes. If you prefer, we can also offer maintenance packages to handle updates for you.",
  },
  {
    question: "What is the cost of an HTML website design?",
    answer:
      "The cost varies depending on the scope of the project, the number of pages, and the complexity of the features required. We provide customized quotes based on your specific needs.",
  },
  {
    question: "Do you offer support after the website is launched?",
    answer:
      "Yes, we offer ongoing support to address any issues, provide updates, or assist with any changes you need after your website goes live.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h4 className="text-lg text-gray-500 uppercase">
            Frequently Asked Questions
          </h4>
          <h2 className="text-3xl font-bold text-gray-800">
            Find answers to the most{" "}
            <span className="text-orange-500">common questions</span>
          </h2>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b last:border-none">
              <button
                className="w-100 text-left flex justify-between items-center py-4 px-2 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-700 ">
                  {faq.question}
                </span>
                <span
                  className="text-orange-500 text-2xl"
                  style={{ float: "inline-end" }}
                >
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
