module.exports = {
    css: {
      loaderOptions: {
        scss: {
          prependData: `@import "@/src/sass/general/fonts.sass";`
        }
      }
    }
  };