const publicPath = process.env.NODE_ENV === 'production' ? '/gunmind/' : '/'

const { defineConfig } = require('@vue/cli-service')

//
// const moduleExclude = match => {
//   const m = id => id.indexOf(match) > -1
//   return {
//     name: `exclude-${match}`,
//     resolveId(id) {
//       if (m(id)) return id
//     },
//     load(id) {
//       if (m(id)) return `export default {}`
//     },
//   }
// }


module.exports = defineConfig({
  transpileDependencies: true,

  // optimizeDeps: {
  //   include: [
  //     'gun',
  //     'gun/gun',
  //     'gun/sea',
  //     'gun/sea.js',
  //     'gun/lib/then',
  //     'gun/lib/webrtc',
  //     'gun/lib/radix',
  //     'gun/lib/radisk',
  //     'gun/lib/store',
  //     'gun/lib/rindexed',
  //   ],
  // },
  // plugins: [
  //   moduleExclude('text-encoding'),
  // ],
  publicPath: publicPath,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})




// export default {
//   optimizeDeps: {
//     include: [
//       'gun',
//       'gun/gun',
//       'gun/sea',
//       'gun/sea.js',
//       'gun/lib/then',
//       'gun/lib/webrtc',
//       'gun/lib/radix',
//       'gun/lib/radisk',
//       'gun/lib/store',
//       'gun/lib/rindexed',
//     ],
//   },
//   plugins: [
//     moduleExclude('text-encoding'),
//   ],
// }
