interface SeparatorProps {
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({ className = "" }) => {
  return (
    <div
      className={`relative z-10 py-16 px-6 flex justify-center ${className}`}
    >
      <div className="max-w-4xl w-full flex items-center gap-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
          <div
            className="w-3 h-3 rounded-full bg-purple-400 animate-pulse"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </div>
    </div>
  );
};

export default Separator;
