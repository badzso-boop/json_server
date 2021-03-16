new Vue({
    el: '#app',
    data () {
      return {
        posts: null,
        title: 'Proba hatha mukodik',
      }
    },/*
    mounted () {
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response))
    },*/
    methods: {
      proba: function() {
        axios
        .get('https://reqres.in/api/users')
        .then(response => /*this.posts = response.data*/ console.log(response))
      },
      proba2: function() {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            eamil: 'ujj.norbert@gmail.com',
            first_name: 'ujj',
            last_name: 'norbert',
            id: 7,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        console.log('elmeletben megtortent!')
      }
    }
})