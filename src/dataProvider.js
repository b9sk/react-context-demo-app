export const getDemoData = async () => await fetch(
    'https://reqres.in/api/unknown?per_page=12'
    ).then(
        r => r.json().then( data => data ).catch(console.error)
    ).catch(console.error)
