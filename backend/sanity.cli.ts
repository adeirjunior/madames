import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '7g410ehe',
    dataset: process.env.NODE_ENV === 'development' ? 'development' : 'production'
  }
})
