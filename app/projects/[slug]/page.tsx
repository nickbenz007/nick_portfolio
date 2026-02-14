import PageContainer from '@/app/components/layout/PageContainer';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <PageContainer title={`Project: ${params.slug}`}>
      <div className="text-muted">
        Detailed project view for <strong>{params.slug}</strong>.
      </div>
    </PageContainer>
  );
}
