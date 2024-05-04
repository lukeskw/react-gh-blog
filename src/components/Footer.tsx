export function Footer() {
  return (
    <footer className="p-2">
      <hr className="my-20 mb-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-slate-600 to-transparent opacity-25 dark:via-slate-500" />
      <p className="text-center text-slate-300">
        Made with{' '}
        <span role="img" aria-label="heart">
          ❤️
        </span>{' '}
        by{' '}
        <a
          href="https://github.com/lukeskw"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500"
        >
          Luke
        </a>
      </p>
    </footer>
  )
}
