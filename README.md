# Popup Generator App
<a href="https://www.typescriptlang.org/" rel="nofollow"><img src="https://user-images.githubusercontent.com/94041207/199491139-83224f69-3533-431c-8c08-b70e0a1990f7.png" height="30" alt="Typescript" data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" style="max-width: 100%;"></a>
<a href="https://reactjs.org/" rel="nofollow"><img src="https://user-images.githubusercontent.com/94041207/199491176-6fbe9d1f-d04c-4a6c-bdaf-ec4a6a397dfc.png" height="30" alt="React" data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style="max-width: 100%;"></a>
<a href="https://nextjs.org/docs" rel="nofollow"><img src="https://user-images.githubusercontent.com/94041207/199491195-e7180506-b458-4c71-ae39-441484b3c898.png" height="30" alt="NextJs" data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" style="max-width: 100%;"></a>
<a href="https://redux.js.org/" rel="nofollow"><img src="https://user-images.githubusercontent.com/94041207/199491190-3b78537e-4e77-430d-9fda-056ec9ed0a98.png" height="30" alt="Redux" data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" style="max-width: 100%;"></a>
<a href="https://tailwindcss.com/" rel="nofollow"><img src="https://user-images.githubusercontent.com/94041207/199491247-ab66b5e4-5750-47a3-8955-dd9ae75c596c.png" height="30" alt="TailwindCSS" data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" style="max-width: 100%;"></a>
<a href="https://vercel.com/" rel="nofollow"><img src="https://user-images.githubusercontent.com/94041207/199493665-4c2af34d-d636-4bc5-98e8-896019462af0.png"  height="30" alt="Vercel" style="max-width: 100%;"></a>
<a href="https://www.figma.com/" rel="nofollow"><img src="https://user-images.githubusercontent.com/94041207/199493671-048b1a30-324d-4806-a7e6-fb9d9f89dc89.png"  height="30" alt="Figma" data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" style="max-width: 100%;"></a>

<p>Eslint & Prettier & React-Dropzone </p>

## Demo

<a href="https://popup-generator.vercel.app/" target="_blank"> Live link 🚀 </a>

## Preview of the project:
👇 Gif, explaining how it works. It may take a long time to load. Wait a second... 👇

![preview](/assets/preview_short.gif)

## Functionalities 
- User selects a popup from templates list
- User selects color, size and position for popup
- User can change the content of popups
- User sets behavioural events for popup to appear
- User copies code and pastes scripts to a website

## Description 
This app creates modular popups/modals that users can use them into their webpages without knowing coding. Users can customize size, content, position, color of modals. They can add image if chosen modal allows. They can determine in which kind of device (desktop, mobile or both) modal will appear, how many seconds after site opened or after what percentage of the page scrolled the modal will appear. Users can also allow to modal to appear for whom only come with links from certain sites and who have certain browser languages. Finally users can allow modal to apper when visitor moves out the mouse cursor to close tab. After these customization process, users get a short code snippet. After just pasting this snippet to a body of an html file the modal will work. Only requirement is tailwind must be installed to the html.

## How users customize modals and use them in their site:  
1- Users choose a modal template from 12 template (I'll make it to 36) according to his need. 

2- Users choose the size of modal. Size change is not reflect to my site. But it will be setted and seen in user’s website when they use

3- Users can determine position of modal in their webpage. There are 9 different position alternatives for modals. Again, this regulation is not reflect to my website. But it will work in users websites.

4- Users can change the color of certain parts of modals. This colored certain parts change from modal to modal. It may be color of whole modal, color of a one or twe button, color of a icon or image background, text color. When users change color, it will be reflected on my page synchronously. There are 5 color alternatives. 

5- If model contain an image or logo/icon, users can change default image or logo with by drag drop or clicking ‘upload’ link. If the modal contains an image or logo, the image upload feature will appear, otherwise the image upload feature will not. Some modals contains both image and logo, so when users select them both image upload feature and logo upload feature will appear in my site. 

6- All text content are customizable regardless text is in header, paragraph, placeholder, button, link or subtext . Users can change them what they want. 

7- Users can determine in which kind of device modal will appear. If they choose desktop, it won’t appear in mobile browsers or vice versa. Default value is both, that means modals will appear both mobile and desktop browsers. If users close this feature with checkbox, value will be both

8- Users can determine how many seconds after their webpage is opened, the selected model will appear. If users close this feature with checkbox, there won’t be a waiting time

9- Users can determine after what percentage of the page scrolled, the selected model will appear. If users close this feature with checkbox, modal will appear immediately. 

** If user customize both “After X Seconds” and “After % Scroll” features, whichever is triggered first the modal will appear and the other will be disabled for this session

10- Users can allow to modal to appear for whom only come with links from certain sites. For example, if facebook is selected as the traffic source, the modal will appear only to those who come by clicking the links on facebook. If users turn off this feature with checkbox or do not specify any site, the modal will appear to all users, regardless of where they came from.

11- Users can allow to modal to appear for who have certain browser languages. For example, if the user selects French and Portuguese as the allowed browser language, the modal will appear only to those whose browser language is French or Portuguese, and not to those whose browser language is English, German or Turkish. By default modals appear in all languages. 

12- Modals should only be appeard once and should not be opened after closing. The only exception is the "Exit Targeting" feature. With this feature, even if the visitor closes the modal on first opening, after navigating the page, the modal will appear again when dragging the mouse cursor to the top of the browser to close the tab. But this feature only works once. The modal does not reappear when the user drags the mouse cursor up again. By default this feature is active unless users close it by checkbox radio button

13- After all these customization, clicking the two required checkboxes and "Get your Code" button, a short code snippet appears in the down section.

14- The only requirements for users to use modals is that tailwind must be installed on their website. If this requirement was met, users should paste the copied code snippet just before the "</body>" tag in the html file where they want the Modal to run. 

15- Now users have a working modal on their website that they set up entirely by themselves. Most importantly, without writing any code.
