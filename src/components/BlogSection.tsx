import React from 'react';
const blogPosts = [{
  image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3',
  title: 'The Future of Business Technology',
  description: 'Explore the latest trends shaping the future of business technology and digital transformation.'
}, {
  image: 'https://images.unsplash.com/photo-1664575600397-88e8b7258d8e?ixlib=rb-4.0.3',
  title: 'Sustainable Business Practices',
  description: 'Learn how implementing sustainable practices can benefit your business and the environment.'
}, {
  image: 'https://images.unsplash.com/photo-1664575600850-cfcfe6163c0f?ixlib=rb-4.0.3',
  title: 'Leadership in Modern Business',
  description: "Discover essential leadership skills needed to succeed in today's business landscape."
}];
export function BlogSection() {
  return <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">
          Latest Insights
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <button className="text-[#C0254D] font-medium hover:text-[#A01E3F] transition-colors">
                  Read More →
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}