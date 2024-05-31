Indonesia's Famous Islands: Bali and Lombok
Welcome to the Indonesia's Famous Islands project! This project is a simple, informative website built using HTML, CSS, and JavaScript, designed to introduce and provide information about two of Indonesia's most famous islands: Bali and Lombok. The website features a detailed description of both islands, including major regions and popular activities in Lombok. Additionally, it includes an interactive budget tracker and a weather forecast section to enhance user experience. The budget tracker allows users to add and remove expenses, while the weather forecast feature provides real-time weather updates for any city entered by the user.

Design Process
1. Initial Setup and Structure
We began by creating the basic HTML structure for the website, with separate sections for Bali and Lombok. This included adding headings, paragraphs, and an initial style sheet to set up the layout and design framework.

2. Detailed Content for Lombok
Next, we added detailed content for the Lombok section, including descriptions of various regions such as West Lombok, North Lombok, and the Gili Islands. We incorporated an ordered list to organize the information clearly and added a map image to visually represent the regions.

3. Budget Tracker Feature
We implemented a budget tracker feature using JavaScript. This involved creating input fields for the description, amount, and day of expenses, as well as a button to add expenses. Each expense entry included a remove button to allow users to delete incorrect entries. We also added a JavaScript file, budgetTracker.js, to handle the logic for adding, removing, and calculating the total expenses.

4. Activities Page
To further enhance the user experience, we created a separate page, things_to_do.html, listing popular activities in Lombok. Each activity was accompanied by a description and relevant images. We ensured the page was navigable by adding a navigation bar to switch between the home page and the activities page.

5. Weather Forecast Feature
We integrated a weather forecast section using the Weatherstack API. This feature allows users to input a city or ZIP code and receive real-time weather updates. The JavaScript function fetches data from the API and displays the weather information dynamically.

6. Styling and Layout
Throughout the design process, we continuously updated the CSS to enhance the visual appeal and usability of the website. This included spacing adjustments, alignment, and responsive design considerations to ensure the site looks good on various devices.

7. Final Touches
Finally, we added a navigation bar to the top of the pages, ensuring seamless transitions between the home page and the activities page. We also created a README file summarizing the project, its features, and the design process.


Features:
1. Home Page (about.html): Provides an introduction to Bali and Lombok, with detailed descriptions and images of various regions in Lombok. It includes a navigation bar to switch between the home page and the activities page.

2. Things to Do Page (things_to_do.html): Lists various activities to do in Lombok, complete with descriptions and images. It also includes navigation back to the home page.

3. Budget Tracker: A feature implemented in JavaScript to help users track their expenses by day, including options to add and remove expenses.
Weather Forecast: An interactive section that allows users to input a city or ZIP code and receive real-time weather updates using the Weatherstack API.

Features Left to Implement:
1. Local Event Summary
To further enrich the user experience, I plan to integrate a section dedicated to summarizing local events happening in Bali and Lombok. This will include information on cultural festivals, local markets, music and dance performances, and other significant events. Users will be able to see upcoming events, dates, venues, and a brief description. This feature will help travelers plan their trips to coincide with local happenings, offering a deeper cultural immersion.

2. Travel Restrictions & Emergency Contact
In the interest of traveler safety and convenience, I will add a section detailing current travel restrictions and emergency contact information. This section will include updates on any travel advisories, entry requirements, health protocols, and local laws. Additionally, it will provide a list of important contacts such as local emergency services, embassies, and consulates. Having this information readily accessible will ensure travelers are well-prepared and informed about safety measures and who to contact in case of an emergency.

3. Currency Conversion
A currency conversion tool will be incorporated to assist travelers in managing their finances more effectively. This feature will allow users to convert their home currency to the local currency (Indonesian Rupiah) and vice versa. The tool will fetch real-time exchange rates to provide accurate conversions. This will be particularly useful in the Budget Tracker section, enabling users to track their expenses in both their home currency and the local currency, ensuring they stay within their budget while traveling.


Technologies Used
1. Languages
HTML5: Used to create the structure and content of the webpages, ensuring semantic and accessible markup.
CSS: Utilized for styling the website, including layout design, typography, colors, and responsive design elements.
JavaScript: Implemented for dynamic interactions, including the Budget Tracker feature and the Weather Forecast functionality.

2. Libraries and Frameworks
Fetch API: Used in JavaScript to retrieve data from external APIs, such as the weather data from Weatherstack.
FontAwesome: Included for adding icons to enhance the visual appeal and user experience of the navigation and content sections.

3. Tools
Visual Studio Code: The primary code editor used for writing and managing the project's codebase.
Git: Utilized for version control, enabling collaboration and tracking changes throughout the development process.
GitHub: Hosted the project's repository, providing a platform for collaboration, issue tracking, and project management.

4. APIs
Weatherstack API: Integrated to fetch and display real-time weather information based on user input.


Testing
Manual Testing Scenarios
1. Navigation
-Navigate to Home Page:
-Open the website in a browser.
-Verify that the homepage (about.html) loads correctly with the navigation bar visible at the top right.
-Click on the "Things to Do" link and verify it redirects to things_to_do.html.
-Click on the "Home" link on things_to_do.html and verify it redirects back to about.html.

2. Budget Tracker
-Go to the "Budget Tracker" section on about.html.
-Enter a description, amount, and day in the respective fields.
-Click the "Add Expense" button.
-Verify the expense appears in the list with a remove button next to it.
-Check that the total amount updates correctly.

3. Weather Forecast
-Go to the "Weather Forecast" section on about.html.
-Enter a city name or ZIP code.
-Select the desired units (Fahrenheit or Celsius).
-Click the "Get Weather!" button.
-Verify that the weather information, including an icon and details, is displayed correctly.

Credits
Content
The text for section Y was copied from the Wikipedia.

Media
The photos used in this site were obtained from Wikipedia, and the video used is linked to youtube.

Acknowledgements
I received inspiration for this project from sevaral Travel Websites and templates.