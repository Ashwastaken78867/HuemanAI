
import { useState } from "react";
import { ChevronDown } from "lucide-react";
type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question:
      "How does the automated interview scheduling software for hotels handle last-minute cancellations or shifts?",
    answer:
      "The AI automatically identifies the next available slot and manager, immediately offering new times via SMS or email without recruiter intervention. This ensures no candidate is lost due to scheduling conflicts and maintains momentum in the hiring process.",
  },
  {
    question:
      "Is the AI voice interviewer for hospitality recruitment compliant with UK hiring regulations?",
    answer:
      "Yes. The AI is designed for UK GDPR compliance and uses structured, unbiased questions to ensure fairness. This removes unconscious bias and is particularly crucial for high-volume roles like hotel front desk staff.",
  },
  {
    question:
      "Can HuemanAI scale efficiently to handle high volume hiring software for restaurants UK during peak seasons?",
    answer:
      "Absolutely. The platform is built specifically for seasonal surges, interviewing thousands of candidates concurrently across multiple restaurant locations. Operating 24/7, it ensures rapid staffing without increasing recruiter headcount.",
  },
  {
    question:
      "What is the average reduction in time-to-hire achieved by hotel teams using the Suite?",
    answer:
      "Our clients typically see a 50% to 75% reduction in time-to-hire, allowing them to fill essential roles in days rather than weeks, dramatically reducing business impact.",
  },
  {
    question:
      "Does the system integrate with existing Applicant Tracking Systems or HRIS solutions?",
    answer:
      "Yes, we offer seamless, low-code integration with all major hospitality ATS platforms and HRIS systems. This ensures smooth data transfer without disrupting workflows.",
  },
  {
    question:
      "How does the AI assess candidate skills required for guest-facing roles like concierge or front desk?",
    answer:
      "The AI evaluates verbal communication clarity, confidence, tone, and scenario-based responses such as handling guest complaints. It combines these with experience and qualifications to provide objective hiring insights.",
  },
];

function FAQCard({
  item,
  isOpen,
  onClick,
}: {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 
      ${
        isOpen
          ? "border-emerald-400 bg-emerald-50"
          : "border-gray-200 bg-white hover:border-gray-300"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="text-[17px] font-medium text-gray-800">
          {item.question}
        </span>

        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`px-6 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed text-[15px]">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Everything you need to know about the unified AI operating system
            for hospitality.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-5">
          {faqData.map((item, index) => (
            <FAQCard
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}