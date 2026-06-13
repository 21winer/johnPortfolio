import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'react-toastify';
import { useLanguage } from '../context/LanguageContext';

function Form() {
  const { t } = useLanguage();
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
      toast.error(t.contact.form.toastRequired, {
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
      toast.success(t.contact.form.toastSuccess, {
        position: 'top-right',
        autoClose: 4000,
      });

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      toast.error(t.contact.form.toastError, {
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
    { icon: Mail, title: t.contact.info.email, content: 'jeansimou0@gmail.com' },
    { icon: Phone, title: t.contact.info.phone, content: '+228 93 16 00 74' },
    { icon: MapPin, title: t.contact.info.location, content: 'Lomé, TOGO' },
  ];

  return (
    <section id="contact" className="section-gap relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-main relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          <h2 className="section-title">{t.contact.title}</h2>
          <div className="section-underline" style={{ margin: '0 0 12px' }} />
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </motion.div>

        {/* Content - flex layout for better control of spacing */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col gap-8 lg:w-1/2"
          >
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={contactInfoVariants}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 light:from-white light:to-gray-50 light:border-gray-200 hover:border-orange-500/40 transition-all duration-300 backdrop-blur-sm"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/5 group-hover:to-amber-500/5 rounded-2xl transition-all duration-300"></div>

                  <div className="relative flex items-start gap-5">
                    <div className="flex-shrink-0 mt-1 p-3 rounded-xl bg-orange-500/10 text-orange-400 ring-1 ring-orange-500/20 group-hover:scale-110 group-hover:bg-orange-500/15 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white light:text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-400 light:text-gray-600 group-hover:text-gray-300 light:group-hover:text-gray-800 transition-colors">{item.content}</p>
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
            className="space-y-10 p-8 md:p-10 lg:p-12 lg:w-1/2 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 light:from-white light:to-gray-50 light:border-gray-200 backdrop-blur-sm"
          >
            {/* Name + Email on the same row */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-semibold text-white light:text-gray-800 mb-2">
                  {t.contact.form.nameLabel}
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-5 py-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 light:bg-gray-100 light:border-gray-300 light:text-gray-900 light:placeholder-gray-400 focus:outline-none focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 backdrop-blur-sm"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-sm font-semibold text-white light:text-gray-800 mb-2">
                  {t.contact.form.emailLabel}
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-5 py-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 light:bg-gray-100 light:border-gray-300 light:text-gray-900 light:placeholder-gray-400 focus:outline-none focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 backdrop-blur-sm"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>
            </motion.div>

            {/* Subject Field */}
            <motion.div variants={itemVariants} className="relative">
              <label htmlFor="subject" className="block text-sm font-semibold text-white light:text-gray-800 mb-2">
                {t.contact.form.subjectLabel}
              </label>
              <motion.input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
                className="w-full px-5 py-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 light:bg-gray-100 light:border-gray-300 light:text-gray-900 light:placeholder-gray-400 focus:outline-none focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 backdrop-blur-sm"
                placeholder={t.contact.form.subjectPlaceholder}
              />
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants} className="relative">
              <label htmlFor="message" className="block text-sm font-semibold text-white light:text-gray-800 mb-2">
                {t.contact.form.messageLabel}
              </label>
              <motion.textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                whileFocus={{ scale: 1.02 }}
                className="w-full px-5 py-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-white placeholder-gray-500 light:bg-gray-100 light:border-gray-300 light:text-gray-900 light:placeholder-gray-400 focus:outline-none focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 backdrop-blur-sm resize-none"
                placeholder={t.contact.form.messagePlaceholder}
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
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 group-hover:from-orange-500 group-hover:to-amber-400 transition-all duration-300"></div>

                {/* Border glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-300 opacity-0 group-hover:opacity-100 blur transition-all duration-300 -z-10"></div>

                {/* Content */}
                <div className="relative flex items-center justify-center space-x-2 text-white">
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>{t.contact.form.sent}</span>
                    </>
                  ) : isLoading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: [0, 0, 1, 1] as const }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>{t.contact.form.sending}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t.contact.form.submit}</span>
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
