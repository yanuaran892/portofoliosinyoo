import { profile } from '../data/profile'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="flex items-center gap-2">
          <span className="h-px w-10 bg-white/15" aria-hidden="true" />
          Dibuat dengan React + Tailwind
        </p>
      </div>
    </footer>
  )
}

export default Footer
