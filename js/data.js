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
        "name": "How to Access the CSCF Cloud from any Computer",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/Information%20Technology%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FTheSource%2FInformation%20Technology%20Documents%2FIT%20Tutorials%2FTutorial%20%2D%20How%20to%20access%20the%20CSCF%20Cloud%20from%20any%20Computer%2Epdf&parent=%2Fsites%2FTheSource%2FInformation%20Technology%20Documents%2FIT%20Tutorials&p=true&originalPath=aHR0cHM6Ly9jYXJlZXJzb3VyY2VjZi5zaGFyZXBvaW50LmNvbS86Yjovcy9UaGVTb3VyY2UvRVk0V2w0MWdlNnBNbzhtdzNKZ3pJN1FCXzZVV0tFcWhZaDg4Qk9aOVprWFBRUT9ydGltZT1Pa1doWDYwMTJVZw",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "Cloud",
        "keywords": ['cscf cloud']
    },
    {
        "name": "How to Collaborate with Co-workers using OneDrive",
        "url": "https://support.microsoft.com/en-us/office/share-files-and-folders-in-onedrive-personal-3fcefa26-1371-401e-8c04-589de81ed5eb",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Microsoft OneDrive",
        "keywords": ['files', 'upload']
    },
    {
        "name": "How to Share or Sync Files & Folders with OneDrive",
        "url": "https://support.microsoft.com/en-us/office/share-files-and-folders-with-microsoft-365-business-72f26d6c-bf9e-432c-8b96-e3c2437f5b65?wt.mc_id=otc_onedrive",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Microsoft OneDrive",
        "keywords": ['files', 'upload']
    },
    {
        "name": "How to Manage Files & Folders with OneDrive",
        "url": "https://support.microsoft.com/en-us/office/upload-files-and-folders-in-onedrive-work-or-school-5bd927ad-d186-495c-93e8-7ca116fe7b83?wt.mc_id=otc_onedrive",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Microsoft OneDrive",
        "keywords": ['files', 'upload']
    },
    {
        "name": "Introduction to Microsoft OneDrive",
        "url": "https://support.microsoft.com/en-us/office/what-is-onedrive-work-or-school-10f5c3fd-b0f6-40e2-9059-04735ffe01b7?wt.mc_id=otc_onedrive",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Microsoft OneDrive",
        "keywords": ['files', 'upload']
    },
    {
        "name": "How to Schedule a Webinar with Zoom",
        "url": "https://www.youtube.com/embed/dz4KVADtZxg?rel=0&autoplay=1",
        "type": "video",
        "origin": "Vendor Documentation",
        "application": "Zoom",
        "keywords": ['skype', 'zoom', 'meeting', 'chat', 'talk', 'facetime', 'video chat', 'video', 'teams call', 'teams', 'conference', 'webex', 'web chat']
    },
    {
        "name": "How to Share Multiple Screens Simultaneously with Zoom",
        "url": "https://www.youtube.com/embed/pt-tcvaQ9I4?rel=0&autoplay=1",
        "type": "video",
        "origin": "Vendor Documentation",
        "application": "Zoom",
        "keywords": ['skype', 'share screen', 'zoom', 'meeting', 'chat', 'talk', 'facetime', 'video chat', 'video', 'teams call', 'teams', 'conference', 'webex', 'web chat']
    },
    {
        "name": "How to Use Meeting Controls in Zoom",
        "url": "https://www.youtube.com/embed/ygZ96J_z4AY?rel=0&autoplay=1",
        "type": "video",
        "origin": "Vendor Documentation",
        "application": "Zoom",
        "keywords": ['skype', 'zoom', 'meeting', 'chat', 'talk', 'facetime', 'video chat', 'video', 'teams call', 'teams', 'conference', 'webex', 'web chat']
    },
    {
        "name": "How to Schedule a Meeting With Zoom",
        "url": "https://www.youtube.com/embed/XhZW3iyXV9U?rel=0&autoplay=1",
        "type": "video",
        "origin": "Vendor Documentation",
        "application": "Zoom",
        "keywords": ['skype', 'zoom', 'meeting', 'chat', 'talk', 'facetime', 'video chat', 'video', 'teams call', 'teams', 'conference', 'webex', 'web chat']
    },
    {
        "name": "How to Share Your Screen With Zoom",
        "url": "https://www.youtube.com/embed/YA6SGQlVmcA?rel=0&autoplay=1",
        "type": "video",
        "origin": "Vendor Documentation",
        "application": "Zoom",
        "keywords": ['skype', 'share screen', 'zoom', 'meeting', 'chat', 'talk', 'facetime', 'video chat', 'video', 'teams call', 'teams', 'conference', 'webex', 'web chat']
    },
    {
        "name": "Joining & Configuring Audio & Video",
        "url": "https://www.youtube.com/embed/-s76QHshQnY?rel=0&autoplay=1",
        "type": "video",
        "origin": "Vendor Documentation",
        "application": "Zoom",
        "keywords": ['skype', 'zoom', 'meeting', 'chat', 'talk', 'facetime', 'video chat', 'video', 'teams call', 'teams', 'conference', 'webex', 'web chat']
    },
    {
        "name": "How to Join a Zoom Meeting",
        "url": "https://www.youtube.com/embed/hIkCmbvAHQQ?rel=0&autoplay=1",
        "type": "video",
        "origin": "Vendor Documentation",
        "application": "Zoom",
        "keywords": ['skype', 'zoom', 'meeting', 'chat', 'talk', 'facetime', 'video chat', 'video', 'teams call', 'teams', 'conference', 'webex', 'web chat']
    },
    {
        "name": "How to Set Do Not Disturb on iPhone",
        "url": "https://support.apple.com/guide/iphone/set-do-not-disturb-iph5c3f5b77b/14.0/ios/14.0",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "iPhone",
        "keywords": ['ios', 'vibrate', 'silence', 'volume']
    },
    {
        "name": "How to use iPhone",
        "url": "https://support.apple.com/guide/iphone/welcome/ios",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "iPhone",
        "keywords": ['ios']
    },
    {
        "name": "Understanding Dashboards, Reports, and Apps in Power BI",
        "url": "https://docs.microsoft.com/en-us/learn/modules/explore-power-bi-service/3-navigate-content",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Power BI",
        "keywords": ['data', 'dashboards', 'scorecard', 'visualize', 'data warehouse', 'sql']
    },
    {
        "name": "How do I Model Data in Power BI?",
        "url": "https://docs.microsoft.com/learn/modules/model-data-power-bi",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Power BI",
        "keywords": ['data', 'dashboards', 'scorecard', 'visualize', 'data warehouse', 'sql']
    },
    {
        "name": "How do I Filter Data in Power BI?",
        "url": "https://docs.microsoft.com/learn/modules/analyze-data-power-bi/1-filtering-data",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Power BI",
        "keywords": ['data', 'dashboards', 'scorecard', 'visualize', 'data warehouse', 'sql']
    },
    {
        "name": "How do I view Content in Power BI?",
        "url": "https://docs.microsoft.com/learn/modules/explore-power-bi-service/2-find-content",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Power BI",
        "keywords": ['data', 'dashboards', 'scorecard', 'visualize', 'data warehouse', 'sql']
    },
    {
        "name": "How to Convert a PDF to Microsoft Word",
        "url": "https://helpx.adobe.com/acrobat/how-to/export-pdf-to-word-excel-ppt.html?playlist=/services/playlist.helpx/products:SG_ACROBAT_DC/learn-path:key-techniques/playlist:topic/set-header:acrobat-practice-tutorials/en_us.json&ref=helpx.adobe.com",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Adobe Acrobat",
        "keywords": ['document', '.pdf', 'word', '.docx', 'portable document', 'print document', 'protect document', 'adobe pdf', 'acrobat', 'reader', 'adobe']
    },
    {
        "name": "How to Edit Text and Images inside PDF a File",
        "url": "https://helpx.adobe.com/acrobat/how-to/edit-text-images-pdf-files.html?playlist=/services/playlist.helpx/products:SG_ACROBAT_DC/learn-path:key-techniques/playlist:topic/set-header:acrobat-practice-tutorials/en_us.json&ref=helpx.adobe.com",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Adobe Acrobat",
        "keywords": ['document', '.pdf', 'portable document', 'print document', 'protect document', 'adobe pdf', 'acrobat', 'reader', 'adobe']
    },
    {
        "name": "How to Create a PDF from Text and Image Files with Adobe",
        "url": "https://helpx.adobe.com/acrobat/how-to/create-pdfs-from-text-image.html?playlist=/services/playlist.helpx/products:SG_ACROBAT_DC/learn-path:key-techniques/playlist:topic/set-header:acrobat-beginner-tutorials/en_us.json&ref=helpx.adobe.com",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Adobe Acrobat",
        "keywords": ['document', '.pdf', 'portable document', 'print document', 'protect document', 'adobe pdf', 'acrobat', 'reader', 'adobe']
    },
    {
        "name": "How to Use the Adobe Acrobat Interface",
        "url": "https://helpx.adobe.com/acrobat/how-to/new-experience-acrobat-dc.html?playlist=/services/playlist.helpx/products:SG_ACROBAT_DC/learn-path:key-techniques/playlist:topic/set-header:acrobat-beginner-tutorials/en_us.json&ref=helpx.adobe.com",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Adobe Acrobat",
        "keywords": ['document', '.pdf', 'portable document', 'print document', 'protect document', 'adobe pdf', 'acrobat', 'reader', 'adobe']
    },
    {
        "name": "What exactly is a PDF File?",
        "url": "https://en.wikipedia.org/wiki/PDF",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Adobe Acrobat",
        "keywords": ['document', '.pdf', 'portable document', 'print document', 'protect document', 'adobe pdf', 'acrobat', 'reader', 'adobe']
    },
    {
        "name": "How to Create Email Rules for your Inbox with Outlook",
        "url": "https://support.microsoft.com/en-us/office/how-to-set-up-rules-in-outlook-75ab719a-2ce8-49a7-a214-6d62b67cbd41",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Microsoft Outlook",
        "keywords": ['webmail', 'email', 'e-mail', 'automate', 'office.com', 'outlook', 'outlook.com']
    },
    {
        "name": "How to Organize your Email Messages with Folders in Outlook",
        "url": "https://support.microsoft.com/en-us/office/organize-email-by-using-folders-0616c259-4bc1-4f35-807d-61eb59ac79c1",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Microsoft Outlook",
        "keywords": ['webmail', 'email', 'e-mail', 'office.com', 'outlook', 'outlook.com']
    },
    {
        "name": "How to Set categories, Flags, Reminders, or Colors for Email Messages in Outlook",
        "url": "https://support.microsoft.com/en-us/office/set-categories-flags-reminders-or-colors-a894348d-b308-4185-840f-aff63063d076?wt.mc_id=otc_outlook&ui=en-us&rs=en-us&ad=us",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Microsoft Outlook",
        "keywords": ['webmail', 'email', 'e-mail', 'office.com', 'outlook', 'outlook.com']
    },
    {
        "name": "How to Add an Email Signature in Outlook.com",
        "url": "https://support.microsoft.com/en-us/office/create-and-add-an-email-signature-in-outlook-on-the-web-5ff9dcfd-d3f1-447b-b2e9-39f91b074ea3",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Microsoft Outlook",
        "keywords": ['webmail', 'email', 'e-mail', 'office.com', 'outlook', 'outlook.com']
    },
    {
        "name": "How to Create, Reply to, or Forward Email Messages in Outlook.com",
        "url": "https://support.microsoft.com/en-us/office/create-reply-to-or-forward-email-messages-in-outlook-on-the-web-ecafbc06-e812-4b9e-a7af-5074a9c7abd0",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Microsoft Outlook",
        "keywords": ['webmail', 'email', 'e-mail', 'office.com', 'outlook', 'outlook.com']
    },
    {
        "name": "Get Help with Outlook on the Web",
        "url": "https://support.office.com/en-us/article/get-help-with-outlook-on-the-web-cf659288-35cc-4c6c-8c75-e8e4317fda11",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Microsoft Outlook",
        "keywords": ['webmail', 'email', 'e-mail', 'office.com', 'outlook', 'outlook.com']
    },
    {
        "name": "How to Create a Dropdown List in an Excel Spreadsheet",
        "url": "https://support.microsoft.com/en-us/office/create-a-drop-down-list-7693307a-59ef-400a-b769-c5402dce407b",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Microsoft Excel",
        "keywords": ['spreadsheet', 'google sheet']
    },
    {
        "name": "How to Restrict Cell Data in an Excel Spreadsheet",
        "url": "https://support.microsoft.com/en-us/office/apply-data-validation-to-cells-29fecbcc-d1b9-42c1-9d76-eff3ce5f7249",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Microsoft Excel",
        "keywords": ['spreadsheet', 'google sheet']
    },
    {
        "name": "How to Merge Cells in an Excel Spreadsheet",
        "url": "https://support.microsoft.com/en-us/office/merge-and-unmerge-cells-5cbd15d5-9375-4540-907f-c673a93fcedf",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Microsoft Excel",
        "keywords": ['spreadsheet', 'google sheet']
    },
    {
        "name": "How to Find & Replace text in an Excel Spreadsheet",
        "url": "https://support.microsoft.com/en-us/office/find-or-replace-text-and-numbers-on-a-worksheet-0e304ca5-ecef-4808-b90f-fdb42f892e90",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Microsoft Excel",
        "keywords": ['spreadsheet', 'google sheet']
    },
    {
        "name": "How to Move, Copy, or Edit Cells in Excel",
        "url": "https://support.microsoft.com/en-us/office/move-or-copy-cells-and-cell-contents-803d65eb-6a3e-4534-8c6f-ff12d1c4139e?wt.mc_id=otc_excel&ui=en-us&rs=en-us&ad=us",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Microsoft Excel",
        "keywords": ['spreadsheet', 'google sheet']
    },
    {
        "name": "Help Working with Rows and Columns in Excel",
        "url": "https://support.microsoft.com/en-us/office/insert-or-delete-rows-and-columns-6f40e6e4-85af-45e0-b39d-65dd504a3246?wt.mc_id=otc_excel&ui=en-us&rs=en-us&ad=us",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Microsoft Excel",
        "keywords": ['spreadsheet', 'google sheet']
    },
    {
        "name": "How to Collaborate with Co-workers in Excel",
        "url": "https://support.microsoft.com/en-us/office/collaborate-in-excel-a8af741e-00f2-44c0-a94b-38abd51af01f?wt.mc_id=fsn_excel_quick_start&ui=en-us&rs=en-us&ad=us",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Microsoft Excel",
        "keywords": ['spreadsheet', 'google sheet']
    },
    {
        "name": "How to Analyze and Format Data in Excel",
        "url": "https://support.office.com/en-us/article/analyze-and-format-in-excel-11a632c1-197e-454f-a515-374a4aa2b3dd?wt.mc_id=fsn_excel_quick_start",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Microsoft Excel",
        "keywords": ['spreadsheet', 'google sheet']
    },
    {
        "name": "How to Create an Excel Spreadsheet",
        "url": "https://support.office.com/en-us/article/create-a-workbook-in-excel-94b00f50-5896-479c-b0c5-ff74603b35a3?wt.mc_id=fsn_excel_quick_start",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Microsoft Excel",
        "keywords": ['spreadsheet', 'google sheet']
    },
    {
        "name": "How to Use the CSCF Cloud Phone System",
        "url": "https://careersourcecf.sharepoint.com/sites/TheSource/SitePages/GoToConnect-Phone.aspx",
        "type": "quickGuide",
        "origin": "Training & Learning Center",
        "application": "Cloud Phone",
        "keywords": ['gotoconnect', 'jive', 'connect phone', 'phone app', 'cloud phone app']
    },
    {
        "name": "How to Present Slideshows with Microsoft PowerPoint",
        "url": "https://support.microsoft.com/en-us/office/start-the-presentation-and-see-your-notes-in-presenter-view-4de90e28-487e-435c-9401-eb49a3801257?wt.mc_id=otc_powerpoint&ui=en-us&rs=en-us&ad=us",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Microsoft PowerPoint",
        "keywords": ['presentation', 'wordart', 'slide', 'slideshow', 'template', 'slidedeck']
    },
    {
        "name": "Edit text and data in Microsoft PowerPoint",
        "url": "https://support.microsoft.com/en-us/office/insert-wordart-c5070583-1ebe-4dc4-a41f-5e3729adce54?wt.mc_id=otc_powerpoint&ui=en-us&rs=en-us&ad=us",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Microsoft PowerPoint",
        "keywords": ['presentation', 'wordart', 'slide', 'slideshow', 'template', 'slidedeck']
    },
    {
        "name": "Working with Slides in Microsoft PowerPoint",
        "url": "https://support.microsoft.com/en-us/office/what-is-a-slide-master-b9abb2a0-7aef-4257-a14e-4329c904da54",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Microsoft PowerPoint",
        "keywords": ['presentation', 'slide', 'slideshow', 'template', 'slidedeck']
    },
    {
        "name": "How to use Microsoft PowerPoint",
        "url": "https://support.office.com/en-us/article/video-what-is-powerpoint-5f9cc860-d199-4d85-ad1b-4b74018acf5b?wt.mc_id=otc_powerpoint",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Microsoft PowerPoint",
        "keywords": ['presentation', 'slide', 'slideshow', 'template', 'slidedeck']
    },
    {
        "name": "Microsoft Edge Quick Tips Guide",
        "url": "https://microsoftedgetips.microsoft.com/en-us/?source=support&form=MA13DX",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Microsoft Edge",
        "keywords": ['internet', 'browser', 'explorer', 'help']
    },
    {
        "name": "How to Search Inside a Webpage with Firefox Web Browser",
        "url": "https://support.mozilla.org/en-US/kb/search-contents-current-page-text-or-links",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Firefox",
        "keywords": ['internet', 'browser', 'fire fox', 'help']
    },
    {
        "name": "Manage Downloads with Firefox Web Browser",
        "url": "https://support.mozilla.org/en-US/kb/where-find-and-manage-downloaded-files-firefox",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Firefox",
        "keywords": ['internet', 'browser', 'fire fox', 'help']
    },
    {
        "name": "Keyboard Shortcuts for Firefox Web Browser",
        "url": "https://support.mozilla.org/en-US/kb/keyboard-shortcuts-perform-firefox-tasks-quickly",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Firefox",
        "keywords": ['internet', 'browser', 'fire fox', 'help']
    },
    {
        "name": "How to Search the Web with Firefox Web Browser",
        "url": "https://support.mozilla.org/en-US/kb/search-web-firefox",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Firefox",
        "keywords": ['internet', 'browser', 'fire fox', 'help']
    },
    {
        "name": "Getting Started with Firefox Web Browser",
        "url": "https://support.mozilla.org/en-US/kb/get-started-firefox-overview-main-features",
        "type": "vendorDoc",
        "origin": "Vendor Documentation",
        "application": "Firefox",
        "keywords": ['internet', 'browser', 'fire fox']
    },
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
        "keywords": ['share screen', 'present', 'show screen']
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
        "application": "Cloud Phone",
        "keywords": ['cloud phone', 'desk phone']
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