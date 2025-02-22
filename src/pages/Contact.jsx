// import React from "react";

// const Contact = () => {
//   return (
//     <div className="bg-[#FFFBF5] min-h-screen">
//       <section className="py-12 md:py-16">
//         <div className="container mx-auto px-4 md:px-16 max-w-7xl">
//           <h2 className="font-['Rokkitt'] text-3xl md:text-4xl font-bold mb-8 text-center">
//             Contact Us
//           </h2>
//           <div className="max-w-2xl mx-auto">
//             <form 
//               action="https://formspree.io/f/xanqvynn" 
//               method="POST"
//               className="flex flex-col space-y-6"
//             >
//               <label className="flex flex-col">
//                 Your Name:
//                 <input 
//                   type="text" 
//                   name="customer_name" 
//                   required 
//                   className="mt-2 p-2 border border-gray-300 rounded"
//                 />
//               </label>
//               <label className="flex flex-col">
//                 Your Email:
//                 <input 
//                   type="email" 
//                   name="email" 
//                   required 
//                   className="mt-2 p-2 border border-gray-300 rounded"
//                 />
//               </label>
//               <label className="flex flex-col">
//                 Your Message:
//                 <textarea 
//                   name="message" 
//                   required 
//                   className="mt-2 p-2 border border-gray-300 rounded h-32"
//                 ></textarea>
//               </label>
//               <button 
//                 type="submit"
//                 className="bg-[#1B3735] text-white py-2 px-4 rounded hover:bg-[#1B3735]/90"
//               >
//                 Send
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;
import React from "react";

const Contact = () => {
  return (
    <form action="https://formspree.io/f/xanqvynn" method="POST">
      <label>
        Your Name:
        <input type="text" name="customer_name" required />
      </label>
      <label>
        Your Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Your Message:
        <textarea name="message" required></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;
