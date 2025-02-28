"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      name: "WhatsApp",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      link: "https://wa.me/6285851595888",
      color: "bg-green-500",
    },
    {
      name: "Email",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      link: "mailto:info@example.com",
      color: "bg-blue-500",
    },
    {
      name: "WeChat",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 2.344-6.432 2.768-1.847 6.255-1.678 8.73.05C19.955 7.91 15.925 2.187 8.691 2.187zm-1.5 5.296a1.1 1.1 0 11-.002-2.2 1.1 1.1 0 01.002 2.2zm4.8 0a1.1 1.1 0 11-.002-2.2 1.1 1.1 0 01.002 2.2zm7.01 4.754c.076-.163.153-.324.217-.492 1.69-4.519-1.567-8.257-6.28-8.257-4.712 0-7.97 3.738-6.28 8.257.064.168.141.33.217.492.384.82-.217 1.42-1.057 1.42H5.65c-.163 0-.315.087-.391.228a.456.456 0 00.043.477c1.342 1.811 3.68 3.11 6.636 3.11.65 0 1.284-.065 1.895-.175a.515.515 0 01.45.122l1.534.899a.25.25 0 00.127.043.223.223 0 00.222-.228c0-.054-.022-.108-.038-.161l-.313-1.192a.556.556 0 01.163-.532 5.554 5.554 0 002.765-3.992zm-7.01.543a.9.9 0 110-1.8.9.9 0 010 1.8zm4 0a.9.9 0 110-1.8.9.9 0 010 1.8z" />
        </svg>
      ),
      link: "weixin://dl/chat?{wechatID}",
      color: "bg-green-600",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-16 right-0 mb-2">
            <div className="flex flex-col gap-2">
              {contactOptions.map((option, index) => (
                <motion.a
                  key={option.name}
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${option.color} text-white p-3 rounded-full shadow-lg flex items-center gap-2 hover:scale-110 transition-transform`}
                >
                  {option.icon}
                  <span className="text-sm font-medium">{option.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "bg-red-500 rotate-45" : "bg-primary"
        } text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform`}
      >
        {isOpen ? (
          // Icon Close (X)
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Icon Phone
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
