import z from "zod";

export const signupSchema = z.object({
  name: z
    .string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(50, "Имя слишком длинное")
    .regex(/^[A-Za-zА-Яа-яЁё\s]+$/, "Имя может содержать только буквы"),
  email: z
    .string()
    .email("Введите корректный email адрес")
    .min(1, "Email обязателен"),
  password: z
    .string()
    .min(8, "Пароль должен быть минимум 8 символов")
    .regex(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву")
    .regex(/[0-9]/, "The password must contain at least one digit"),
 
    phone: 
    z.string()
    .min(10, "Enter the correct number")
});

export type SignupFormData = z.infer<typeof signupSchema>;