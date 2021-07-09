// Code by Anthony G.
// created 2021-06-17
const APP = {
    meta: {
        quickGuides: ENGINE.DATA.quickGuides, // This data pulls from data.js - guides
        apps: ENGINE.DATA.apps,       // and apps.js - applications/services
        appsArr: [],
        types: {
                quickGuide: `./image/paper.svg`,
                vendorDoc: `./image/paper.svg`,
                vendorLink: `./image/vendorLink.svg`,
                video: `./image/video.png`
        }
    },
    element: {
        search: {
            dropdown: {
                container: document.querySelector('.search-dropdown'),
                list: document.querySelector('.search-dropdown ul.itemList'),
                appList: document.querySelector('.search-dropdown ul.appList')
            },
            input: document.querySelector('.search input')
        },
        appWidget: {
            container: document.querySelector('.widget-apps'),
            appList: document.querySelector('.widget-apps .hero-app-list'),
            helpTopic: document.querySelector('#helpTopic')
        },
        modal: {
            fullScreenAppModal: {
                container: document.querySelector('#fullScreenAppModal'),
                guidesList: document.querySelector('#fullScreenAppModal .modalGuidesList'),
                title: document.querySelector('#fullScreenAppModal .modal-app-title'),
                ctaName: document.querySelector('#fullScreenAppModal #modalAppCtaName'),
                category: document.querySelector('#fullScreenAppModal .modal-app-category'),
                logo: document.querySelector('#fullScreenAppModal .modal-app-logo'),
                description: document.querySelector('#fullScreenAppModal .modal-app-description'),
                screenshots: document.querySelector('#fullScreenAppModal .modal-app-screenshots'),
                photoView: {
                    container: document.querySelector('.modal-photo-view'),
                    image: document.querySelector('.modal-photo-view img')
                }
            }
        }
    },
    exec: {
        onLoad: () => {
            console.log('/js/script.js connected.');
            // add apps to guides
            for(let guide of APP.meta.quickGuides){
                guide.appData = APP.meta.apps[guide.application];
                // add the guides to the App object
                try {
                    APP.meta.apps[guide.application].assets.push(guide);
                } catch(err){
                    console.log(err);
                    console.log(guide);
                    console.log(guide.application);
                }
            }
            // create an array of apps
            for(let app in APP.meta.apps){
                APP.meta.appsArr.push(APP.meta.apps[app]);
            }
            // shuffle the guides 
            APP.exec.shuffleArr(APP.meta.quickGuides);
            // build applist
            APP.DOM.buildWidgetAppsList(APP.meta.appsArr);
            // listeners
            APP.LISTENER.searchInputType();
            APP.LISTENER.searchInputFocus();
            APP.DOM.buildDropdown(APP.meta.quickGuides);
            APP.DOM.buildAppSearchDropdown(APP.exec.searchApps('&&ALL'));

        },
        shuffleArr: arr => {
            let currentIndex = arr.length,  randomIndex;
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                // And swap it with the current element.
                [arr[currentIndex], arr[randomIndex]] = [
                arr[randomIndex], arr[currentIndex]];
            }
            return arr;
        },
        searchGuides: query => {
            query = query.trim().toLowerCase();

            let results = []
            if(!query){ return results };
            for(let guide of APP.meta.quickGuides){
                if(query.toUpperCase() === "&&ALL"){
                    results.push(guide);
                    continue
                };
                if(guide.name.toLowerCase().includes(query)){
                    if(guide.origin === "Training & Learning Center"){
                        results.unshift(guide);
                    } else {
                        results.push(guide);
                    }
                    continue
                };
                let keyWordFound = false;
                for(let keyword of guide.keywords){
                    if(keyWordFound){ continue }
                    if(keyword.includes(query) || keyword.startsWith(query)){
                        results.push(guide);
                        keyWordFound = true;
                        continue
                    };
                }
            }
            return results;
        },
        searchApps: query => {
            query = query.trim().toLowerCase();

            let results = [];
            if(!query){return results};
            for(let app in APP.meta.apps){
                if(query.toUpperCase() === "&&ALL"){
                    results.push(APP.meta.apps[app]);
                    continue
                }
                let title = app.toLowerCase();
                if(title.includes(query.toLowerCase())){
                    results.push(APP.meta.apps[app]);
                    continue
                }
                let keyWordFound = false;
                for(let keyword of APP.meta.apps[app].keywords){
                    if(keyWordFound){ continue }
                    if(keyword.includes(query) || keyword.startsWith(query)){
                        results.push(APP.meta.apps[app]);
                        keyWordFound = true;
                        continue
                    };
                }
            }
            return results
        },
        noSearchResultsFound: () => {
            console.log(`nothing found for ${APP.element.search.input.value}`)
            APP.DOM.createSearchGoogleHTML(APP.element.search.input.value);
        },
        launchAppModal: appName => {
            // get the app
            const app = APP.meta.apps[appName];

            // build html
            APP.DOM.buildAppModal(app);

            // reveal the modal
            APP.DOM.openModal('fullScreenAppModal');
            APP.exec.resetScrollTop();
        },
        openPhotoView: image => {
            APP.element.modal.fullScreenAppModal.photoView.image.src = image;
            APP.DOM.unHide(APP.element.modal.fullScreenAppModal.photoView.container);
        },
        resetScrollTop: () => {
            document.querySelector('.modalGuidesList').scrollTop = 0;
            document.querySelector('.modal-app-description').scrollTop = 0;
        }
    },
    DOM: {
        hide: el => {
            el.classList.add('hide');
        },
        unHide: el => {
            el.classList.remove('hide');
        },
        openModal: modal => {
            try {
                APP.DOM.unHide(APP.element.modal[modal].container);
            } catch(err){
                return
            }
            // run the app modal code
            if(modal === "fullScreenAppModal"){
                
            }
        },
        dismissModal: modal => {
            try {
                APP.DOM.hide(APP.element.modal[modal].container);
            } catch(err){
                return
            }
            // run the app modal code
            if(modal === "fullScreenAppModal"){
                
            }
        },
        buildAppModal: app => {
            // set the content
            APP.element.modal.fullScreenAppModal.title.innerHTML = app.name;
            APP.element.modal.fullScreenAppModal.ctaName.innerHTML = app.name.replace('Microsoft ', '');
            APP.element.modal.fullScreenAppModal.category.innerHTML = app.category;
            // description
            APP.element.modal.fullScreenAppModal.description.innerHTML = app.description;
            

            APP.element.modal.fullScreenAppModal.logo.src = app.logo;

            // build the screenshots list
            let imagesHTML = ``;
            let counter = 450;
            for(let screen of app.screenshots){
                counter += 300;
                imagesHTML += `
                    <img onclick="APP.exec.openPhotoView('${screen}')" class="modal-app-screenshots-screenshot animate__animated animate__fadeIn" style="animation-delay: ${counter}ms" src="${screen}">
                `
            }
            APP.element.modal.fullScreenAppModal.screenshots.innerHTML = imagesHTML;

            // build the assets list
            let assetsHTML = ``;
            let counter2 = 450;
            for(let asset of app.assets){
                counter2 += 150;
                assetsHTML += `
                <li class="animate__animated animate__fadeIn" style="animation-delay: ${counter2}ms">
                    <a target="_blank" href="${asset.url}">
                    <div class="icon-container" data-type="${asset.type}">
                        <img class="icon" src="${APP.meta.types[asset.type]}">
                    </div>
                    <span class="modal-asset-title">${asset.name}</span>
                    </a>
                </li>
                `
            }
            APP.element.modal.fullScreenAppModal.guidesList.innerHTML = assetsHTML;
        },
        buildWidgetAppsList: appsArr => {
            // This function builds a gallery of apps widget
            let html = `<ul class="appList">`;
            let counter = 850;
            for (let app of appsArr){
                counter += 100;
                let displayName = app.name.replace('Microsoft ', '');
                if(app.name === "Microsoft 365"){
                    displayName = "Microsoft 365";
                }
                html += `
                <li class="animate__animated animate__fadeIn" onclick="APP.exec.launchAppModal('${app.name}')" style="animation-delay: ${counter}ms">
                <a class="widget-apps-app" target="_blank" title="Learn about ${app.name}" data-app-name="${app.name}" data-href="${app.url}">
                    <div class="shineOverlay"></div>
                    <div class="icon-container" data-type="app" style="position:relative">
                        <img class="icon icon-blur" src="${app.icon}">
                        <img class="icon" src="${app.icon}">
                    </div>
                    <div class="link-label">
                        <span class="link-title">${displayName}</span>
                        <!-- 
                        <div class="link-meta">
                        <span class="link-origin" data-origin="application">App</span> 
                        -->
                        </div>
                    </div>
                </a>
            </li>`
            }
            html += `</ul>`;

            // inject the HTML into the DOM
            APP.element.appWidget.appList.innerHTML = html;
            // assign the listeners to the apps
            for(let app of document.querySelectorAll('.widget-apps-app')){
                app.addEventListener('mouseover', function(){
                    console.log(this.dataset.appName + ' in');
                    APP.element.appWidget.helpTopic.innerHTML = ' with: ' + `<span class="app-name-highlight animate__animated animate__fadeIn">${this.dataset.appName}</span>`;
                });
                app.addEventListener('mouseout', function(){
                    console.log(this.dataset.appName + ' out');
                    APP.element.appWidget.helpTopic.innerHTML = ' with: ';
                });
            }
        },
        buildDropdown: itemArr => {
            // this function builds the dropdown of guides in search
            let html = `<span class="list-title">Training & Guides</span>`;
            for(let item of itemArr){
                html+= APP.DOM.createDropdownItemHTML(item);
            }
            APP.element.search.dropdown.list.innerHTML = html;
            if(itemArr.length === 0){
                html = ``;
                APP.element.search.dropdown.list.innerHTML = html;
                APP.exec.noSearchResultsFound();
            }
        },
        buildAppSearchDropdown: itemArr => {
            // this builds the dropdown of apps in search
            let html = `<span class="list-title">Applications & Services</span>`;
            for(let item of itemArr){
                html+= APP.DOM.createDropdownAppHTML(item);
            }
            if(itemArr.length === 0){
                html = ``;
            }
            APP.element.search.dropdown.appList.innerHTML = html;
        },
        createDropdownItemHTML: item => {
            return `
            <li>
                <a target="_blank" href="${item.url}">
                    <div class="icon-container" data-type="${item.type}">
                        <img class="icon" src="${APP.meta.types[item.type]}">
                    </div>
                    <div class="link-label">
                        <span class="link-title">${item.name}</span>
                        <div class="link-meta">
                        <span class="link-origin" data-origin="${item.origin}">${item.origin}</span>
                        <span class="link-application" data-app="${item.application}">${item.application}</span>
                        </div>
                    </div>
                </a>
            </li>
            `
        },
        createDropdownAppHTML: item => {
            const types = {
                quickGuide: `./image/paper.svg`
            }
            return `
            <li>
                <a target="_blank" onclick="APP.exec.launchAppModal('${item.name}')" >
                    <div class="icon-container" data-type="app">
                        <img class="icon" src="${item.icon}">
                    </div>
                    <div class="link-label">
                        <span class="link-title">${item.name}</span>
                        <div class="link-meta">
                        <span class="link-origin" data-origin="application">App</span>
                        </div>
                    </div>
                </a>
            </li>
            `
        },
        createSearchGoogleHTML: query => {
            let encodedQuery = query.trim().toLowerCase().split(' ').join('+');
            let googleURL = `https://www.google.com/search?q=${encodedQuery}&safe=active`;
            html =`
            <li>
                <a target="_blank" href="${googleURL}">
                    <div class="icon-container" data-type="searchWeb">
                        <img class="icon" src="./image/applications/searchWeb.svg">
                    </div>
                    <div class="link-label">
                        <span class="link-title">Discover solutions for <span class="link-search-query">${query}</span></span>
                        <div class="link-meta">
                        <span class="link-origin" data-origin="internet_search">Search the Web</span>
                        <span class="link-application" data-app="Google">Google</span>
                        </div>
                    </div>
                </a>
            </li>
            `
            let temp = APP.element.search.dropdown.list.innerHTML;
            APP.element.search.dropdown.list.innerHTML = temp + html;
        }
    },
    LISTENER: {
        searchInputType: () => {
            APP.element.search.input.addEventListener('input', function(){
                // scroll dropdown to top
                APP.element.search.dropdown.container.scrollTop = 0;

                APP.DOM.buildDropdown(APP.exec.searchGuides(this.value));
                APP.DOM.buildAppSearchDropdown(APP.exec.searchApps(this.value));
                if(this.value){
                    // show the drop down
                    APP.DOM.unHide(APP.element.search.dropdown.container)
                } else {
                    // hide the drop down
                    APP.DOM.hide(APP.element.search.dropdown.container)
                }
            });
        },
        searchInputFocus: () => {
            APP.element.search.input.addEventListener('focus', function(){
                console.log('search focused')
            });
            APP.element.search.input.addEventListener('blur', function(){
                console.log('search blurred')
            });
        }
    }
}

APP.exec.onLoad();