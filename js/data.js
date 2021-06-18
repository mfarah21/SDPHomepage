// How to update this with new guides:
// Open the Sharepoint page and open console
// with the menu open.
//
// let guides = document.querySelectorAll('[data-focuszone-id="FocusZone126"] a')
// let data = [];
//
// for(let g of guides){
// data.push({name:g.name, url: g.href})
// }
//
// right click 'data' obj > Copy Object
// Paste below

const guidesData = [
    {
        "name": "When to use the CSCF Cloud",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/When-to-use-the-CSCF-Cloud.aspx",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "Cloud"
    },
    {
        "name": "How to install Apps on your CSCF iPhone",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/How-to-Create-a-CSCF-iCloud-Account-to-use-the-App-Store.aspx",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "iPhone"
    },
    {
        "name": "How to Share Your Screen with Microsoft Teams",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/Share-your-screen-with-Microsoft-Teams.aspx",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "Microsoft Teams"
    },
    {
        "name": "How to Use OneDrive at CSCF",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/Information%20Technology%20Documents/IT%20Tutorials/Tutorial%20-%20How%20to%20Use%20OneDrive.pdf",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "Microsoft OneDrive"
    },
    {
        "name": "How to submit a ticket to IT",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/Manage-Engine-Tutorial.aspx",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "Manage Engine"
    },
    {
        "name": "How to set your left navigation in Employ Florida",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/_layouts/15/guestaccess.aspx?e=1A8AlL&share=EcmqkohjDpxGkq8O2z7hbasBA5A5YiEGzOlwxN8DTHrm4w",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "Employ Florida"
    },
    {
        "name": "How to Recognize and Avoid Phishing",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/How-to-Recognize-and-Avoid-Phishing.aspx",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "Email"
    },
    {
        "name": "How to Install Teams on CSCF iPhone",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/How-to-Install-Microsoft-Teams-on-your-CSCF-iPhone.aspx",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "iPhone"
    },
    {
        "name": "How to Forward your CSCF Desk Phone",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/_layouts/15/guestaccess.aspx?e=OsdfgT&share=EYEC_SoZXYxDvzC5lYLumVoBhGGsjiNbknQDJymUyO9T4g",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "Desk Phone"
    },
    {
        "name": "How to Prepare Equipment for Hurricane Warnings",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/_layouts/15/guestaccess.aspx?e=jGDi5o&share=EZ3H_3gJ7PJBg8oUf-NMxUwBIy05KEXeA-dB6ftJdynLXw",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "Hardware"
    },
    {
        "name": "How to Change Desktop Zoom Level",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/_layouts/15/guestaccess.aspx?e=nah0BR&share=EQIE07y7D_NJuDj5bZ3doqkBL-RqBNmtxdUpFWsOllFffQ",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "Windows"
    },
    {
        "name": "How to Use Your CSCF iPhone Hotspot",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/_layouts/15/guestaccess.aspx?e=ViFRLQ&share=EXHXcDtBfJJJj50uODnSUK0BWBfoM97zfYwsK_LHVDzahw",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "iPhone"
    },
    {
        "name": "How to Update Your Email Signature",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/Email-Signature-Refresh.aspx",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "Email"
    }
];

const applications = {
    // List all applications here
    // colors: [Text Color, Background]
    "Email": {
        name: `Email`,
        description: ``,
        icon: `./image/applications/email.png`,
        colors: ['#009bff', '#009bff'],
        url: `https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/Information-Technology-Training-Page.aspx`
    },
    "iPhone": {
        name: `iPhone`,
        description: ``,
        icon: `./image/applications/iphone.svg`,
        colors: ['#f1f1f1', '#535353'],
        url: `https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/Information-Technology-Training-Page.aspx#cscf-phones-%28iphone-desk-phone%29`
    },
    "Windows": {
        name: `Windows`,
        description: ``,
        icon: `./image/applications/windows.svg`,
        colors: ['#0f2f5a', '#67baff'],
        url: `https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/Information-Technology-Training-Page.aspx`
    },
    "Hardware": {
        name: `Hardware`,
        description: ``,
        icon: `./image/applications/hardware.svg`,
        colors: ['#2c0e00', '#f1dcca'],
        url: `https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/Information-Technology-Training-Page.aspx`
    },
    "Desk Phone": {
        name: `Desk Phone`,
        description: ``,
        icon: `./image/applications/desk_phone.svg`,
        colors: ['#ffffff', 'rgb(126, 126, 126)'],
        url: `https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/Information-Technology-Training-Page.aspx#cscf-phones-%28iphone-desk-phone%29`
    },
    "Cloud": {
        name: `Cloud`,
        description: ``,
        icon: `./image/applications/cloud.svg`,
        colors: ['#009bff', 'rgb(179 246 255 / 75%)'],
        url: `https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/Information-Technology-Training-Page.aspx#cscf-cloud-%28virtual-cscf-desktop%29`
    },
    "Employ Florida": {
        name: `Employ Florida`,
        description: ``,
        icon: `./image/applications/employ_florida.svg`,
        colors: ['#a84318', '#ffe8de'],
        url: `https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/Information-Technology-Training-Page.aspx`
    },
    "Manage Engine": {
        name: `Manage Engine`,
        description: ``,
        icon: `./image/applications/manage_engine.svg`,
        colors: ['#dd962b', 'rgb(255, 230, 175)'],
        url: `https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/Information-Technology-Training-Page.aspx#manageengine-%28helpdesk%29`
    },
    "Microsoft OneDrive": {
        name: `Microsoft OneDrive`,
        description: ``,
        icon: `./image/applications/microsoft_onedrive.png`,
        colors: ['#0078d4', '#fff'],
        url: `https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/Information-Technology-Training-Page.aspx#onedrive-%28saving-and-sharing-files%29`
    },
    "Microsoft Teams": {
        name: `Microsoft Teams`,
        description: ``,
        icon: `./image/applications/microsoft_teams.png`,
        colors: ['#7071bb', '#fff'],
        url: `https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/Information-Technology-Training-Page.aspx#microsoft-teams-%28instant-message%29`
    },
}