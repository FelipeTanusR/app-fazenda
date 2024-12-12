export default function Navbar() {
  return (
    <div className="sticky top-0 z-30 boder-b bg-background px-4 sm:px-6">
      <div className="flex items-center justify-between mx-auto max-w-4xl h-16">
        <div className="flex gap-4">
            <Link href="/" className="flex items-center gap-2">
                <ExternalLinkIcon className="h-6 w-6" />
                <span className="gont-bold"> pika</span>
            </Link>
        </div>
        <h1>Login Button</h1>
      </div>
    </div>
  )
}
