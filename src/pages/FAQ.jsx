import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import Card from '../components/Card'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Will You Have to pay any charge to work in our company?",
      answer: "No, there is no charges to work in our company."
    },
    {
      question: "Where is our Company Located?",
      answer: "Garh road Jalandhar, Punjab, 144022."
    },
    {
      question: "Do we ever have to go office?",
      answer: "No we never have to go to visit office. it is totally work from home."
    },
    {
      question: "Will you have to give any personal documents to company?",
      answer: "No, you don't have to give any personal documents to us."
    },
    {
      question: "Will CampaignWala Provide Offer Letter and Official ID Card?",
      answer: "Yes, our company (CampaignWala) will provide it's employer their Offer Letter and their Official ID Card."
    },
    {
      question: "How Much you can Earn In CampaignWala?",
      answer: "You can earn unlimited in our company, The harder you work, the more you earn."
    },
    {
      question: "Will CampaignWala Provide Work From Office job or it's only provide work from home job?",
      answer: "We only Provide Work From Home job."
    },
    {
      question: "Why CampaignWala is not giving work from office job?",
      answer: "Our company is not providing work from office job because not all people can go to office daily, for example: Housewife and Students."
    },
    {
      question: "Is there any age limitation to work in CampaignWala?",
      answer: "There is no age limitation to work in our company anyone can work."
    },
    {
      question: "How CampaignWala will pay salary weekly basis or monthly basis?",
      answer: "Our company will give salary on weekly basis as well as on monthly basis it's totally depends on you."
    },
    {
      question: "Is there any need of Laptop or Computer to work in CampaignWala (company)?",
      answer: "No, there is no need of Laptop or Computer to work in our company, You can use smartphone to work in our company."
    },
    {
      question: "What are the working hours of CampaignWala?",
      answer: "You have to work 6 hours daily in our company."
    },
    {
      question: "Does CampaignWala offer's Part time job or Full time job?",
      answer: "Yes, Our Company provides Part time job and Full Time job both."
    },
    {
      question: "Does CampaignWala provides training to new joiners?",
      answer: "Yes, our company provides training so that new joiners understand how to work."
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-dark-bg via-dark-bgSecondary to-dark-bg overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-accent-cyan/20 rounded-full mb-4">
              <HelpCircle className="text-primary-light" size={40} />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have Any Questions? Find answers to the most common questions about working with CampaignWala.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                  >
                    <h3 className="text-lg font-semibold text-white pr-8 group-hover:text-primary-light transition-colors">
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="text-gray-400 group-hover:text-primary-light transition-colors" size={24} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Help */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <Card className="bg-gradient-to-r from-primary/10 to-accent-cyan/10 border-primary/30">
              <h3 className="text-xl font-semibold text-white mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-400 mb-4">
                Can't find the answer you're looking for? Please reach out to our friendly team.
              </p>
              <a
                href="/contacts"
                className="inline-flex items-center text-primary-light font-semibold hover:text-primary-dark transition-colors"
              >
                Contact Us <ChevronDown className="ml-2 rotate-[-90deg]" size={18} />
              </a>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FAQ

