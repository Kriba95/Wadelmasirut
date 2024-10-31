import { useState } from "react";
import useSWR from "swr";
import Sidebar from "@/components/navbar/Sidebar";
import SideNavbar from "@/components/navbar/SideNavbar";

const fetcher = async (uri) => {
  const response = await fetch(uri);
  return response.json();
};

export default function Example() {
  const { data, error, mutate } = useSWR("/api/domains", fetcher);

  const [emailList, setEmailList] = useState("");
  const [excludeEmailList, setExcludeEmailList] = useState("");
  const [domainToAdd, setDomainToAdd] = useState("");
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [savedDomains, setSavedDomains] = useState([]);
  const [totalEmails, setTotalEmails] = useState(0);
  const [filteredEmailCount, setFilteredEmailCount] = useState(0);

  if (error) return <div>Oops... {JSON.stringify(error)}</div>;
  if (!data) return <div>Loading...</div>;


  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddDomain();
    }
  };

  const handleAddDomain = async () => {
    if (!domainToAdd) return;

    // Jakaa syötetyt domainit rivinvaihtojen mukaan
    const domainsToAdd = domainToAdd
      .split(" ")
      .map((domain) => domain.trim())
      .filter((domain) => domain !== "");

    // Käy läpi jokaisen domainin ja lisää sen
    try {
      const promises = domainsToAdd.map(async (domain) => {
        const response = await fetch("/api/domains", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ domain }),
        });

        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.error);
        }

        // Palautetaan onnistuneesti lisätty domain
        return domain;
      });

      // Odotetaan, että kaikki POST-pyynnöt ovat valmiita
      const addedDomains = await Promise.all(promises);

      // Päivitetään tilanne ja tyhjennetään syöttökenttä
      setSavedDomains((prev) => [...prev, ...addedDomains]);
      setDomainToAdd("");
      mutate(); // Päivitä SWR-tiedot
    } catch (error) {
      console.error("Failed to add domain", error);
      alert(error.message);
    }
  };

  const handleRemoveDomain = async (domainToRemove) => {
    try {
      // Poista domain paikallisesta tilasta
      setSavedDomains(
        savedDomains.filter((domain) => domain !== domainToRemove)
      );

      // Lähetä poistopyyntö API:lle
      await fetch("/api/domains", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ domain: domainToRemove }),
      });
      mutate();
    } catch (error) {
      console.error("Error removing domain:", error);
    }
  };

  const handleRemoveExcludedEmail = async (emailToRemove) => {
    console.log(emailToRemove);
    try {
      // Poista domain paikallisesta tilasta
      setFilteredEmails(
        savedDomains.filter((email) => email !== emailToRemove)
      );

      // Lähetä poistopyyntö API:lle
      await fetch("/api/domains", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ excludedEmail: emailToRemove }),
      });
      mutate();
    } catch (error) {
      console.error("Error removing email:", error);
    }
  };
  const handleFilterEmails = () => {

    const emails = emailList
        .split("\n")
        .map((email) => email.trim()) // Remove extra spaces
        .filter((email) => email !== ""); // Filter out empty lines

    // Use the excluded emails directly from data
    const excludeEmails = data?.excludedEmails.map(item => item.email); // Get email strings

    const filtered = emails.filter((email) => {
        // Extract the domain from the email
        const emailDomain = email.split("@")[1];

        // Check if the email domain exists in the allowed domains
        const isNotInDomain = !data?.domains.some((domain) => 
            emailDomain === domain.domain
        );

        // Check if the email is not in the excluded emails list
        const isNotExcluded = !excludeEmails.includes(email);

        return isNotInDomain && isNotExcluded;
    });

    console.log(filtered);


    const uniqueFilteredEmails = [...new Set(filtered)];



    // Update filtered emails and counters
    setFilteredEmails(uniqueFilteredEmails);
    setTotalEmails(emails.length);
    setFilteredEmailCount(uniqueFilteredEmails.length);
};

