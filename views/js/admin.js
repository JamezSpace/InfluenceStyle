const tabs = document.querySelectorAll("a.tab")
const pages = document.querySelectorAll(".page")

function tab_clicked(obj){
    const page_to_open = obj.dataset.opensPage

    renderPage(page_to_open)

    for (let i = 0; i < tabs.length; i++) {
        const tab = tabs[i];
   
        if(tab !== obj) tab.classList.remove('tab-active')
    }

    obj.classList.add('tab-active')
    fetchData(obj)
}

function renderPage(page_to_open) {
    for (let i = 0; i < pages.length; i++) {
        const page = pages[i];

        if(page.classList.contains('page-active') && page.dataset.page !== page_to_open) page.classList.remove('page-active')

        else if (page.dataset.page === page_to_open) page.classList.add('page-active')        
    }
}

function fetchData(obj) {
    if(obj.dataset.opensPage === 'blogs') {
        api_call('/blogs')
    }
}

async function api_call(route='', method='GET') {
    try {
        const response = await fetch(route, {method : method})

        console.log(response);
        
        const data = await response.json()

        console.log(data)
    } catch (err) {
        console.error(err);    
    }
}
