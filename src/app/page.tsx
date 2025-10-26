"use client";
import CounterComponent from "@/components/CounterComponent";
import HeaderComponent from "@/components/HeaderComponent";

export default function HomePage() {
  return (
    <>
      <HeaderComponent />
      <main className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4">Redux Counter Demo</h1>
        <p className="text-lg text-gray-600 mb-6">
          All counters share the same Redux state. Check the header for current value.
        </p>
        <div style={{display:'flex', padding: '20px', gap: '20px'}}>
          <CounterComponent title="🐱 Cat Counter" counterId="cat" />
          <CounterComponent title="🐶 Dog Counter" counterId="dog" />
          <CounterComponent title="🐐 Goat Counter" counterId="goat" />
        </div>
      </main>
    </>
  );
}
