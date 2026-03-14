"use client"; 

import { useEffect } from "react";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Логируем ошибку в Sentry / LogRocket / консоль
    console.error("Dashboard error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-100">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Что-то пошло не так в панели управления
      </h2>
      <p className="text-gray-600 mb-6">
        {error.message || "Произошла непредвиденная ошибка"}
      </p>
      <button
        onClick={reset} // пытаемся перерендерить сегмент
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Попробовать снова
      </button>
    </div>
  );
}
