import React from "react";
import PageSectionLite from "@/components/Content/PageSectionLite";
import Head from "@/components/head";

const headerData = {
  title: "Privacy Policy - Harava Scraper",
  description: 'The privacy policy of Harava Scraper. This document describes how information is processed and protected. Read our privacy policy to learn how we protect your data.',
  keywords: 'privacy policy, data protection, Harava Scraper, privacy practices, Wadelmasiru',
};

function PrivacyPolicy() {
  const post = {
    transactionsTitle: "Privacy Policy",
    differenceTitle: "Harava Scraper",
    text: `
    
    <p class="mb-4"> Date: 10/30/2024</p>
    <p class="mb-4">Wadelmasiru and the Harava Scraper extension value your privacy. This privacy policy clarifies what information may be collected when using the Harava Scraper extension and how it is handled.</p>

    <h3 class="text-xl text-gray-900 font-bold mb-2">1. Data Collection and Use</h3>
    <p class="mb-4">Harava Scraper does not collect or store personal information, such as names, email addresses, location data, or other similar identifiers. All functionality occurs on your device without data being transferred to the developer or external servers.</p>

    <h3 class="text-xl text-gray-900 font-bold mb-2">2. Data Sharing with Third Parties</h3>
    <p class="mb-4">Harava Scraper does not share user data or content with the developer, third parties, or other entities. All information remains under the user's control during the use of the extension.</p>

    <h3 class="text-xl text-gray-900 font-bold mb-2">3. Google Chrome Usage and Privacy</h3>
    <p class="mb-4">Since Harava Scraper is an extension available in the Chrome Web Store, Google may collect information related to your browser, such as extension usage statistics. Wadelmasiru and Harava Scraper have no control over data collected by Google, and we recommend reviewing Google’s privacy policy at <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>.</p>

    <h3 class="text-xl text-gray-900 font-bold mb-2">4. Security Measures</h3>
    <p class="mb-4">Wadelmasiru and Harava Scraper ensure that user information remains secure on the device. The extension has no software that transfers data to external systems or analyzes data for external use.</p>

    <h3 class="text-xl text-gray-900 font-bold mb-2">5. Cookies</h3>
    <p class="mb-4">Harava Scraper uses cookies to store actions on the user's device and data collected through scraping. This data is accessible only to the user and is not sent to Wadelmasiru or other third parties. If the Chrome browser uses other cookies, their management is subject to the privacy policy of the page the user is browsing.</p>

    <h3 class="text-xl text-gray-900 font-bold mb-2">6. Children's Privacy</h3>
    <p class="mb-4">We do not knowingly collect information from users under the age of 18. If you are a parent and believe that your child has used this extension, you may contact us at asiakaspalvelu@wadelmasiru.fi, and we will ensure appropriate measures to protect the data.</p>

    <h3 class="text-xl text-gray-900 font-bold mb-2">7. Consent</h3>
    <p class="mb-4">By using the Harava Scraper extension, you accept the terms of our privacy policy. We will update the privacy policy as necessary.</p>`,
  };

  return (
    <>
      <Head props={headerData} />
      <PageSectionLite post={post} />
    </>
  );
}

export default PrivacyPolicy;
