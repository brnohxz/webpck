import * as $ from 'jquery'
function createAnalytics():object{
    let counter = 0
    let destroyed:boolean = false
    const listener = () => counter++
    $(document).on('click',listener)
    console.log('Analytics fired')
    return {
        destroy(){
            $(document).off('click', listener)
            destroyed = true
        },
        getClicks(){
            if (destroyed){
                return `Analytics is destroyed. Total click = ${counter}`
            }
            return counter
        }
    }
}

window['analytics'] = createAnalytics();