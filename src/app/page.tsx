import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 py-24">
      <Container>
        <FadeIn>
          <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-7xl">
            Building digital experiences with purpose and precision.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            I am a software engineer passionate about creating elegant, efficient, and user-centric solutions.
          </p>
        </FadeIn>
      </Container>

      <Container id="work">
        <FadeIn delay={0.2}>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight">Selected Work</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="aspect-video w-full rounded-xl bg-zinc-100 dark:bg-zinc-900"
              />
            ))}
          </div>
        </FadeIn>
      </Container>
      
      <Container id="about">
         <FadeIn delay={0.2}>
            <h2 className="mb-8 text-2xl font-semibold tracking-tight">About Me</h2>
            <div className="prose prose-zinc dark:prose-invert max-w-none">
                <p>
                    With a background in computer science and a keen eye for design, I bridge the gap between technical complexity and visual elegance.
                </p>
            </div>
         </FadeIn>
      </Container>
    </div>
  );
}
