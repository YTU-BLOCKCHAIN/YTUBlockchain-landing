export type Class = {
  _id: string;
  date: string;
  time: string;
  duration: string;
  topic: string;
  instructor: string;
  instructorImage: string;
  githubLink: string;
  tech: string;
  ClassLocation?: string;
  createdAt: string;
};

export type FormFieldProps = {
  label: string;
  type: string;
  id: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
};
