export function Footer() {
  return (
    <footer className="bg-gray-50/70 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0a0a0a]">
                <div className="h-3 w-3 rounded-full bg-[#5BA4D9]" />
              </div>
              <span className="text-lg font-semibold">AirWhisper</span>
            </div>
            <p className="text-sm text-gray-600">
              Your words. Your way. Accessibility technology that transforms wrist movements into communication.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#how" className="hover:text-[#0a0a0a]">How it works</a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#0a0a0a]">Features</a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-[#0a0a0a]">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:text-[#0a0a0a]">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-600">
              Email: airwhisper@proton.me
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} AirWhisper. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
