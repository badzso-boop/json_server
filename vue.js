async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


new Vue({
    el: '#app',
    data () {
      return {
        posts: null,
        title: 'Proba hatha mukodik',
      }
    },
    methods: {
      lekeres_fetch: function() {
        fetch('https://my-json-server.typicode.com/badzso-boop/json_server/posts')
        .then(response => response.json())
        .then(data => console.log(data));
      },
      lekeres_axios: function() {
        axios
        .get('https://my-json-server.typicode.com/badzso-boop/json_server/posts')
        .then(response => /*this.posts = response.data*/ console.log(response))
      },
      push_fetch: async function() {
        postData('https://my-json-server.typicode.com/badzso-boop/json_server/posts', { id: 2, title: 'szia', author: 'norbi' })
        .then(data => {
          console.log(data); // JSON data parsed by `data.json()` call
        });
        console.log('elmeletben megtortent!')
      },
      push_axios: function() {
        axios.post('https://my-json-server.typicode.com/badzso-boop/json_server/posts', {
          method: 'POST',
          body: JSON.stringify({
            id: '2',
            title: 'proba kuldes',
            author: 'norbert',
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        console.log('elmeletben megtortent!')
      },
    }
})