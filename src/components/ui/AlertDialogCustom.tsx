import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface AlertDialogCustomProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

export const AlertDialogCustom: React.FC<AlertDialogCustomProps> = ({
  open,
  onClose,
  title,
  content,
}) => {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="bg-neutral-950 text-zinc-200">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription className="text-zinc-400">{content}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose} className="bg-neutral-900 hover:bg-neutral-950 hover:text-zinc-200">Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onClose} className="bg-neutral-900">Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
