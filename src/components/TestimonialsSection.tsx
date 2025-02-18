import React from 'react';
const testimonials = [{
  name: 'Sarah Johnson',
  role: 'CEO, Tech Solutions',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3',
  quote: 'Working with OO Company has transformed our business operations and helped us achieve unprecedented growth.'
}, {
  name: 'Michael Chen',
  role: 'Director, Global Innovations',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3',
  quote: 'Their strategic insights and professional approach have been invaluable to our success.'
}, {
  name: 'Emma Williams',
  role: 'COO, Future Enterprises',
  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3',
  quote: "The team's dedication and expertise have helped us navigate complex challenges with confidence."
}];
export function TestimonialsSection() {
  return <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-6">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>)}
        </div>
      </div>
    </section>;
}