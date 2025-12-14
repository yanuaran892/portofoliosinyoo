import { motion, useReducedMotion } from 'framer-motion'

const blobBaseClassName =
  'absolute rounded-full blur-3xl will-change-transform mix-blend-screen'

export default function AmbientBackground() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#07070a]" />

      <motion.div
        className={`${blobBaseClassName} -left-48 -top-48 h-[34rem] w-[34rem] bg-gradient-to-br from-primary-500/30 via-primary-300/10 to-transparent`}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 80, -30, 0],
                y: [0, 30, 70, 0],
                scale: [1, 1.08, 0.98, 1],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 18,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
      />

      <motion.div
        className={`${blobBaseClassName} -right-52 top-10 h-[36rem] w-[36rem] bg-gradient-to-tr from-purple-500/25 via-fuchsia-400/10 to-transparent`}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -60, 40, 0],
                y: [0, 70, -20, 0],
                scale: [1, 0.96, 1.07, 1],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 22,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
      />

      <motion.div
        className={`${blobBaseClassName} bottom-[-18rem] left-1/3 h-[40rem] w-[40rem] bg-gradient-to-br from-amber-400/20 via-orange-400/10 to-transparent`}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 60, -70, 0],
                y: [0, -50, 30, 0],
                scale: [1, 1.05, 0.97, 1],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 26,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
      />

      <div className="absolute inset-0 opacity-70 grid-overlay" />
      <div className="absolute inset-0 opacity-35 grain-overlay" />
      <div className="absolute inset-0 vignette" />
    </div>
  )
}
