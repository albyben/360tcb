fis.match("*.{png,js,css}",{release:"/static/$0"}),fis.match("*.js",{useHash:!0}),fis.match("*.css",{useHash:!0}),fis.match("*.png",{useHash:!0}),fis.match("*.js",{optimizer:fis.plugin("uglify-js")}),fis.match("*.css",{optimizer:fis.plugin("clean-css")}),fis.match("*.png",{optimizer:fis.plugin("png-compressor")});