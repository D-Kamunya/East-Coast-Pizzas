const Pizza=function(size,crust,toppings,delivery){
  'use strict'; 
  this.pizzaSize=size
  this.pizzaCrust=crust
  this.pizzaToppings=toppings
  this.pizzaDelivery=delivery
}

$(document).ready(()=>{
  $('#to-be-delivered').click(()=>{
    $('#location-hide').show()
  })
  $('#to-be-picked').click(()=>{
    $('#location-hide').hide()
  })

  $('#pizza-form').submit((event)=>{
    event.preventDefault()
    
    let pizzaQuantity=Number($('#pizza-quantity').val())
    let pizzaSize=$('#pizza-size').val()
    let pizzaCrust=$('#pizza-crust').val()
    let pizzaToppings=$('#pizza-toppings').val() || []
    let delOpt=$('#to-be-delivered').is(":checked");
    let pckOpt=$('#to-be-picked').is(":checked");

    let pizzaDeliveryFn=()=>{
      if(delOpt === true){
        return true
      }
      else{
        return false
      }
    }

    let pizzaDelivery=pizzaDeliveryFn()

    let pizzaLocation
    if(pizzaDelivery===true){
        pizzaLocation=$('#delivery-location').val()
        alert(`Your order will be delivered to your location ${pizzaLocation}`)
    }
   
  })
})