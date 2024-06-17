import React, { useState } from 'react';
import Layout from '../Layout';
import { Container } from 'reactstrap';



const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
 
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    setSubmitted(true);
  };

  return (
    <Layout>
    <Container>
    <section className="container m-5 p-5">
    <h2 className='mb-5 text-center'>Contact Us</h2>
      {submitted ? (
        <div className="alert alert-success" role="alert">
          Thank you for contacting us!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <label htmlFor="name" className="col-sm-2 col-form-label">Name:</label>
            <div className="col-sm-10">
              <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
            <div className="col-sm-10">
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="message" className="col-sm-2 col-form-label">Message:</label>
            <div className="col-sm-10">
              <textarea
                id="message"
                className="form-control"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-10 offset-sm-2">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      )}
    </section>
    <section className='text-center '>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et qui assumenda explicabo mollitia minima nostrum vero architecto eveniet quo necessitatibus impedit perspiciatis, officiis molestias quasi odit non tempore veritatis temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quas, voluptatum excepturi hic pariatur, quisquam sed magnam molestias eum ea facilis. Ea itaque provident optio, qui unde nostrum aliquid dignissimos.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum blanditiis ea molestias voluptas veniam eius vel mollitia in. Earum porro ab dicta aut, doloribus sed. Libero et quis eius nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quas, voluptatum excepturi hic pariatur, quisquam sed magnam molestias eum ea facilis. Ea itaque provident optio, qui unde nostrum aliquid dignissimos.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ullam quod laudantium, iusto eaque est exercitationem, facilis assumenda soluta quidem ducimus earum nisi debitis nulla qui unde veritatis dolorem minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quas, voluptatum excepturi hic pariatur, quisquam sed magnam molestias eum ea facilis. Ea itaque provident optio, qui unde nostrum aliquid dignissimos.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel consequuntur officia explicabo molestias, alias dignissimos expedita perferendis fugiat optio dicta rem saepe facere necessitatibus nobis dolores quidem minima doloremque qui? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quas, voluptatum excepturi hic pariatur, quisquam sed magnam molestias eum ea facilis. Ea itaque provident optio, qui unde nostrum aliquid dignissimos.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error impedit dicta vero obcaecati doloremque incidunt quae corporis ducimus voluptatibus. Et cum tempore consequatur non tempora numquam eveniet a autem voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quas, voluptatum excepturi hic pariatur, quisquam sed magnam molestias eum ea facilis. Ea itaque provident optio, qui unde nostrum aliquid dignissimos.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia commodi adipisci eum cum error ducimus dolorum consequatur at velit autem repellendus, accusantium, distinctio nulla reiciendis sit impedit sequi quae tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quas, voluptatum excepturi hic pariatur, quisquam sed magnam molestias eum ea facilis. Ea itaque provident optio, qui unde nostrum aliquid dignissimos.</p>
    </section>
    </Container>
    </Layout>
);
};

export default Contact;
