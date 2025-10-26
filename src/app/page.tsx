"use client";
import CounterComponent from "@/components/CounterComponent";
import { useState } from "react";

export default function HomePage() {
  const [initialCount, setInitialCount] = useState(0);
  const handleIncrease = () => {
    setInitialCount(initialCount + 1);
  }
  const handleDecrease = () => {
    if(initialCount > 0)
      setInitialCount(initialCount - 1);
  }
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Chào mừng bạn đến với Next.js!</h1>
      <p className="text-lg text-gray-600 mb-6">
        Đây là trang giới thiệu với hình ảnh được lấy từ thư mục public.
      </p>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <p>initialCount: {initialCount}</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-6"
          onClick={handleIncrease}
        >
          Tăng initialCount
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={handleDecrease}
        >Giam initialCount</button>

      </div>
      <div style={{display:'flex', padding: '20px', gap: '20px'}}>
        <CounterComponent title="🐱 Cat Counter" initial={initialCount} />
        <CounterComponent title="🐱 Dog Counter" initial={initialCount} />
        <CounterComponent title="🐱 Goat Counter" initial={initialCount} />
      </div>
    </main>
  );
}
