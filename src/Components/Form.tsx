import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'react-toastify';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Veuillez remplir tous les champs', {
        position: 'top-right',
        autoClose: 3000,
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log('Form submitted:', formData);
      toast.success('Message envoyé avec succès ! 🎉', {
        position: 'top-right',
        autoClose: 4000,
      });

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      toast.error('Une erreur est survenue. Veuillez réessayer.', {
        position: 'top-right',
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const contactItems = [
    {
      icon: Mail,
      title: 'Email',
      content: 'jeansimou0@gmail.com',
      color: 'text-blue-400',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+228 93 16 00 74',
      color: 'text-cyan-400',
    },
    {
      icon: MapPin,
      title: 'Localisation',
      content: 'Lomé, TOGO',
      color: 'text-purple-400',
    },
  ];

  return (
    <section id="contact" className="section-gap relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-main relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div>
            <h2 className="flex section-title flex-start">Prenons Contact</h2>
            <div className="section-underline" style={{ margin: '0 0 12px' }} />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Vous avez une question ou un projet en tête ? Contactez-moi et discutons ensemble.
            </p>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8"
          >
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={contactInfoVariants}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 backdrop-blur-sm"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300"></div>

                  <div className="relative flex items-start space-x-4">
                    <div className={`${item.color} flex-shrink-0 mt-1 p-3 bg-gray-800/50 rounded-xl group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.content}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            onSubmit={handleSubmit}
            className="space-y-6 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm"
          >
            {/* Name Field */}
            <motion.div variants={itemVariants} className="relative">
              <label htmlFor="name" className="block text-sm font-semibold text-white mb-1.5">
                Votre Nom
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
                className="w-full px-5 py-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-sm"
                placeholder="John Doe"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants} className="relative">
              <label htmlFor="email" className="block text-sm font-semibold text-white mb-1.5">
                Adresse Email
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
                className="w-full px-5 py-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-sm"
                placeholder="john@example.com"
              />
            </motion.div>

            {/* Subject Field */}
            <motion.div variants={itemVariants} className="relative">
              <label htmlFor="subject" className="block text-sm font-semibold text-white mb-1.5">
                Sujet
              </label>
              <motion.input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
                className="w-full px-5 py-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-sm"
                placeholder="Sujet de votre message"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants} className="relative">
              <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                whileFocus={{ scale: 1.02 }}
                className="w-full px-5 py-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-sm resize-none"
                placeholder="Votre message..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                disabled={isLoading || isSubmitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full relative px-6 py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden group"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300"></div>

                {/* Border glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 blur transition-all duration-300 -z-10"></div>

                {/* Content */}
                <div className="relative flex items-center justify-center space-x-2 text-white">
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message envoyé !</span>
                    </>
                  ) : isLoading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: [0, 0, 1, 1] as const }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Envoyer le Message</span>
                    </>
                  )}
                </div>
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Form;
