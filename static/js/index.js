import Translator from './translator.js'

var translator = new Translator({
  persist: false,
  languages: ['pt', 'en'],
  defaultLanguage: 'en',
  detectLanguage: true,
  filesLocation: 'static/i18n',
})

translator.load()

document.querySelector('#lang').addEventListener('click', function (evt) {
  if (evt.target.tagName === 'INPUT') {
    translator.load(evt.target.value)
  }
})
