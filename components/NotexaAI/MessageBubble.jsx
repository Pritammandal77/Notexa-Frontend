export default function MessageBubble({ msg }) {

  const isUser = msg.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>

      <div
        className={`
        max-w-[80%] px-3 py-2 rounded-xl text-sm
        ${isUser
            ? "bg-orange-500 text-white"
            : "bg-gray-100 text-gray-800"}
        `}
      >
        {msg.content}
      </div>

    </div>
  );
}