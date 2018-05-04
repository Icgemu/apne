import L from 'leaflet'
export default L.Control.extend({
  options: {
    position: 'topleft'
  },
  initialize: function (options) {
    L.Util.extend(this.options, options)
  },
  onAdd: function (map) {
    debugger
    let component = this.options['component'].$mount()
    return component.$el
  }
})
