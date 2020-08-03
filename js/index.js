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
    

    console.log(pizzaDelivery);
    console.log(pizzaToppings);
    console.log(pizzaQuantity);
    console.log(pizzaSize);
    console.log(pizzaCrust);
    console.log(pizzaLocation);
  })
})