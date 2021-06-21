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
        "name": "How to Make Text Easier to Read in Windows",
        "url": "https://support.microsoft.com/en-us/windows/make-windows-easier-to-see-c97c2b0d-cadb-93f0-5fd1-59ccfe19345d",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Windows",
        "keywords": ['font', 'font size', 'zoom', 'screen zoom', 'screen', 'hard to read', 'zoom in', 'bigger']
    },
    {
        "name": "How to Add HyperLink to a Formstack Form",
        "url": "https://help.formstack.com/hc/en-us/articles/360019205732-How-to-add-a-Hyperlink-to-your-Form",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Formstack",
        "keywords": ['forms', 'create a form']
    },
    {
        "name": "How to Add, Edit, Delete, Copy, Move Fields in a Formstack Form",
        "url": "https://help.formstack.com/hc/en-us/articles/360019205852-Add-Edit-Delete-Copy-Move-Fields",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Formstack",
        "keywords": ['forms', 'create a form']
    },
    {
        "name": "Basic Form Editing in Formstack",
        "url": "https://www.formstack.com/resources/guide-basic-form-editing",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Formstack",
        "keywords": ['forms', 'create a form']
    },
    {
        "name": "Microsoft 365: How to login to Outlook and Office.com",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/How-to-login-to-Outlook-and-Office.com.aspx",
        "type": "video",
        "origin": "Training & Learning Center",
        "application": "Microsoft 365",
        "keywords": ['login', 'log on', 'log']
    },
    {
        "name": "When to use the CSCF Cloud",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/When-to-use-the-CSCF-Cloud.aspx",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "Cloud",
        "keywords": ['citrix', 'cscf cloud', 'the cloud']
    },
    {
        "name": "How to create an Apple iCloud Account for your CSCF iPhone",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/How-to-Create-a-CSCF-iCloud-Account-to-use-the-App-Store.aspx",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "iPhone",
        "keywords": ['make icloud', 'add icloud', 'sign up', 'apple', 'ios']
    },
    {
        "name": "How to install Apps on your CSCF iPhone",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/How-to-Create-a-CSCF-iCloud-Account-to-use-the-App-Store.aspx",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "iPhone",
        "keywords": ['iphone apps', 'add app', 'install app', 'install', 'download']
    },
    {
        "name": "How to Share Your Screen with Microsoft Teams",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/Share-your-screen-with-Microsoft-Teams.aspx",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "Microsoft Teams",
        "keywords": []
    },
    {
        "name": "How to Use OneDrive at CSCF",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/Information%20Technology%20Documents/IT%20Tutorials/Tutorial%20-%20How%20to%20Use%20OneDrive.pdf",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "Microsoft OneDrive",
        "keywords": ['wcfshared', 'shared drive', 'share', 'file', 'files', 'upload', 'upload files', 'share file', 'send files', 'storage', 'download file', 'free up space', 'shared folder']
    },
    {
        "name": "Setup Instructions for CSCF Laptop",
        "url": "https://laptop.cscfl.org",
        "type": "video",
        "origin": "Training & Learning Center",
        "application": "Hardware",
        "keywords": []
    },
    {
        "name": "How to submit a ticket to IT",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/Manage-Engine-Tutorial.aspx",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "Manage Engine",
        "keywords": []
    },
    {
        "name": "How to set your left navigation in Employ Florida",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/_layouts/15/guestaccess.aspx?e=1A8AlL&share=EcmqkohjDpxGkq8O2z7hbasBA5A5YiEGzOlwxN8DTHrm4w",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "Employ Florida",
        "keywords": []
    },
    {
        "name": "How to Recognize and Avoid Phishing",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/How-to-Recognize-and-Avoid-Phishing.aspx",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "Email",
        "keywords": []
    },
    {
        "name": "How to Install Teams on CSCF iPhone",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/How-to-Install-Microsoft-Teams-on-your-CSCF-iPhone.aspx",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "iPhone",
        "keywords": []
    },
    {
        "name": "How to Forward your CSCF Desk Phone",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/_layouts/15/guestaccess.aspx?e=OsdfgT&share=EYEC_SoZXYxDvzC5lYLumVoBhGGsjiNbknQDJymUyO9T4g",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "Desk Phone",
        "keywords": []
    },
    {
        "name": "How to Prepare Equipment for Hurricane Warnings",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/_layouts/15/guestaccess.aspx?e=jGDi5o&share=EZ3H_3gJ7PJBg8oUf-NMxUwBIy05KEXeA-dB6ftJdynLXw",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "Hardware",
        "keywords": []
    },
    {
        "name": "How to Change Desktop Zoom Level",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/_layouts/15/guestaccess.aspx?e=nah0BR&share=EQIE07y7D_NJuDj5bZ3doqkBL-RqBNmtxdUpFWsOllFffQ",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "Windows",
        "keywords": []
    },
    {
        "name": "How to Use Your CSCF iPhone Hotspot",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/_layouts/15/guestaccess.aspx?e=ViFRLQ&share=EXHXcDtBfJJJj50uODnSUK0BWBfoM97zfYwsK_LHVDzahw",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "iPhone",
        "keywords": []
    },
    {
        "name": "How to Update Your Email Signature",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/Email-Signature-Refresh.aspx",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "Email",
        "keywords": []
    }
];