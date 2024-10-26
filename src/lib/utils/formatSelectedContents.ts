interface Content {
  id: number;
  state: boolean;
  english: string;
}

export const formatSelectedContents = (selectedContents: Content[]) => {
  const data = selectedContents
    .filter((item: any) => item.state)
    .map((item: any) => item.english);

  return data;
};
