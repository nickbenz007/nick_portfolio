// export const Footer = () => {
//   return (
//     <footer className="relative mt-32">
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-slate-900/60" />
//       <div className="absolute top-0 left-0 w-full h-px bg-white/5" />

//       <div className="relative mx-auto max-w-[1200px] px-6 py-16">
//         <div className="grid gap-8 md:grid-cols-3 items-center">
//           {/* Left */}
//           <div>
//             <h3 className="text-lg font-semibold text-foreground">
//               MERN
//               <span className="text-primary text-lg font-semibold">DEV</span>
//             </h3>
//             <p className="mt-2 text-sm text-muted max-w-sm md:max-w-none md:whitespace-nowrap">
//               Crafting digital experiences with precision and passion.
//             </p>
//           </div>

//           {/* Center */}
//           <div className="flex items-center gap-6 justify-center md:justify-start">
//             <a
//               href="https://github.com/nickbenz007"
//               target="_blank"
//               className="flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition"
//             >
//               <span className="text-lg">&lt;/&gt;</span>
//               GITHUB
//             </a>

//             <a
//               href="nickbenz007@gmail.com"
//               className="flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition"
//             >
//               <span className="text-lg">@</span>
//               EMAIL
//             </a>
//           </div>

//           {/* Right */}
//           <div className="text-sm text-muted text-center md:text-right">
//             © 2024 MERN Dev Portfolio. Nick.
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

export const Footer = () => {
  return (
    <footer className="relative mt-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-slate-900/60" />
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />

      <div className="relative mx-auto max-w-[1200px] px-6 py-16">
        {/* DESKTOP (lg and up) */}
        <div className="relative hidden lg:flex items-center justify-between">
          {/* Left */}
          <div>
            <h3 className="text-2xl font-black text-foreground cursor-pointer">
              MERN
              <span className="text-primary font-black text-2xl hover:text-foreground tranistion transform ease-in-out">
                DEV
              </span>
            </h3>
            <p className="mt-2 text-sm text-muted max-w-md whitespace-nowrap">
              Crafting digital experiences with precision and passion.
            </p>
          </div>

          {/* TRUE CENTER */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6">
            <a
              href="https://github.com/nickbenz007"
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition"
            >
              <span className="text-lg">&lt;/&gt;</span>
              GITHUB
            </a>

            <a
              href="mailto:nickbenz007@gmail.com"
              className="flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition"
            >
              <span className="text-lg">@</span>
              EMAIL
            </a>
          </div>

          {/* Right */}
          <div className="text-sm text-muted text-right whitespace-nowrap">
            © 2024 MERN Dev Portfolio. Nick.
          </div>
        </div>

        {/* MOBILE + TABLET (< lg) */}
        <div className="lg:hidden flex flex-col items-center gap-6 text-center">
          <div>
            <h3 className="text-2xl font-black text-foreground">
              MERN
              <span className="text-primary font-black text-2xl hover:text-foreground tranistion transform ease-in-out">
                DEV
              </span>
            </h3>
            <p className="mt-2 text-sm text-muted">
              Crafting digital experiences with precision and passion.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/nickbenz007"
              target="_blank"
              className="flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition"
            >
              <span className="text-lg">&lt;/&gt;</span>
              GITHUB
            </a>

            <a
              href="mailto:nickbenz007@gmail.com"
              className="flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition"
            >
              <span className="text-lg">@</span>
              EMAIL
            </a>
          </div>

          <div className="text-sm text-muted">
            © 2024 MERN Dev Portfolio. Nick.
          </div>
        </div>
      </div>
    </footer>
  );
};
