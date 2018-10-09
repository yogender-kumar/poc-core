var path = require( 'path' );
var webpack = require( 'webpack' );
//var commonChunks = new webpack.optimize.CommonsChunkPlugin( {name: 'common', libraryTarget: 'commonjs2'} );
var rootPath = path.resolve( __dirname, './' );
var dest = path.resolve( rootPath, '../poc-components/build/components/' );
var jsDest = path.resolve(dest, 'script');
//var globEntries = require( './globEntries' );
//var entryFiles = globEntries('src/products/*/components/*/*.js');

//console.log('Entry Files:');
//console.log(entryFiles);
//console.log('Entry Files End')


module.exports = {
    context: path.resolve( rootPath ),
    plugins: [
        //commonChunks
    ],
    resolve: {
        modules: [
            path.resolve( rootPath, 'src' ),
            path.resolve( rootPath, 'node_modules' )
        ],
        alias: {}
    },
    devtool: 'source-map',
    entry: path.resolve( rootPath, 'src/index.js' ),
    output: {
        path: path.normalize(jsDest),
        filename: 'shared/shared.js',
        publicPath: path.join( '../', '/' ),
		library: 'shared',
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
};