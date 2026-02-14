import {
  Mail,
  Github,
  LinkedIn,
  File,
  Pin,
  Download,
} from '@/public/contact/index';

export const ContactSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <h3 className="text-xl font-black uppercase tracking-wide text-foreground">
        Connect With Me
      </h3>

      <div className="relative flex flex-col gap-6">
        {/* Email */}
        <InfoCard
          icon={<Mail />}
          label="Email Address"
          value="nickbenz007@gmail.com"
        />

        {/* GitHub */}
        <InfoCard
          icon={<Github />}
          label="GitHub"
          value="https://github.com/nickbenz007"
        />

        {/* LinkedIn */}
        <InfoCard
          icon={<LinkedIn />}
          label="LinkedIn"
          value="linkedin.com/in/nickbenz007"
        />
      </div>

      {/* Resume */}
      <div className="rounded-2xl border border-border bg-card px-8 py-8 text-center items-center justify-center bg-primary/20">
        <div className="mb-4 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-transparent text-primary">
            <div className="h-16 w-16">
              <File />
            </div>
          </div>
        </div>

        <h4 className="mb-2 text-base font-semibold text-foreground">
          Full Profile
        </h4>

        <p className="mb-6 text-sm text-muted">
          Download my latest resume in PDF format for a detailed breakdown of my
          professional journey.
        </p>

        <button className="flex h-14 w-full items-center justify-center gap-2 rounded-md bg-primary text-sm font-semibold text-primary-foreground transition hover:opacity-90 cursor-pointer shadow-lg shadow-primary/30">
          <Download className="text-white h-auto w-6 mb-1" />
          Download Resume
        </button>
      </div>

      {/* Location */}
      <div
        className="relative rounded-2xl border border-border px-8 py-10 overflow-hidden"
        style={{
          backgroundImage: "url('/contact/darkmapbg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col items-center text-center gap-2">
          <div className="h-12 w-12 text-primary">
            <Pin className="h-full w-full" />
          </div>

          <p className="mt-2 text-sm font-semibold text-foreground">
            Peshawar KPK, PA
          </p>
          <p className="text-xs text-muted">Working Remotely Worldwide</p>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => {
  return (
    <div className="flex items-center md:gap-4 gap-2 rounded-xl border border-border md:px-6 px-3 py-5 bg-primary/10 transition hover:bg-primary/20">
      {/* Icon Frame */}
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <div className="h-5 w-5 [&>svg]:h-full [&>svg]:w-full">{icon}</div>
      </div>

      <div className="flex flex-col items-start justify-center gap-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
          {label}
        </p>
        <p className="md:text-sm lg:text-xs xl:text-sm text-xs font-medium text-foreground">
          {value}
        </p>
      </div>
    </div>
  );
};
