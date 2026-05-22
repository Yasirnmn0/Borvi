import { LucideIcon } from "lucide-react";

interface IconBoxProps {
  icon: LucideIcon;
}

export default function IconBox({ icon: Icon }: IconBoxProps) {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
      <Icon className="h-7 w-7" />
    </div>
  );
}
