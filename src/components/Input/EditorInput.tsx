import { Textarea } from "@/components/ui/textarea";

interface EditorInputProps {
  value: string;
  onChange: (value: string) => void;
}

const EditorInput: React.FC<EditorInputProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    onChange(e.target.value);

  return (
    <Textarea
      value={value}
      onChange={handleChange}
      placeholder="Custom input"
      className="h-full w-full resize-none rounded-lg bg-slate-900 p-3 text-sm text-zinc-100 focus-visible:ring-2 focus-visible:ring-blue-600"
    />
  );
};

export default EditorInput;
