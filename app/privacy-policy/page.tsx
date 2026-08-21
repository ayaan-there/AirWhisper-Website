import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <div className="pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#0a0a0a] mb-8">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-12">Last Updated: August 21, 2026</p>

          <div className="prose prose-gray max-w-none">
            <h2>Introduction</h2>
            <p>Welcome to AirWhisper. Your privacy is important to us.</p>
            <p>This Privacy Policy explains how AirWhisper (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, stores, and shares your information when you use the AirWhisper iOS Companion App and the AirWhisper Apple Watch App (collectively, the &ldquo;App&rdquo;). By downloading, accessing, or using the App, you agree to the practices described in this Privacy Policy.</p>
            <p>AirWhisper is an accessibility and communication tool that translates wrist gestures into text using Apple Watch motion sensors and on-device machine learning. We are committed to collecting only the data necessary to deliver, improve, and personalise our service.</p>

            <h2>1. Information We Collect</h2>

            <h3>1.1 Account Information</h3>
            <p>When you create an account, we collect:</p>
            <ul>
              <li><strong>Name</strong> — to personalise your profile.</li>
              <li><strong>Email address</strong> — for authentication, account recovery, and service-related communications.</li>
              <li><strong>Password</strong> (hashed) — stored securely on our servers; we never store plaintext passwords.</li>
            </ul>
            <p>If you choose <strong>Sign In with Apple</strong> or <strong>Google Sign-In</strong>, we receive the identifier and profile information you authorise during that process. We do not receive your Apple or Google passwords.</p>

            <h3>1.2 Device Motion and Sensor Data</h3>
            <p>Our core features — <strong>AirWrite</strong> (air-writing recognition) and <strong>OrientWrite</strong> (wrist-orientation writing) — rely on Apple Watch motion sensors (CoreMotion) to capture:</p>
            <ul>
              <li>Accelerometer readings (user acceleration and gravity vectors)</li>
              <li>Gyroscope readings (rotation rates)</li>
              <li>Device orientation (quaternion data)</li>
            </ul>
            <p>This sensor data is <strong>processed entirely on-device</strong> using Apple&rsquo;s CoreML framework to predict the letters you are writing. Raw sensor data is held only in temporary memory during an active writing session and is discarded when the session ends.</p>

            <h3>1.3 Surface-Tap Calibration Data</h3>
            <p>The App includes a <strong>SurfaceTap</strong> feature that detects taps on surfaces using motion sensors. During calibration, the App records short bursts of accelerometer data to determine your personal tap thresholds. This calibration data is stored locally on-device and is not transmitted to our servers.</p>

            <h3>1.4 Contacts</h3>
            <p>If you grant permission, the App accesses your device&rsquo;s Contacts so you can select message recipients (&ldquo;My People&rdquo;). We store only the names and phone numbers of the contacts you choose to add (up to five) in UserDefaults and, if you are signed in with Apple, via iCloud Key-Value Store for cross-device sync. We do not access or store your full address book.</p>

            <h3>1.5 Messages and Communication Data</h3>
            <ul>
              <li><strong>QuickSpeak Phrases</strong> — custom pre-set phrases you create for rapid communication.</li>
              <li><strong>Message History</strong> — a record of messages you have composed and sent through the App, including recipient, message text, and timestamp.</li>
              <li><strong>SMS Delivery</strong> — when you send an SMS, the composed message and recipient&rsquo;s phone number are transmitted to our backend server, which routes the message through a third-party SMS provider (see Section 3).</li>
            </ul>
            <p>We do <strong>not</strong> read, scan, or analyse the content of your messages for advertising or profiling purposes.</p>

            <h3>1.6 Settings and Preferences</h3>
            <p>We store your in-app preferences, including:</p>
            <ul>
              <li>Watch sensitivity settings</li>
              <li>Voice guidance toggle</li>
              <li>Tap detector on/off state</li>
              <li>Tap calibration thresholds</li>
            </ul>
            <p>These are saved to UserDefaults locally and, for Apple ID sessions, synced via iCloud Key-Value Store.</p>

            <h3>1.7 Authentication Tokens</h3>
            <p>Session tokens (JWT access and refresh tokens) are stored securely in the device Keychain. Tokens are device-bound and are <strong>never</strong> written to iCloud or UserDefaults.</p>

            <h2>2. Handwriting Calibration and Federated Learning</h2>

            <h3>2.1 What We Collect</h3>
            <p>To improve the accuracy of our handwriting recognition model, we plan to use a <strong>Federated Learning</strong> approach. When this feature is active:</p>
            <ul>
              <li>The App may record the <strong>letter-formation patterns</strong> (i.e. the motion-sensor trajectories representing how you physically draw each letter) that you produce during AirWrite sessions.</li>
              <li>We collect <strong>only the handwriting gesture data</strong> — the motion patterns that represent how you form individual letters (A–Z).</li>
              <li>We do <strong>not</strong> collect the words, sentences, or messages you compose. We have no visibility into the content of your communications.</li>
            </ul>

            <h3>2.2 Why We Collect It</h3>
            <p>Handwriting is deeply personal. People form the same letter in many different ways. Calibration data helps us:</p>
            <ul>
              <li><strong>Personalise recognition</strong> — so the App adapts to <em>your</em> handwriting style rather than forcing you to adapt to ours.</li>
              <li><strong>Improve the global model</strong> — aggregated, de-identified insights from many users help us make the handwriting recogniser more accurate for everyone, including users with motor differences or unconventional letter formations.</li>
            </ul>

            <h3>2.3 How Federated Learning Works</h3>
            <p>Federated Learning is a privacy-preserving machine learning technique:</p>
            <ol>
              <li><strong>On-device training</strong> — your letter-formation data is used to train a local copy of the model directly on your device.</li>
              <li><strong>Only model updates leave your device</strong> — rather than sending raw gesture data to our servers, the App sends only mathematical gradients (numerical adjustments to model weights). These gradients contain no readable handwriting, messages, or personal information.</li>
              <li><strong>Aggregation</strong> — our server combines updates from many users to improve the global model. No individual user&rsquo;s data can be reconstructed from the aggregated updates.</li>
              <li><strong>Differential privacy</strong> — we apply noise to the model updates before aggregation to further ensure that no individual contribution can be reverse-engineered.</li>
            </ol>

            <h3>2.4 Your Control</h3>
            <ul>
              <li><strong>Opt-in participation</strong> — federated learning contributions are voluntary. You can enable or disable participation at any time in the App&rsquo;s settings.</li>
              <li><strong>Full functionality without participation</strong> — declining to participate does not affect your ability to use any feature of the App. On-device recognition will continue to work normally.</li>
              <li><strong>No message content is ever collected</strong> — regardless of your participation choice, we never record what you type, only how you form individual letters.</li>
            </ul>

            <h2>3. Third-Party Services and Data Sharing</h2>
            <p>We do <strong>not</strong> sell, rent, or trade your personal information to third parties.</p>
            <p>We share limited data with the following service providers solely to deliver App functionality:</p>

            <h3>3.1 Google Handwriting Recognition</h3>
            <p>In the <strong>OrientWrite</strong> writing mode, your handwriting stroke coordinates (x/y points drawn on the Watch screen) may be transmitted to the Google Input Tools API for character recognition. Google processes this data under its own <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. No personal identifiers are included in these requests.</p>

            <h3>3.2 SMS Infrastructure (Twilio)</h3>
            <p>When you send an SMS through the App, the message text and recipient&rsquo;s phone number are routed through our backend server to <strong>Twilio</strong>, a third-party messaging provider. Twilio processes this data under its own <a href="https://www.twilio.com/legal/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. Message content is transmitted only for the purpose of delivery and is not stored on our servers beyond the time necessary for delivery confirmation.</p>

            <h3>3.3 Apple Services</h3>
            <ul>
              <li><strong>iCloud Key-Value Store</strong> — used to sync your profile, contacts, phrases, settings, and message history across your devices. Data shared with Apple is subject to <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple&rsquo;s Privacy Policy</a>.</li>
              <li><strong>Sign In with Apple</strong> — provides a privacy-preserving authentication method. We receive only the information you choose to share.</li>
            </ul>

            <h3>3.4 Google Sign-In</h3>
            <p>If you choose to sign in with Google, we receive your name, email address, and Google user identifier. This data is used solely for authentication. Google&rsquo;s data practices are governed by <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&rsquo;s Privacy Policy</a>.</p>

            <h2>4. Data Storage and Security</h2>

            <h3>4.1 Local Storage</h3>
            <ul>
              <li>Sensor data is held in volatile memory only during active writing sessions and is discarded immediately afterward.</li>
              <li>User preferences, contacts, phrases, and message history are stored in UserDefaults and, for Apple ID sessions, iCloud Key-Value Store.</li>
              <li>Authentication tokens are stored in the iOS Keychain using the <code>kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly</code> protection level — they cannot be extracted from the device even via an unencrypted backup.</li>
            </ul>

            <h3>4.2 Server-Side Security</h3>
            <ul>
              <li>All network communication between the App and our servers uses <strong>TLS (HTTPS)</strong> encryption.</li>
              <li>Passwords are hashed on the server side; we never store or transmit plaintext passwords.</li>
              <li>Access tokens are short-lived and are automatically refreshed; refresh tokens can be revoked at any time by logging out.</li>
            </ul>

            <h3>4.3 Data Minimisation</h3>
            <p>We follow a data minimisation principle: we collect only the data strictly necessary for the App&rsquo;s functionality and do not retain data longer than needed.</p>

            <h2>5. Data Retention</h2>
            <table>
              <thead>
                <tr>
                  <th>Data Category</th>
                  <th>Retention Period</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Account information</td>
                  <td>Retained until you delete your account.</td>
                </tr>
                <tr>
                  <td>Motion and sensor data</td>
                  <td>Discarded from memory at the end of each writing session.</td>
                </tr>
                <tr>
                  <td>Federated learning model updates</td>
                  <td>Aggregated and de-identified immediately upon receipt; individual updates are not retained.</td>
                </tr>
                <tr>
                  <td>Contacts, phrases, message history</td>
                  <td>Retained until you remove them or delete your account. Message history is capped at the 200 most recent entries.</td>
                </tr>
                <tr>
                  <td>Settings and preferences</td>
                  <td>Retained until you reset them or delete your account.</td>
                </tr>
                <tr>
                  <td>Authentication tokens</td>
                  <td>Rotated regularly; cleared on sign-out or account deletion.</td>
                </tr>
              </tbody>
            </table>

            <h2>6. Your Rights and Choices</h2>

            <h3>6.1 Access and Correction</h3>
            <p>You can view and update your name and email address within the App&rsquo;s Profile section at any time.</p>

            <h3>6.2 Data Deletion</h3>
            <ul>
              <li><strong>Delete your account</strong> — you may permanently delete your account and all associated server-side data from the Profile screen. This action is confirmed with a one-time verification code sent to your email.</li>
              <li><strong>Clear local data</strong> — signing out of the App removes all locally stored data, including contacts, phrases, message history, and settings.</li>
              <li><strong>iCloud data</strong> — when you delete your account, your data is also removed from iCloud Key-Value Store.</li>
            </ul>

            <h3>6.3 Contacts Access</h3>
            <p>You can revoke the App&rsquo;s access to your device Contacts at any time through iOS Settings &gt; Privacy &amp; Security &gt; Contacts.</p>

            <h3>6.4 Federated Learning</h3>
            <p>You may opt out of contributing to federated learning at any time in the App&rsquo;s settings without affecting any other functionality.</p>

            <h3>6.5 Regulatory Rights</h3>
            <p>Depending on your jurisdiction, you may have additional rights under applicable privacy laws (such as the GDPR, CCPA/CPRA, or other regional data protection regulations), including the right to:</p>
            <ul>
              <li>Request a copy of the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Data portability</li>
            </ul>
            <p>To exercise any of these rights, please contact us using the details in Section 9.</p>

            <h2>7. Children&rsquo;s Privacy</h2>
            <p>AirWhisper is not directed at children under the age of 13 (or the applicable minimum age in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will promptly delete it.</p>

            <h2>8. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of material changes by:</p>
            <ul>
              <li>Updating the &ldquo;Last Updated&rdquo; date at the top of this document.</li>
              <li>Displaying a notice within the App when appropriate.</li>
            </ul>
            <p>Your continued use of the App after any changes constitutes acceptance of the updated Privacy Policy. We encourage you to review this policy periodically.</p>

            <h2>9. Contact Us</h2>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
            <p><strong>AirWhisper Support Team</strong><br />
            Email: <a href="mailto:airwhisper@proton.me">airwhisper@proton.me</a></p>

            <p className="text-sm text-gray-500 mt-8"><em>This Privacy Policy is provided for informational purposes and is not legal advice. We recommend consulting with a qualified legal professional to ensure compliance with all applicable laws and regulations in your jurisdiction.</em></p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
