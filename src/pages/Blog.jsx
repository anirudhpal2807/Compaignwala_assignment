import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import Card from '../components/Card'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How To Do Withdrawal Section Free In M Stock Account In Just 10 Rs",
      date: "27 Dec 2023",
      excerpt: "Learn how to set up free withdrawal in your M Stock account with just a minimal investment.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      category: "Finance"
    },
    {
      id: 2,
      title: "How To Do Withdrawal Section Free In ICICI Direct Account In just 10 Rs",
      date: "27 Dec 2023",
      excerpt: "Step-by-step guide to enable free withdrawal section in your ICICI Direct account.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      category: "Finance"
    },
    {
      id: 3,
      title: "How To Open Account In Bajaj MF In Just 3 Mins",
      date: "20 Dec 2023",
      excerpt: "Quick and easy guide to open your Bajaj Mutual Fund account in just 3 minutes.",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800",
      category: "Investment"
    },
    {
      id: 4,
      title: "How to Do Withdrawal Section Free in 5 paisa Demat account in just 50 rs",
      date: "29 Nov 2023",
      excerpt: "Complete guide to setting up free withdrawal in your 5 Paisa demat account.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
      category: "Finance"
    },
    {
      id: 5,
      title: "how to open HDFC SKY Demat AC | Without any Charge | with login",
      date: "15 Nov 2023",
      excerpt: "Learn how to open your HDFC SKY demat account without any charges and with login access.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      category: "Investment"
    },
    {
      id: 6,
      title: "5 Paisa Demat Account Opening Video | Without any Charge",
      date: "25 Oct 2023",
      excerpt: "Watch our comprehensive video guide on opening a 5 Paisa demat account without any charges.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
      category: "Tutorial"
    },
    {
      id: 7,
      title: "How to open an ICICI Direct Demat account | In just 5 Min | With Login",
      date: "15 Oct 2023",
      excerpt: "Quick 5-minute guide to open your ICICI Direct demat account with full login access.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      category: "Investment"
    },
    {
      id: 8,
      title: "How To Open A Demat Account Of Yes Security",
      date: "29 Sept 2023",
      excerpt: "Step-by-step instructions to open your Yes Security demat account easily.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
      category: "Finance"
    },
    {
      id: 9,
      title: "How to Create A Nuvama ( Edelweiss) Demat Account",
      date: "15 Sept 2023",
      excerpt: "Complete guide to creating your Nuvama (formerly Edelweiss) demat account.",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800",
      category: "Investment"
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-dark-bg via-dark-bgSecondary to-dark-bg overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?w=1920')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              Blog & <span className="gradient-text">News</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get Every Single Update - Read our latest blog posts and stay informed about financial services and opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full group cursor-pointer hover:border-primary/50 transition-colors">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-400 text-sm mb-3">
                      <Calendar size={16} className="mr-2" />
                      {post.date}
                    </div>
                    <h3 className="text-white font-semibold text-xl mb-3 line-clamp-2 group-hover:text-primary-light transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="inline-flex items-center text-primary-light text-sm font-medium hover:text-primary-dark transition-colors">
                      Read More <ArrowRight className="ml-1" size={16} />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More / Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-primary-dark rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
              Load More Posts
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog

