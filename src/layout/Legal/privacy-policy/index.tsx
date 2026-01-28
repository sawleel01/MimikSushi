export default function PrivacyPolicy() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
        <p>
          At <strong>Mimik Sushi</strong>, we respect your privacy and are
          committed to protecting your personal information. This Privacy Policy
          explains how we collect, use, and protect your data when you visit our
          website.
        </p>
      </section>

      {/* Information We Collect */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Name, email address, and phone number when you contact us</li>
          <li>Information you submit via contact forms</li>
          <li>Basic website usage data such as IP address and browser type</li>
        </ul>
      </section>

      {/* How We Use Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">How We Use Information</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Respond to enquiries and messages</li>
          <li>Improve our website and user experience</li>
          <li>Maintain website security and performance</li>
        </ul>
      </section>

      {/* Cookies */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Cookies</h2>
        <p>
          Our website may use cookies to enhance user experience. You can
          disable cookies through your browser settings, though some parts of
          the website may not function correctly.
        </p>
      </section>

      {/* Data Security */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
        <p>
          We take reasonable measures to protect your personal data from
          unauthorized access, misuse, or disclosure.
        </p>
      </section>

      {/* Your Rights */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Request access to your personal data</li>
          <li>Request correction or deletion of your data</li>
          <li>Withdraw consent where applicable</li>
        </ul>
      </section>

      {/* Third Party Websites */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Third Party Websites</h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of those websites.
        </p>
      </section>

      {/* Contact */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
        <p className="font-medium">Mimik Sushi</p>
        <p>
          Email:{" "}
          <a href="mailto:info@mimiksushi.co.uk" className="underline">
            info@mimiksushi.co.uk
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+441302366355" className="underline">
            01302 366355
          </a>
        </p>
      </section>

      <footer className="text-sm text-gray-500">
        © {new Date().getFullYear()} Mimik Sushi. All rights reserved.
        <br />
        Website and application developed by <strong>Rabtik Limited</strong>.
      </footer>
    </main>
  );
}
