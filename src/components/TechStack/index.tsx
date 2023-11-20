interface IProps {
    icon: string;
  label: string
}

export default function TechStack({ icon, label }: IProps) {
  
  return (
    <div className="flex justify-center items-center flex-col border-b-2 border-b-emerald-500 rounded-md">
      <i
        className={`devicon-${icon} text-3xl flex items-center justify-center`}
      ></i>
      <span>{label}</span>
    </div>
  );
}
