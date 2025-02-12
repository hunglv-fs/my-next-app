import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Chào mừng bạn đến với Next.js!</h1>
      <p className="text-lg text-gray-600 mb-6">
        Đây là trang giới thiệu với hình ảnh được lấy từ thư mục public.
      </p>

      <Image 
        src="/images/hero.jpg" 
        alt="Hình ảnh minh họa"
        width={600} 
        height={400} 
        className="rounded-lg shadow-md"
      />
    </main>
  );
}
