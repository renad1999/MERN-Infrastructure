// Testimonials.js

import React from 'react';
import '../components/Testimonials.css'

const testimonialsData = [
  {
    id: 1,
    name: 'Sara Al',
    text: 'I absolutely love the scarves I ordered from Naltti! They are stunning and of excellent quality. Highly recommended!',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxnyIPaIgyvVqQZARwGPJiNDPfJGiwPc41VA&usqp=CAU'
  },
  {
    id: 2,
    name: 'Jane',
    text: 'Naltti scarves are a wardrobe essential! They add a touch of elegance to any outfit. Im a happy customer!',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrHahbBcketYNLZlEJuzPLx3BrJJ8F7RZeZg&usqp=CAU'
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    text: 'The scarves from Naltti are simply amazing! They are soft, stylish, and versatile. Cant get enough of them!',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJyJyUBTNPcZmpy_PrW0nkUZpJmw-7Pa1RQ&usqp=CAU'
  },
  // Add more testimonials here...
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>Testimonials</h2>
      {testimonialsData.map(testimonial => (
        <div key={testimonial.id} className="testimonial">
          {testimonial.photo && <img src={testimonial.photo} alt={testimonial.name} />}
          <p>{testimonial.text}</p>
          <p className="customer-name">- {testimonial.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
