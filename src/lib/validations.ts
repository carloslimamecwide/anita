import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Indica o teu nome").max(100),
  restaurant: z.string().trim().min(2, "Indica o nome do restaurante").max(120),
  phone: z
    .string()
    .trim()
    .min(9, "Indica um telefone válido")
    .max(20)
    .regex(/^[\d\s+()-]+$/, "Telefone inválido"),
  email: z.string().trim().email("Email inválido").max(120),
  zone: z.string().trim().min(2, "Indica a zona ou cidade").max(80),
  preferredTime: z.string().trim().min(1, "Indica o melhor horário").max(80),
  message: z.string().trim().min(10, "Escreve uma mensagem (mín. 10 caracteres)").max(2000),
  website: z.string().optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const PREFERRED_TIMES = [
  "Manhã (9h–12h)",
  "Almoço (12h–15h)",
  "Tarde (15h–18h)",
  "Qualquer hora",
] as const;

export const ZONES = [
  "Olhão",
  "Faro",
  "Loulé",
  "Albufeira",
  "Portimão",
  "Lagos",
  "Tavira",
  "Outro Algarve",
  "Évora",
  "Beja",
  "Sines / Costa Alentejana",
  "Outro Alentejo",
] as const;
