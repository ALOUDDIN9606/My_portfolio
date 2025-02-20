
const messages = [
    {
      id: 1,
      title: "Code is like humor.",
      text: "When you have to explain it, it’s bad. – Cory House",
      meaning: "Kod yozish hazilga o‘xshaydi. Agar uni tushuntirishga majbur bo‘lsangiz, demak u yomon yozilgan. 1) Oddiy va tushunarli nomlar ishlatilgan. 2) Kod lo‘nda va oson o‘qilishi mumkin. 3) Qo‘shimcha tushuntirishsiz ham nima qilayotgani aniq."
    },
    {
      id: 2,
      title: "Don't just code—solve problems.",
      text: "Your goal is to create solutions, not just write code.",
      meaning: "Dasturchining asosiy vazifasi faqat kod yozish emas, balki muammolarni hal qilishdir.Muammoni tushunib, unga eng samarali yechimni topadi. Foydalanuvchilar uchun qulay va ishlatish oson bo‘lgan mahsulot yaratadi. Kod sifati va loyihaning umumiy muvaffaqiyati haqida o‘ylaydi."
    },
    {
      id: 3,
      title: "Your code should be easy to delete.",
      text: "Not easy to write, but easy to improve and remove when needed.",
      meaning: "Kod yozish jarayoni murakkab bo‘lishi mumkin, chunki u puxta o‘ylangan, tushunarli va toza bo‘lishi lozim. Lekin yaxshi yozilgan kodni keyinchalik oson yaxshilash yoki olib tashlash mumkin, chunki u tartibli, modular va ortiqcha bog‘liqliklarsiz yozilgan bo‘ladi."
    },
  ];
  
  const Messages = () => {
    return (
      <div className="p-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center">💡Solid Message</h2>
        <p className="text-gray-600 mb-10 text-xl text-center">
          Some of my favorite programming principles and motivational thoughts.
        </p>
  
        <div className="flex flex-col items-center gap-6">
          {messages.map((msg) => (
            <div key={msg.id} className="w-full max-w-2xl border rounded-lg p-6 shadow-md hover:shadow-lg transition flex flex-col items-center text-center bg-gray-100">
              <h3 className="text-xl font-bold text-blue-600">{msg.title}</h3>
              <p className="text-gray-700 mt-2">{msg.text}</p>
              <p className="text-red-600 mt-6 font-bold text-xl">Ma'nosi !</p>
              <p className="text-gray-700 mt-2">{msg.meaning}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Messages;
  