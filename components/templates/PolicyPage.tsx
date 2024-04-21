import Image from "next/image";

interface Props {
  children: React.ReactNode;
  title: string;
}

export default function PolicyPage({ children, title }: Props) {
  return (
    <main>
      <section>
        <div className="relative h-96 w-screen">
          <Image
            src="/images/treatment-03.jpg"
            alt="cover"
            fill
            priority
            className="object-cover grayscale brightness-50"
            sizes="(max-width: 768px) 33vw, (max-width: 1600px) 50vw, 100vw"
          />
        </div>
      </section>
      <div className="container max-w-5xl py-24 mx-auto prose prose-sky">
        <h1 className="text-center">{title}</h1>
        {children}
      </div>
    </main>
  );
}
