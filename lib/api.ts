// lib/api.ts
export const fetchAudioUrl = async (id: string): Promise<string> => {
  const response = await fetch(`https://api.example.com/audio?id=${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch audio URL");
  }
  const data = await response.json();
  return data.url;
};
