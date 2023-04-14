function extension(url){
    let val=url.split('.');
    console.log(`the extension of the file is: ${val[1]}`);
}
extension('file.txt');