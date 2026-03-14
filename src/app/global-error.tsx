"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            Критическая ошибка
          </h1>
          <p className="text-gray-600 mb-6">
            Приложение не может продолжить работу
          </p>
          <button
            onClick={reset}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Перезагрузить
          </button>
        </div>
      </body>
    </html>
  );
}
