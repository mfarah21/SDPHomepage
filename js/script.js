// Code by Anthony G.
// created 2021-06-17
const APP = {
    meta: {
        quickGuides: guidesData
    },
    element: {
        search: {
            dropdown: {
                container: document.querySelector('.search-dropdown'),
                list: document.querySelector('.search-dropdown ul'),
            },
            input: document.querySelector('.search input')
        }
    },
    exec: {
        onLoad: () => {
            console.log('/js/script.js connected.');
            // listeners
            APP.LISTENER.searchInputType();
            APP.LISTENER.searchInputFocus();
            APP.DOM.buildDropdown(APP.meta.quickGuides);
        },
        searchGuides: query => {
            let results = []
            if(!query){ return results };
            for(let guide of APP.meta.quickGuides){
                if(guide.name.toLowerCase().includes(query.toLowerCase())){
                    results.push(guide);
                }
            }
            return results;
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
            let html = ``;
            for(let item of itemArr){
                html+= APP.DOM.createDropdownItemHMTL(item);
            }
            APP.element.search.dropdown.list.innerHTML = html;
        },
        createDropdownItemHMTL: item => {
            const types = {
                quickGuide: `./image/paper.svg`
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
        }
    },
    LISTENER: {
        searchInputType: () => {
            APP.element.search.input.addEventListener('input', function(){
                APP.DOM.buildDropdown(APP.exec.searchGuides(this.value));
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