const handleIncludeEmailsByDomain = () => {
  console.log(includeEmailList); // Log the included domains (if you are using this for debugging)

  // Example of included domains. This could also come from user input or a predefined list.
  const includedDomains = ["gmail.com", "hotmail.com"]; // Specify the domains you want to include

  const emails = emailList
      .split("\n")
      .map((email) => email.trim()) // Remove extra spaces
      .filter((email) => email !== ""); // Filter out empty lines

  // Filter emails that match any of the included domains
  const includedFiltered = emails.filter((email) => {
      const emailDomain = email.split("@")[1]; // Extract the domain part of the email
      return includedDomains.includes(emailDomain); // Check if the domain is in the included domains
  });

  // Remove duplicates by converting to a Set and back to an array
  const uniqueIncludedEmails = [...new Set(includedFiltered)];

  console.log(uniqueIncludedEmails);

  // Update included emails and counters
  setFilteredEmails(uniqueIncludedEmails);
  setTotalEmails(emails.length);
  setFilteredEmailCount(uniqueIncludedEmails.length);
};


  

  const handleCopyToClipboard = () => {
    const text = filteredEmails.join("\n");
    navigator.clipboard.writeText(text);
    alert("Filtered emails copied to clipboard!");
  };

  const handleAddExcludedEmail = async () => {
    console.log(excludeEmailList);
    if (!excludeEmailList) return; // Make sure there are emails to exclude

    // Split the excluded email list by new lines, trim and filter empty lines
    const emailsToAdd = excludeEmailList
      .split("\n")
      .map((email) => email.trim())
      .filter((email) => email !== "");

    try {
      // Send each email to the API for saving
      const promises = emailsToAdd.map(async (excludedEmail) => {
        const response = await fetch("/api/domains", {
          // Adjusted endpoint for excluded emails
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ excludedEmail }), // Send each email as a separate request
        });

        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.error); // Handle API errors
        }

        return excludedEmail; // Return successfully added emails
      });

      const addedEmails = await Promise.all(promises); // Wait for all POST requests

      // Optionally, update the UI or state to reflect the new excluded emails
      setFilteredEmails((prev) => [...prev, ...addedEmails]); // Add new emails to state
      setExcludeEmailList(""); // Clear the input field after saving
      mutate(); // Update the data fetched by SWR
    } catch (error) {
      console.log(error);
      console.error("Failed to add excluded email:", error);
      alert(error.message); // Display error to the user
    }
  };

  if (data.protected === true) {
    console.log(data);
    return (
      <div className="relative h-screen flex overflow-hidden bg-white">
        <Sidebar page="Koti" />
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <SideNavbar />
          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <div className="flex xl:pr-8 xl:border-r xl:border-gray-200">
              <div className="w-full max-w-4xl m-8 p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-700">
                  Email Filter
                </h3>
                {/* Email List Textarea */}
                <textarea
                  id="emailList"
                  value={emailList}
                  onChange={(e) => setEmailList(e.target.value)}
                  className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Paste email list here"
                ></textarea>
                {/* Exclude Email List Textarea */}

                <h3 className="text-2xl font-bold mb-6 text-gray-700">
                  Email Exclude Filter
                </h3>
                {/* Email List Textarea */}
                <textarea
                  id="emailExclueList"
                  value={excludeEmailList}
                  onChange={(e) => setExcludeEmailList(e.target.value)}
                  className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Paste email list here"
                ></textarea>
        
                <button
                  onClick={handleAddExcludedEmail}
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 transition"
                >
                  Add Excluded Emails
                </button>


                
            
                {/* Domain Filter Input and Button */}
                <div className="flex mt-2 items-center mb-4">
                  <input
                    type="text"
                    id="filterDomain"
                    value={domainToAdd}
                    onChange={(e) => setDomainToAdd(e.target.value)}
                    onKeyDown={handleKeyDown} // Lisää tämä rivi
                    className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter domain to add, e.g., @hel.fi"
                  />
                  {/* <button
                    id="addDomainButton"
                    onClick={handleAddDomain}
                    className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 transition"
                  >
                    Add Domain
                  </button> */}
                </div>

                {/* Buttons for Filtering and Copying */}
                <div className="flex justify-between items-center mt-6">
                  <button
                    id="filterButton"
                    onClick={handleFilterEmails}
                    className="p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-500 transition"
                  >
                    Filter Emails
                  </button>
                  <button
                    id="copyButton"
                    onClick={handleCopyToClipboard}
                    className="p-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 transition"
                  >
                    Copy to Clipboard
                  </button>
                </div>
                {/* Stats Section */}
                <div className="mt-6">
                  <p className="text-lg">
                    Total Emails:{" "}
                    <span id="totalEmails" className="font-bold">
                      {totalEmails}
                    </span>
                  </p>
                  <p className="text-lg">
                    Filtered Emails:{" "}
                    <span id="filteredEmails" className="font-bold">
                      {filteredEmailCount}
                    </span>
                  </p>
                </div>
                {/* Filtered Emails Output */}
                <h4 className="text-xl font-semibold mt-6 mb-3 text-gray-700">
                  Filtered List
                </h4>
                <textarea
                  id="filteredList"
                  value={filteredEmails.join("\n")}
                  readOnly
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>





              <div className="w-full max-w-4xl m-8 p-6 bg-white shadow-lg rounded-lg">
                <div>
                  {/* Saved Domains List */}
                  <h4 className="text-xl font-semibold mb-3 text-gray-700">
                    Saved Exclude Emails
                  </h4>
                  <ul
                    id="domainList"
                    className="list-disc pl-5 space-y-2 h-96 overflow-auto"
                  >
                    {console.log(data)}
                    {data?.excludedEmails?.map((i) => (
                      <li
                        key={i.email}
                        className="flex justify-between items-center"
                      >
                        {i.email}
                        <button
                          onClick={() => handleRemoveExcludedEmail(i.email)}
                          className="ml-4 text-red-500 hover:text-red-700 transition"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  {/* Saved Domains List */}
                  <h4 className="text-xl font-semibold mb-3 text-gray-700">
                    Saved Domains
                  </h4>
                  <ul
                    id="domainList"
                    className="list-disc pl-5 space-y-2 h-96 overflow-auto"
                  >
                    {data?.domains
                      ?.slice() // Luodaan kopio domain-listasta, jotta alkuperäinen data ei muutu
                      .sort((a, b) => a.domain.localeCompare(b.domain)) // Järjestetään aakkosjärjestykseen
                      .map((i) => (
                        <li
                          key={i.domain}
                          className="flex justify-between items-center"
                        >
                          {i.domain}
                          <button
                            onClick={() => handleRemoveDomain(i.domain)}
                            className="ml-4 text-red-500 hover:text-red-700 transition"
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative h-screen flex items-center justify-center bg-blue-gray-50 overflow-hidden">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Et ole kirjautunut</h1>
          <p className="mb-6 text-lg text-gray-600">
            Pääsy tämän sivun sisältöön edellyttää kirjautumista. Kirjaudu
            sisään päästäksesi käyttämään kaikkia palveluita ja ominaisuuksia.
          </p>
          <a
            href="/api/auth/login"
            className="inline-block px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
          >
            Kirjaudu sisään
          </a>
        </div>
      </div>
    );
  }
}
