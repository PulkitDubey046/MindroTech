export default function Footer() {
  return (
    <footer className="mt-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 text-center space-y-3">
        <div className="text-2xl font-bold gradient-text">MindroTech © 2025</div>
        <div className="text-lg text-gray-300">Empowering Minds Through Technology</div>
        
        <div className="text-sm text-gray-400 flex flex-wrap justify-center items-center gap-2">
          <a href="https://www.instagram.com/mindrotech?igsh=MWZvZHRydTYzbGJwZA==" target="_blank" rel="noreferrer" className="hover:text-brandPink transition-colors">Instagram</a>
          <span>|</span>
          <a href="https://www.linkedin.com/company/mindrotech/" target="_blank" rel="noreferrer" className="hover:text-brandPink transition-colors">LinkedIn</a>
          <span>|</span>
          <span className="hover:text-brandPink transition-colors cursor-pointer">YouTube</span>
        </div>

        <div className="text-xs text-gray-500 flex flex-wrap justify-center items-center gap-1">
          <span>Home</span><span>|</span><span>About Us</span><span>|</span>
          <span>Services</span><span>|</span><span>Courses</span><span>|</span>
          <span>Blog</span><span>|</span><span>Contact Us</span>
        </div>
      </div>
    </footer>
  )
}
