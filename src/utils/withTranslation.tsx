
/**
 * CORE TRANSLATION UTILITY
 * Генерируется автоматически при экспорте.
 */
export const translateData = (data: any, lang: string) => {
  if (!data) return {};
  if (!lang || lang === 'en') return data;

  const translated: any = Array.isArray(data) ? [] : {};

  Object.keys(data).forEach(key => {
    const value = data[key];
    const langKey = `${key}_${lang}`;
    
    // 1. Если есть прямой перевод
    if (data[langKey] !== undefined) {
      translated[key] = data[langKey];
    } 
    // 2. Рекурсия
    else if (typeof value === 'object' && value !== null) {
      translated[key] = translateData(value, lang);
    } 
    // 3. Оригинал
    else {
      translated[key] = value;
    }
  });

  return translated;
};
