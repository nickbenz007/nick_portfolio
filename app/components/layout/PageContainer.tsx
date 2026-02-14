import { ReactNode } from 'react';

interface PageContainerProps {
  title: string;
  highlight?: string;
  description?: string;
  children?: ReactNode;
}

export default function PageContainer({
  title,
  highlight,
  description,
  children,
}: PageContainerProps) {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-[1200px] px-6 py-32">
        <header className="mb-12">
          <h1 className="text-4xl font-black text-foreground">
            {highlight ? (
              <>
                {title.split(highlight)[0]}
                <span className="text-primary">{highlight}</span>
                {title.split(highlight)[1]}
              </>
            ) : (
              title
            )}
          </h1>

          {description && (
            <p className="mt-4 max-w-[640px] text-muted">{description}</p>
          )}
        </header>

        {children}
      </div>
    </section>
  );
}
