export const orderCodeGenerator = function () {

    //si esto genera un collision es que los dioses del olimpo nos han abandonado

    return (Math.floor(Math.random() * Date.now())).toString(36)

}