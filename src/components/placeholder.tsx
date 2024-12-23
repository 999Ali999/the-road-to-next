import { LucideMessageSquareWarning } from "lucide-react";

type PlaceholderProps = {
  label: string;
  renderIcon?: (style: React.CSSProperties) => React.ReactNode;
  renderButton?: (style: React.CSSProperties) => React.ReactNode;
};

const Placeholder = ({
  label,
  renderIcon = (style) => <LucideMessageSquareWarning style={style} />,
  renderButton = (style) => <div style={style} />,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
      {renderIcon({ width: "3rem", height: "3rem" })}
      <h2 className="text-lg text-center font-bold">{label}</h2>
      {renderButton({ marginTop: "1.25rem", height: "2.5rem" })}
    </div>
  );
};

export { Placeholder };
