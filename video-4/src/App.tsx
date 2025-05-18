import { useMotionValueEvent, useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

interface Features {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: React.ReactNode
}


function App() {
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Changed values: ", latest);
  //
  // })

  const features: Features[] = [
    {
      icon: <div>ICON</div>,
      title: "This is a title",
      description: "This is the description of the image",
      content: (
        <img className="rounded-2xl object-contain" src="../img/20250512_2026_Majnu Bhai's Artistic Creation_simple_compose_01jv2fw0kaft69ecmmfjvnkrnc.png" />
      )
    },
    {
      icon: <div>ICON</div>,
      title: "This is a title",
      description: "This is the description of the image",
      content: (
        <img className="rounded-2xl object-contain" src="../img/20250512_2028_Aesthetic Car Design_simple_compose_01jv2g0v7tf2r80v0m2a7k452f.png" />
      )
    },
    {
      icon: <div>ICON</div>,
      title: "This is a title",
      description: "This is the description of the image",
      content: (
        <img className="rounded-2xl object-contain" src="../img/assets_task_01jv2bqv2hfehr5pdg8vf541bk_1747057447_img_1.webp" />
      )
    }


  ]

  return (
    <>
      <div className='min-h-screen bg-neutral-900 flex items-center justify-center'>
        <div className="flex py-40 flex-col gap-10 max-w-4xl mx-auto">
          {
            features.map((feature, idx) => {
              return <Card feature={feature} key={idx} />
            })
          }
        </div>

      </div>
    </>
  )
}

const Card = ({ feature }: { feature: Features }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] //this means that when the start of the element reaches the viewport's end then it will start its function and end it when it reaches the viewport's start
  })

  const translateContent = useTransform(scrollYProgress, [0, 1], [-200, 200])

  return <div ref={ref} className="grid grid-cols-2 gap-20 py-40">
    <div className="flex flex-col gap-5">
      <div className="text-sm text-white">{feature.icon}</div>
      <h1 className="text-4xl font-bold text-white">{feature.title}</h1>
      <p className="text-neutral-400">{feature.description}</p>
    </div>

    <motion.div style={{
      y: translateContent
    }} className="rounded-2xl w-full">{feature.content}</motion.div>
  </div>

}

export default App
