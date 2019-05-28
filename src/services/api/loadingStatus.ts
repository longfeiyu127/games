import LoadingPlugin from '@/components/Loading/plugin.tsx'
const loadingStatus = {
  _count: 0,
  isShow: false
}

Object.defineProperty(loadingStatus, 'count', {
  set(val) {
    this._count = val
    if (val) {
      this.isShow = true
      LoadingPlugin.show()
    } else {
      this.isShow = false
      LoadingPlugin.hide()
    }
  },
  get() {
    console.log(this)
    return this._count
  }
})

export default loadingStatus
