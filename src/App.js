import { Github, Linkedin, Mail } from "lucide-react"

function App() {
  return (
    <div class="my-8 flex flex-col space-y-16 mx-8 sm:w-[500px] sm:mx-auto">
      <header class="flex flex-col">
        <div class="flex items-center space-x-4">
          <img
            src="img/me.png"
            alt=""
            class="rounded-full w-16 h-16 sm:w-24 sm:h-24"
          />
          <div>
            <h1 class="text-xl sm:text-4xl">Aydan Gooneratne</h1>
            <h2 class="text-lg sm:text-xl">developer & artist</h2>
          </div>
        </div>
        <div class="mt-4 flex justify-between items-center">
          <div class="flex items-center space-x-2">
            <div class="icon-link">
              <a href="https://github.com/aydangoon" target="_blank">
                <Github class="text-zinc-850" />
              </a>
            </div>
            <div class="icon-link">
              <a
                href="https://www.linkedin.com/in/aydan-gooneratne-118b49178"
                target="_blank"
              >
                <Linkedin class="text-zinc-850" />
              </a>
            </div>
            <div class="icon-link">
              <a href="mailto:aydan.gooneratne@gmail.com">
                <Mail class="text-zinc-850" />
              </a>
            </div>
          </div>
          <div>
            <a class="text-sm">resume</a>
            <a class="ml-4 text-sm">music</a>
          </div>
        </div>
        <p class="mt-4">
          <div class="text-xs italic">
            thinking about{" "}
            <a
              target="_blank"
              href="https://github.com/tc39/proposal-type-annotations"
            >
              tc39: Type Annotations
            </a>{" "}
            💭
          </div>
          <div class="text-xs italic">
            bumping{" "}
            <a
              target="_blank"
              href="https://open.spotify.com/track/3tgHGoK5ItQv2q2yqggxlb"
            >
              Secrets - Magdalena Bay
            </a>{" "}
            🎵
          </div>
        </p>
      </header>
      <div>
        <div class="flex flex-col space-y-16">
          <section class="flex flex-col space-y-2">
            <header class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <img
                  src="img/discz.gif"
                  alt=""
                  class="rounded-full w-9 h-9 sm:w-16 sm:h-16 mr-2"
                />
                <div>
                  <h2 class="font-bold">Discz</h2>
                  <div>Backend Engineer</div>
                </div>
              </div>
              <div class="text-xs">07.10.23</div>
            </header>
            <p>
              <a href="https://www.discz.com/" target="_blank">
                Discz
              </a>{" "}
              is the platform for gen-z to create identity and connect around
              music. I joined the startup in July 2023 as backend eng, and I am
              in love with the product we're building.
            </p>
          </section>
          <section class="flex flex-col space-y-2">
            <header class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <img
                  src="img/meta.png"
                  alt=""
                  class="rounded-full w-9 h-auto sm:w-16 sm:h-auto mr-2"
                />
                <div>
                  <h2 class="font-bold">Meta</h2>
                  <div>Software Engineering Intern</div>
                </div>
              </div>
              <div class="text-xs">06.22 - 08.22</div>
            </header>
            <p>
              I worked as a Software Engineering Intern on the Facebook
              Marketplace team at Meta during my junior summer. My work was full
              stack, and I learned a lot about developing robust, client-facing
              applications and how to drive product decisions with metrics.
            </p>
          </section>
          <section class="flex flex-col space-y-2">
            <header class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <img
                  src="img/amazon.svg"
                  alt=""
                  class="rounded w-9 h-auto sm:w-16 sm:h-auto mr-2"
                />
                <div>
                  <h2 class="font-bold">Amazon</h2>
                  <div>Software Engineering Intern</div>
                </div>
              </div>
              <div class="text-xs">06.21 - 08.21</div>
            </header>
            <p>
              Over my sophomore summer, I was a Software Engineering Intern on
              the{" "}
              <a
                target="_blank"
                href="https://www.amazon.com/b?ie=UTF8&node=16008589011"
              >
                Amazon Go
              </a>{" "}
              team. I worked on the Go store palm scanners (
              <a
                href="https://www.youtube.com/watch?v=xH_SVNVIfzk"
                target="_blank"
              >
                these guys
              </a>
              ). This was my first time working with a team of software
              developers and working xfn and with stakeholders. I loved the team
              and learned a lot about what it means to be team player.
            </p>
          </section>
          <section class="flex flex-col space-y-2">
            <header class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <img
                  src="img/penn.png"
                  alt=""
                  class="rounded-full w-9 h-auto sm:w-16 sm:h-auto"
                />
                <div>
                  <h2 class="font-bold">UPenn</h2>
                  <div>Computer Science</div>
                </div>
              </div>
              <div class="text-xs">09.19 - 05.23</div>
            </header>
            <p>
              I'm a recent grad of UPenn where I studied CS in the school of
              engineering. I was a frontend developer at{" "}
              <a href="" target="_blank">
                Penn Labs
              </a>
              , and guitarist for the{" "}
              <a href="" target="_blank">
                Mask & Wig
              </a>{" "}
              band.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
