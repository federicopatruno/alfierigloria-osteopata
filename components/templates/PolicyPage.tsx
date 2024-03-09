interface Props {
  children: React.ReactNode;
  title: string;
}

export default function PolicyPage({ children, title }: Props) {
  return (
    <div className="container max-w-5xl py-24 mx-auto prose prose-sky">
      <h1 className="text-center">{title}</h1>
      {children}
    </div>
  );
}
