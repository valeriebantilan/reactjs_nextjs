const path = require('path')

const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');  
const withLess = require('@zeit/next-less');
const withImages = require('next-images');

module.exports = withPlugins(
    [
        [
            withCss,
            {
                cssLoaderOptions: {
                    url: false
                }
            },
        ],
        withSass,
        [
            withLess,
            {
                lessLoaderOptions: {
                    javascriptEnabled: true,
                },
            }
        ],
        withImages,
    ],
    // {
    // sassOptions: {
    //     includePaths: [path.join(__dirname, 'styles')],
    //   },        
    // }
)
  

// module.exports = {
//     sassOptions: {
//         includePaths: [path.join(__dirname, 'styles')],
//     },
// }