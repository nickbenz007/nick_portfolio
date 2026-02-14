// import { JourneyItem } from './journey.data';

// type Props = {
//   item: JourneyItem;
//   align: 'left' | 'right';
// };

// export const JourneyCard = ({ item, align }: Props) => {
//   return (
//     <div
//       className={`
//         relative w-full max-w-[420px]
//         rounded-xl border border-white/10
//         bg-[#192633] p-6
//         ${align === 'left' ? 'ml-auto' : 'mr-auto'}
//       `}
//     >
//       <span className="text-xs font-semibold text-primary">{item.period}</span>

//       <h3 className="mt-2 text-sm font-semibold text-foreground">
//         {item.title}
//       </h3>

//       <p className="text-xs text-muted">{item.organization}</p>

//       <ul className="mt-4 space-y-2 text-xs text-muted">
//         {item.points.map((point, i) => (
//           <li key={i} className="flex gap-2">
//             <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
//             <span>{point}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

type JourneyCardProps = {
  item: {
    points: string[];
  };
};

export const JourneyCard = ({ item }: JourneyCardProps) => {
  return (
    <div
      className="
        rounded-xl border border-white/10
        bg-white/5 p-6
        backdrop-blur
      "
    >
      <ul className="space-y-3 text-sm text-muted">
        {item.points.map((point, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
