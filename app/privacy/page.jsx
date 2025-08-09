import React from 'react'

export const metadata = {
  title: "Privacy Policy — Wallet Manager",
  description: "Privacy Policy for Wallet Manager. We do not collect or share user data.",
};

const PrivacyPage = () => {

  return (
    <main style={{
      maxWidth: '900px',
      margin: '24px auto',
      padding: '28px',
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 6px 20px rgba(2,6,23,0.06)',
      fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial',
      lineHeight: 1.6,
      color: '#0f172a'
    }}>
      <h1 style={{ fontSize: '1.6rem', margin: '0 0 6px', color: '#0f766e' }}>Privacy Policy — Wallet Manager</h1>
      <div style={{ color: '#6b7280', marginBottom: '20px' }}>
         Date: <strong>9th August, 2025</strong>
      </div>

      <p>Thank you for using <strong>Wallet Manager</strong> (the "Wallet Manager"). Your privacy matters to us. This Privacy Policy explains how Wallet Manager handles information related to you.</p>

      <h2 style={{ fontSize: '1.05rem', marginTop: '22px', color: '#062424' }}>Information We Collect</h2>
      <p><strong>We do not collect any personal or usage data.</strong></p>
      <ul style={{ background: '#f1f5f9', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <li>No personal information (such as name, email, phone number) is collected.</li>
        <li>No device identifiers or diagnostic data are collected or stored.</li>
        <li>No analytics, crash reports, or behavioral data are gathered.</li>
      </ul>

      <h2>Data Sharing</h2>
      <p>Because Wallet Manager does not collect any user data, we do <strong>not</strong> share any user information with third parties, companies, or organizations.</p>

      <h2>Third-Party Services</h2>
      <p>Wallet Manager does not use third-party analytics, advertising SDKs, or tracking tools.</p>

      <h2>Children's Privacy</h2>
      <p>Our App does not collect personal information, so it is suitable for use by people of all ages. If you are a parent or guardian and believe your child provided personal information to Wallet Manager, please contact us (see below).</p>

      <h2>Security</h2>
      <p>Although we do not collect or store user data, we follow general security best practices in our development process. If you have concerns about the security of your device or data stored locally on your device, please consult your device provider.</p>

      <h2>Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time. If we make changes, we will update the effective date above. Continued use of the App after changes indicates acceptance of the revised policy.</p>

      <h2>Contact Us</h2>
      <p>If you have questions or concerns about this Privacy Policy, please contact us at <a href="mailto:henrytweneboah956@gmail.com" style={{ color: '#0f766e', textDecoration: 'none' }}>henrytweneboah956@gmail.com</a>.</p>

      <footer style={{ marginTop: '28px', color: '#6b7280', fontSize: '0.95rem' }}>
        <p>Wallet Manager — No data collection declared. This policy is provided to satisfy Google Play Store requirements stating the app does not collect or share user data.</p>
      </footer>
    </main>
  )
}

export default PrivacyPage