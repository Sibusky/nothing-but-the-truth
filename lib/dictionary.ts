import "server-only";
import type { Locale } from "@/i18n.config";
import ru from "@/dictionaries/ru.json";
import en from "@/dictionaries/en.json";

const dictionaries = {
  ru,
  en,
};

export const getDictionary = async (locale: Locale) => dictionaries[locale];
