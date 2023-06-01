# Changing CSS & Text
## Overview
In this section, we'll talk about how to change the appearance of the app by changing the CSS and text.
### Header
----------
The header is the bar at the top of the page that contains the title of the app. We can change the text in the header by changing the text in the `title` tag in the `app/frontend/index.html` file.
### Navbar
----------
The navbar is the bar at the top of the page that contains the title of the app and the links to the different pages, along with a logo. 
#### Logo
To change the logo, you must first add an image to the `app/frontend/src/assets` folder. You will find `github.svg` there. Using a `.svg` file is recommend in order to maintain logo quality when scaling down the size. Next, navigate to `app/frontend/src/pages/layout/Layout.tsx`. At the top of the file, import the file near the other import statements. For example:
``` javascript
import contoso from "../../assets/contoso.svg";
```
Now in the same file (`Layout.tsx`) scroll down to the following section. 
``` javascript
src={github}
alt="Github logo"
aria-label="Link to github repository"
```
Replace it with the name of your logo, add a label, and alt text. For example:
``` javascript
src={contoso}
alt="Contoso logo"
aria-label="Link to contoso website"
```
Finally, we go two lines above this code, you will see a href tag containing a link to `https://aka.ms/entgptsearch`. You may change this href to link to whatever website of your choosing, such as your company's homepage. 
#### Colour
TBC.

To change the colour of the navbar, by changing the `background-color` variable in the `Layout.module.css` file in `app/frontend/src/pages/layout`. We can change the color of the text in the navbar by changing the `color` variable in the same file.
### Chat
--------
TBC

The chat is the central part of the page that contains the body of the app. We can change the color of the body by changing the `background-color` variable in the `app/frontend/src/pages/chat/Chat.module.css` file. We can change the color of the text in the same file. To change the star-shaped icon, we can change the `color` variable in the `app/frontend/src/pages/chat/Chat.tsx` file.

TBC
### Text
--------
We can change the color of the text by changing the `color` variable in the `assets/style.css` file. We can change the font of the text by changing the `font-family` variable in the `assets/style.css` file. We can change the size of the text by changing the `font-size` variable in the `assets/style.css` file.
