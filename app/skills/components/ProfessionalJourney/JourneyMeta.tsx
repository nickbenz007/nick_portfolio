type JourneyMetaProps = {
  period: string;
  title: string;
  organization: string;
  align: 'left' | 'right';
};

export const JourneyMeta = ({
  period,
  title,
  organization,
  align,
}: JourneyMetaProps) => {
  return (
    <div
      className={`flex flex-col gap-1 ${
        align === 'left' ? 'items-end text-right' : 'items-start text-left'
      }`}
    >
      <span className="text-xs font-semibold text-primary">{period}</span>
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p className="text-sm text-muted">{organization}</p>
    </div>
  );
};
