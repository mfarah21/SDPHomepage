const ENGINE = {
    meta: {
        activeInstance: null,
        isEmbedMode: null,
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
            // redirect to itdesk if invalid or no instance option
            if(ENGINE.meta.activeInstance === null || !ENGINE.INSTANCE.hasOwnProperty(ENGINE.meta.activeInstance)){
                window.location.href = `https://${window.location.hostname}${window.location.pathname}?engine=itdesk`;
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
            const isEmbedMode = url.searchParams.get("embed");
            if(isEmbedMode === "true"){
                ENGINE.meta.isEmbedMode = true;
                document.body.dataset.isEmbedMode = true;
            }
            // set the active instance in the object
            ENGINE.meta.activeInstance = activeInstance;

            // set the active instance in the body dataset
            document.body.dataset.engine = activeInstance;

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

                //if embeded, run custom code
                if(ENGINE.meta.isEmbedMode){
                    console.log('Running embeded operations..');
                    hiddenElements = [
                        document.querySelector('#heroTilesResourcesTickets'), // hero tiles
                        document.querySelector('header') // header
                    ]
                    // hide the hero tiles
                    hiddenElements.map(el => el.classList.add('hide'));

                    // removeBackground
                    document.querySelector('body').style.background ="white";

                    // style the search container
                    document.querySelector('.search-container').setAttribute('style', `
                        padding: 0% 10%;
                        max-width: 100%;
                        margin: 0 auto;
                        box-sizing: border-box;
                        margin-bottom: 10px;
                    `);
                }
            }
        }
    },
    DATA: {
        quickGuides: null,
        apps: null
    }
}

ENGINE.exec.onLoad();