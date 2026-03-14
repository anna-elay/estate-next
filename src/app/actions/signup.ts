"use server";

import { SignupFormData, signupSchema } from "@/lib/schemas";
// import { redirect } from "next/navigation";

export type SignupState = {
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    _form?: string[]; // для общих ошибок нап пользователь уже существует
  };
  success?: boolean;
  message?: string;
  data?: Partial<SignupFormData>; // сохраняем введенные данные для восстановления формы
};

export async function signupAction(
  prevState: SignupState, // предыдущее состояние (пригодится)
  formData: FormData, // данные из формы
): Promise<SignupState> {
  // 1. Извлекаем данные из FormData
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
  };

  // 2. Валидируем с помощью Zod
  const validated = signupSchema.safeParse(rawData);

  // 3. Если валидация не прошла — возвращаем ошибки
  if (!validated.success) {
    return {
      errors: validated.error.flatten().fieldErrors,
      data: rawData, // возвращаем то, что ввел пользователь
    };
  }

  // 4. Валидация прошла — делаем бизнес-логику
  try {
    // Проверяем, не занят ли email (имитация запроса к БД)
    const existingUser = await checkUserExists(validated.data.email);

    if (existingUser) {
      return {
        errors: {
          email: ["Пользователь с таким email уже существует"],
        },
        data: rawData,
      };
    }

    // Создаем пользователя (здесь был бы запрос к БД)
    await createUser(validated.data);
    return {
      success: true,
      message: "Отправка прошла успешно!",
    };

  } catch (error) {
    console.error("Signup error:", error);
    return {
      errors: {
        _form: ["Что-то пошло не так. Попробуйте позже."],
      },
      data: rawData,
    };
  }
}

// Вспомогательные функции (имитация)
async function checkUserExists(email: string): Promise<boolean> {
  // Здесь был бы запрос к базе данных
  return false; // для примера всегда false
}

async function createUser(data: SignupFormData): Promise<void> {
  // Здесь создание пользователя
  console.log("User created:", data);
}
