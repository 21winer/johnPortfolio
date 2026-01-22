import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Title from './Title';

interface Web3FormsResponse {
  success: boolean;
  message: string;
}

const Contact: React.FC = () => {
  const [result, setResult] = React.useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "836d2043-12a9-45b5-ab71-12e747ecfd06");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        throw new Error("Erreur réseau");
      }

      const data: Web3FormsResponse = await response.json();

      setResult("");

      if (data.success) {
        toast.success("✓ Message envoyé avec succès!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        event.currentTarget.reset();
        return;
      } else {
        console.log("Error", data);
        toast.error(`✗ Erreur: ${data.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return;
      }
    } catch (error) {
      setResult("");
      console.error("Fetch error:", error);
      toast.error("✗ Une erreur est survenue lors de l'envoi du formulaire", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className='max-w-6xl mx-auto py-8 px-4 text-center p-6 lg:px-32 w-full overflow-hidden' id='Contact'>
        <Title title={"Me contacter"}/>
      <form onSubmit={onSubmit} className='max-w-full text-[whitesmoke] pt-8'>
        <div className='flex gap-2'>
          <div className='w-full md:w-1/2 text-left'>
            <input 
             className='w-full bg-base-300 outline-none rounded-lg py-3 px-4 mt-2'
              type="text" 
              name='nom' 
              placeholder='Nom' 
              required
            />
          </div>
          <div className='w-full md:w-1/2 text-left md:pl-4'>
            <input 
              className='w-full outline-none bg-base-300 rounded-lg py-3 px-4 mt-2' 
              type="email" 
              name='email' 
              placeholder='Email' 
              required
            />
          </div>
        </div>
        <div className='my-6 text-left'>
          <textarea className='w-full outline-none rounded-lg bg-base-300 py-2 px-4 h-24 resize-none' name="message" id="" placeholder='Message' required></textarea>
        </div>
        <button className='btn btn-accent'> {result ? result : "Send Message" } </button>
      </form>
    </div>
  )
}  

export default Contact