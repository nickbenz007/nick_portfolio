import { TechItem } from './tech-stack.data';

type Props = {
  item: TechItem;
};

export const TechCard = ({ item }: Props) => {
  const { Icon, title, subtitle } = item;

  return (
    <div
      className="
        group
        h-auto w-auto
        rounded-xl
        border border-[#324D67]
        bg-[#192633]
        md:p-8 p-12
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:border-primary/40
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]
      "
    >
      <div className="flex h-full flex-col gap-4">
        <Icon className="h-12 w-12 text-primary" />

        <div className="mt-auto">
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          <p className="mt-1 text-xs text-muted">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
