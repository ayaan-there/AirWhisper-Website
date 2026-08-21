import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <div className="pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#0a0a0a] mb-8">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-12">Last Updated: June 1, 2026</p>

          <div className="prose prose-gray max-w-none">
            <p>Welcome to AirWhisper! These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the AirWhisper companion app for iOS and the WAAirWhisper app for Apple Watch (collectively, the &ldquo;Service&rdquo;).</p>
            <p>By downloading, accessing, or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the Service.</p>

            <h2>1. Description of Service</h2>
            <p>AirWhisper is an accessibility and communication tool that leverages Apple Watch motion sensors (via CoreMotion and CoreML) to translate wrist movements into text (&ldquo;AirWrite&rdquo; and &ldquo;OrientWrite&rdquo;). The Service allows you to compose messages, speak them aloud via text-to-speech, and send SMS messages to your contacts.</p>

            <h2>2. Prerequisites</h2>
            <p>To use the Service, you must have a compatible iPhone and Apple Watch running supported versions of iOS and watchOS. You are responsible for ensuring your devices meet these minimum requirements and for any data or carrier fees associated with your use of the Service.</p>

            <h2>3. Acceptable Use</h2>
            <p>You agree not to use the Service to:</p>
            <ul>
              <li>Send spam, unsolicited messages, or harassing communications via the SMS feature.</li>
              <li>Transmit any content that is unlawful, defamatory, threatening, or otherwise objectionable.</li>
              <li>Reverse engineer, decompile, or attempt to extract the source code or proprietary machine learning models (e.g., <code>IMUClassifier.mlmodelc</code>) of the Service.</li>
              <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity.</li>
            </ul>
            <p>We reserve the right to suspend or terminate your account (including revoking your authentication tokens) if you abuse the Service, particularly the SMS sending capabilities.</p>

            <h2>4. Third-Party Integrations</h2>
            <p>The Service integrates with external third-party platforms to provide its functionality:</p>
            <ul>
              <li><strong>Apple (iCloud &amp; Authentication):</strong> Syncing features rely on iCloud, and login may use Sign In with Apple. Your use of these features is subject to Apple&rsquo;s terms of service.</li>
              <li><strong>Google Handwriting API:</strong> Certain handwriting recognition fallbacks utilize Google APIs.</li>
              <li><strong>SMS Providers:</strong> Outbound SMS messages are routed through our backend to third-party telecommunication providers (e.g., Twilio).</li>
            </ul>
            <p>We are not responsible for the availability, uptime, or accuracy of these external services.</p>

            <h2>5. Medical and Safety Disclaimer</h2>
            <p><strong>AirWhisper is not a medical device.</strong> While it serves as an accessibility aid, you should not rely on it for emergency communications. Do not use the AirWhisper interface (including air-writing gestures or the companion app) while driving, operating heavy machinery, or engaging in any activity where distraction could lead to injury or death.</p>

            <h2>6. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, AirWhisper and its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:</p>
            <ul>
              <li>Your use or inability to use the Service.</li>
              <li>Inaccuracies or errors in the machine learning transcription (CoreML predictions).</li>
              <li>Failures of the SMS provider to deliver messages.</li>
            </ul>

            <h2>7. Changes to the Terms</h2>
            <p>We reserve the right to modify these Terms at any time. We will provide notice of significant changes by updating the date at the top of this document and, where appropriate, sending a notification within the App. Your continued use of the Service after such modifications signifies your acceptance of the updated Terms.</p>

            <h2>8. Contact</h2>
            <p>For any questions regarding these Terms, please contact our support team at <a href="mailto:airwhisper@proton.me">airwhisper@proton.me</a>.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
