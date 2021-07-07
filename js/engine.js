const ENGINE = {
    meta: {
        activeInstance: null,
    },
    element: {
        body: document.querySelector('body'),
        header: {
            logo: document.querySelector('.header-instance-logo'),
            searchInput: document.querySelector('.search input')
        },
        hero: {
            title: document.querySelector('#heroExternalLinkTitle'),
            linkHref: document.querySelector('#heroExternalLinkValue'),
            submitTicketBtn: document.querySelector('#heroSubmitTicketLink')
        },
        modal: {
            submitTicketBtn: document.querySelector("#modalCtaSubmitTicket")
        }
    },
    exec: {
        onLoad: () => {
            console.log('/js/engine.js connected.');
            // set active instance
            ENGINE.exec.getActiveInstance();
            // redirect to itdesk if invalid instance option
            if(ENGINE.meta.activeInstance === null || !ENGINE.INSTANCE.hasOwnProperty(ENGINE.meta.activeInstance)){
                window.location.href = `https://${window.location.hostname}?engine=itdesk`;
                return
            }
            // code below runs only if valid query string
            ENGINE.DOM.setActiveInstanceImages();

            // run the instance specific code
            ENGINE.INSTANCE[ENGINE.meta.activeInstance].onLoad();
        },
        getActiveInstance: () => {
            // get the instance from the query params
            const url = new URL(window.location.href);
            const activeInstance = url.searchParams.get("engine");

            // set the active instance in the object
            ENGINE.meta.activeInstance = activeInstance;

            // return the value
            console.log(`activeInstance set to ${activeInstance}`);
            return activeInstance
        }
    },
    DOM : {
        setActiveInstanceImages: () => {
            // set btn url
            ENGINE.element.hero.submitTicketBtn.setAttribute('href', `https://helpdesk.cscfl.com/app/${ENGINE.meta.activeInstance}/ui/requests/add`);
            ENGINE.element.modal.submitTicketBtn.setAttribute('href', `https://helpdesk.cscfl.com/app/${ENGINE.meta.activeInstance}/ui/requests/add`);
            // set logo
            ENGINE.element.header.logo.src = `./image/activeInstance/logo/${ENGINE.meta.activeInstance}_logo.png`;
            
            // set background
            ENGINE.element.body.style.background = `url("./image/activeInstance/background/${ENGINE.meta.activeInstance}_background.jpg") no-repeat center center fixed`
        }
    },
    INSTANCE: {
        hrhelpdesk: {
            onLoad: () => {
                // change the label
                console.log('...loading hrdesk instance...');

                // change the page title
                document.title = "CSCF HR Helpdesk";

                // set HR Guides and Apps
                ENGINE.DATA.quickGuides = hrGuidesData;
                ENGINE.DATA.apps = hrApplications;
                
                ENGINE.element.header.searchInput.setAttribute('placeholder', 'Search Human Resources guides, websites, and apps...');

                //update the hero external link
                ENGINE.element.hero.title.innerHTML ="Professional Development";
                ENGINE.element.hero.linkHref.innerHTML ="Go to LevelUP";
                ENGINE.element.hero.linkHref.setAttribute('href', 'https://careersourcecf.litmos.com/');

                //update the submit ticket btn
                ENGINE.element.hero.submitTicketBtn.innerHTML ="Create HR Ticket";
            }
        },
        itdesk: {
            onLoad: () => {
                console.log('...loading itdesk instance...');
                // set IT Guides and Apps
                ENGINE.DATA.quickGuides = guidesData;
                ENGINE.DATA.apps = applications;
            }
        }
    },
    DATA: {
        quickGuides: null,
        apps: null
    }
}

ENGINE.exec.onLoad();