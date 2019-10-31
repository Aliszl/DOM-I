const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};





// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
console.log(logo);

// Nav Bar

// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

let links = document.querySelectorAll('a');
for(i=0; i<links.length; i++){
  links[i].textContent = siteContent.nav [`nav-item-${i+1}`];
  links[i].style.color = "green";
}
console.log(links[1].previousElementSibling);
const newNav1 = document.createElement('a');
console.log(newNav1);
newNav1.textContent = 'Nav-item-7';
const newNav2 = document.createElement('a');
newNav2.textContent = 'Nav-item-8';
console.log(newNav2);

links[1].previousElementSibling.prepend(newNav1);
links[5].previousElementSibling.append(newNav2);
//====== Creating New HTML Elements ======//
// 1- Create Element
// const newParagraph = document.createElement('p');
// // 2- Add Content
// newParagraph.textContent = 'Hello! What is your name?';
// // 3- Select Target Parent Element
// const secondaryContent = document.querySelector('.secondary-content');
// // 4- Add Element To Parent
// secondaryContent.append(newParagraph);

// // Adding as first child
// // secondaryContent.prepend(newParagraph);

// const newHeading = document.createElement('h1');

// newHeading.textContent = 'Cash rules everything around me!';

// const mainContent = document.querySelector('.main-content');

// mainContent.prepend(newHeading);

// alternate way
// let navLink1 = document.querySelector("a");
// navLink1.innerText = siteContent.nav["nav-item-1"];
// console.log(navLink1);

// let navLink2 = document.querySelector("a:nth-child(2)");
// navLink2.innerText = siteContent.nav["nav-item-2"];
// console.log(navLink2);

// let navLink3 = document.querySelector("a:nth-child(3)");
// navLink3.innerText = siteContent.nav["nav-item-3"];
// console.log(navLink3);

// let navLink4 = document.querySelector("a:nth-child(4)");
// navLink4.innerText = siteContent.nav["nav-item-4"];
// console.log(navLink4);

// let navLink5 = document.querySelector("a:nth-child(5)");
// navLink5.innerText = siteContent.nav["nav-item-5"];
// console.log(navLink5);

// let navLink6 = document.querySelector("a:nth-child(6)");
// navLink6.innerText = siteContent.nav["nav-item-6"];
// console.log(navLink6);

// Get started Button
let getStartedButton = document.querySelector("button");
// domIsAwesomeTitle.textContent('src', siteContent["cta"]["h1"])
console.log(getStartedButton);
getStartedButton.textContent = siteContent["cta"]["button"];



// Circular Image

let codeSnippet = document.getElementById("cta-img");

codeSnippet.setAttribute('src', siteContent["cta"]["img-src"])
console.log(codeSnippet);



// main Title - Dom Is Awesome
let domIsAwesomeTitle = document.querySelector(".cta .cta-text h1");

domIsAwesomeTitle.textContent = siteContent["cta"]["h1"];
console.log(domIsAwesomeTitle);

// Main content - top
const topContentH4 = document.querySelectorAll('.top-content .text-content h4');
const topContentP = document.querySelectorAll('.top-content .text-content p');
topContentH4[0].textContent = siteContent["main-content"]["features-h4"];
topContentP[0].textContent = siteContent["main-content"]["features-content"];
topContentH4[1].textContent = siteContent["main-content"]["features-h4"];
topContentP[1].textContent = siteContent["main-content"]["features-content"];

// Full width Image

let fullWidthCodePic = document.getElementById("middle-img");

fullWidthCodePic.setAttribute('src', siteContent["main-content"]["middle-img-src"])
console.log(fullWidthCodePic);

// Main content - bottom
const bottomContentH4 = document.querySelectorAll('.bottom-content .text-content h4');
const bottomContentP = document.querySelectorAll('.bottom-content .text-content p');
bottomContentH4[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentP[0].textContent = siteContent["main-content"]["services-content"];
bottomContentH4[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentP[1].textContent = siteContent["main-content"]["product-content"];
bottomContentH4[2].textContent = siteContent["main-content"]["vision-h4"];
bottomContentP[2].textContent = siteContent["main-content"]["vision-content"];

// Contact section
const contactH4 = document.querySelector('.contact h4');
const contactP = document.querySelectorAll('.contact p');
console.log(contactH4);
contactH4.textContent = siteContent["contact"]["contact-h4"];
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];
// // bottomContentP[3].textContent = siteContent["contact"]["address"];

// Footer

const footerP = document.querySelector('footer p');
console.log(footerP);
footerP.textContent = siteContent["footer"]["copyright"];

// This Works too

// let domIsAwesomeTitle = document.querySelector(".cta .cta-text h1");
// console.log(domIsAwesomeTitle);
// domIsAwesomeTitle.textContent = "DOM Is Awesome";

// This doesnt work:
// let domIsAwesomeTitle = document.querySelector(".cta .cta-text h1");
// domIsAwesomeTitle.setAttribute('src', siteContent["cta"]["h1"])
// console.log(domIsAwesomeTitle);

// Old attempts
// This works for features
// let featuresHeader = document.querySelector(".text-content h4:nth-child(1)");
// console.log(featuresHeader);


// but this doesnt work for about
// let aboutHeader = document.querySelector("h4:nth-child(1)");
// let features = document.querySelector("p:nth-child(1)");
// console.log(features);

// This doesnt work as cant use the string litteral at the end like with Nav
// let headers = document.querySelectorAll('h4');
// for(i=0; i<headers.length; i++){
//   headers[i].textContent = siteContent.main-content [i];
// }

// let featuresHeader = document.querySelectorAll("h4:nth-child(0)");
// // h4:nth-child(1)
// console.log(featuresHeader);
// featuresHeader.innerText = siteContent["main-content"]["features-h4"];

// let aboutHeader = document.querySelectorAll("h4:nth-child(2)");
// console.log(aboutHeader);
// aboutHeader.innerText = siteContent["main-content"]["about-h4"];






