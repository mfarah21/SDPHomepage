// Code by Anthony G.
// created 2021-06-17
const APP = {
    meta: {
        quickGuides: guidesData,
        apps: applications
    },
    element: {
        search: {
            dropdown: {
                container: document.querySelector('.search-dropdown'),
                list: document.querySelector('.search-dropdown ul.itemList'),
                appList: document.querySelector('.search-dropdown ul.appList')
            },
            input: document.querySelector('.search input')
        }
    },
    exec: {
        onLoad: () => {
            console.log('/js/script.js connected.');
            // add apps to guides
            for(let guide of APP.meta.quickGuides){
                guide.appData = APP.meta.apps[guide.application];
            }
            // listeners
            APP.LISTENER.searchInputType();
            APP.LISTENER.searchInputFocus();
            APP.DOM.buildDropdown(APP.meta.quickGuides);
            APP.DOM.buildAppSearchDropdown(APP.exec.searchApps('&&ALL'));

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
                    results.push(guide);
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
            query = query.trim();

            let results = [];
            if(!query){return results};
            for(let app in APP.meta.apps){
                if(query === "&&ALL"){
                    results.push(APP.meta.apps[app]);
                    continue
                }
                let title = app.toLowerCase();
                if(title.includes(query.toLowerCase())){
                    results.push(APP.meta.apps[app]);
                }
                
            }
            return results
        }
    },
    DOM: {
        hide: el => {
            el.classList.add('hide');
        },
        unHide: el => {
            el.classList.remove('hide');
        },
        buildDropdown: itemArr => {
            let html = `<span class="list-title">Training & Guides</span>`;
            for(let item of itemArr){
                html+= APP.DOM.createDropdownItemHTML(item);
            }
            if(itemArr.length === 0){
                html = ``;
            }
            APP.element.search.dropdown.list.innerHTML = html;
        },
        buildAppSearchDropdown: itemArr => {
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
            const types = {
                quickGuide: `./image/paper.svg`,
                vendorDoc: `./image/paper.svg`,
                video: `./image/video.png`
            }
            return `
            <li>
                <a target="_blank" href="${item.url}">
                    <div class="icon-container" data-type="${item.type}">
                        <img class="icon" src="${types[item.type]}">
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
                <a target="_blank" href="${item.url}">
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