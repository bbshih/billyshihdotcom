import SectionFade from "@/components/SectionFade"

function Headline({
  primary = false,
  children,
}: {
  primary?: boolean
  children: React.ReactNode
}) {
  return primary ? (
    <h1 className="text-4xl">{children}</h1>
  ) : (
    <h2 className="text-4xl">{children}</h2>
  )
}

function ListItem({
  title,
  href,
  children,
}: {
  title?: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <li>
      {href ? (
        <>
          <a href={href}>{title}</a>:{" "}
        </>
      ) : (
        title + ": " || ""
      )}
      {children}
    </li>
  )
}

export default function Home() {
  return (
    <main className="flex flex-col space-y-8 w-full">
      <SectionFade>
        <Headline primary={true}>👋 Hi there! I&apos;m Billy.</Headline>
        <p>
          You may know me as a senior frontend engineer who applied for a job at
          your startup.
        </p>
        <Headline>Career</Headline>
        <p>
          Values are the starting point of my job search. I built an app for
          cancer patients, supported sustainability at Amazon, helped elevate
          art in the blockchain space and more.
        </p>
        <p>
          I&apos;m a technological optimist but believe that people have to
          intentionally build tools with deep vision, compassion and sincerity.
        </p>
        <div>
          <strong className="mb-2">Things I&apos;ve shipped</strong>
          <ul className="space-y-2">
            <ListItem href="https://jpg.space" title="JPG">
              NFT gated experience allowing users to submit and vote on NFTs.
              Building reputation that was represented in the NFT and on the
              platform.
            </ListItem>

            <ListItem
              href="https://aws.amazon.com/aws-cost-management/aws-budgets/"
              title="AWS Budgets"
            >
              Rewrote the AWS Budgets Console into a TypeScript React/Redux app
              allowing AWS users to setup budgets and track their spend.
            </ListItem>
            <ListItem
              href="http://amazon.com/amsc"
              title="Amazon Sustainability"
            >
              I rebuilt the Second Chance portal in React in compliance with all
              language and build requirements. Streamlining workflows for
              pulling in data from external teams, getting translations and
              presenting it to keep the site up to date.
            </ListItem>
            <ListItem title="Caresi (defunct)">
              React app that guided cancer patients through their treatment
              experience. Patients were able to track appointments, labs and
              care team information.
            </ListItem>
          </ul>
        </div>
        <a href="/resume.pdf">Download Resume</a>
        <Headline>Interests</Headline>
        <ul className="space-y-2">
          <li>Web3: Ownership, decentralization, open source and community</li>
          <li>
            AI: Giving new tools to open up opportunity and creativity to
            everyone
          </li>
          <li>Education: Core to accessing and understanding the world</li>
          <li>Culture: Art, relationships, history define who we are</li>
          <li>Content Creation: Everyone can create. No gaterkeepers</li>
        </ul>
        <Headline>Dreams</Headline>
        <ul className="space-y-2">
          <li>A world where everyone can pursue their aspirations</li>
          <li>A world without suffering</li>
          <li>A house with more windows than walls</li>
          <li>Apple Vision Pro actually being good</li>
          <li>Eating cookies without guilt</li>
        </ul>
        <div className="flex flex-col items-center space-y-4">
          <a
            href="mailto:me@billyshih.com"
            className="border-1 border-emerald-600 bg-emerald-400 text-white rounded p-4 shadow-md hover:shadow-lg hover:bg-emerald-500 transition-colors duration-500 ease-in-out no-underline hover:text-white"
          >
            Contact me
          </a>
          <a href="https://www.linkedin.com/in/bshih/">LinkedIn</a>
          <a href="https://www.twitter.com/billyeatstofu/">X aka Twitter</a>
        </div>
      </SectionFade>
    </main>
  )
}
