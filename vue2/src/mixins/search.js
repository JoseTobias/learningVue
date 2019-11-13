export default {
    computed: {
        filteredInfo: function() {
            return this.infos.filter((data) => {
              return data.title.match(this.search)
            })
        }
    }
}