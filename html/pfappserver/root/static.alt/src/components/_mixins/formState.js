export default {
  name: 'mixin-form-state',
  props: {
    state: {
      type: Boolean,
      default: null
    },
    stateMap: {
      type: Object,
      default: () => { return { false: false, true: null } }
    },
    invalidFeedback: {
      type: String
    },
    validFeedback: {
      type: String
    }
  },
  computed: {
    localState () {
      return this.stateMap[this.state]
    },
    localStateIfInvalidFeedback () {
      if (this.invalidFeedback) {
        return this.localState
      }
      return null
    },
    localAnyState () {
      return this.stateMap[this.state]
    },
    localInvalidFeedback () {
      return this.invalidFeedback
    }
  }
}