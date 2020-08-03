const Pizza=function(size,crust,toppings,delivery){
  'use strict'; 
  this.pizzaSize=size
  this.pizzaCrust=crust
  this.pizzaToppings=toppings
  this.pizzaDelivery=delivery
}

Pizza.prototype.pricePerSize=function(){
  switch(this.pizzaSize){
    case 'Small':
    return 200
    break
    case 'Medium':
    return 400
    break
    case 'Large':
    return 600
    break
  }
}

Pizza.prototype.pizzaCrustPrice=function(){
  switch(this.pizzaCrust){
    case 'Crispy':
    return 70
    break
    case 'Stuffed':
    return 100
    break
    case 'Glutten Free':
    return 120
    break
    case 'Sicilian Style':
    return 120
    break
    case 'Flatbread Crust':
    return 150
    break
    case 'Deep Dish Pizza':
    return 170
    break
  }
}

Pizza.prototype.toppingsPrice=function(){
  let toppingsPrize=0
  if(this.pizzaSize==='Small'){
    this.pizzaToppings.map(topping=>{
      switch(topping){
        case 'Mushrooms':
          toppingsPrize+=80
          break
        case 'Onions':
          toppingsPrize+=40
          break
        case 'Sausage':
          toppingsPrize+=80
          break
        case 'Bacon':
          toppingsPrize+=150
          break
        case 'Extra cheese':
          toppingsPrize+=130
          break
        case 'Black olives':
          toppingsPrize+=120
          break
        case 'Green peppers':
          toppingsPrize+=100
          break
        case 'Pineapple':
          toppingsPrize+=70
          break    
       case 'Spinach':
          toppingsPrize+=50
          break                  
      }
    })
  }else if(this.pizzaSize==='Medium'){
    this.pizzaToppings.map(topping=>{
      switch(topping){
        case 'Mushrooms':
          toppingsPrize+=100
          break
        case 'Onions':
          toppingsPrize+=50
          break
        case 'Sausage':
          toppingsPrize+=100
          break
        case 'Bacon':
          toppingsPrize+=170
          break
        case 'Extra cheese':
          toppingsPrize+=150
          break
        case 'Black olives':
          toppingsPrize+=160
          break
        case 'Green peppers':
          toppingsPrize+=120
          break
        case 'Pineapple':
          toppingsPrize+=100
          break    
       case 'Spinach':
          toppingsPrize+=70
          break                  
      }
    })
  }else{
    this.pizzaToppings.map(topping=>{
      switch(topping){
        case 'Mushrooms':
          toppingsPrize+=120
          break
        case 'Onions':
          toppingsPrize+=70
          break
        case 'Sausage':
          toppingsPrize+=120
          break
        case 'Bacon':
          toppingsPrize+=180
          break
        case 'Extra cheese':
          toppingsPrize+=170
          break
        case 'Black olives':
          toppingsPrize+=170
          break
        case 'Green peppers':
          toppingsPrize+=150
          break
        case 'Pineapple':
          toppingsPrize+=120
          break    
        case 'Spinach':
            toppingsPrize+=100
            break                  
      }
    })

  }
  return toppingsPrize
}


Pizza.prototype.deliveryPrice=function(){
  if(this.pizzaDelivery===true){
    return 100
  }else{
    return 0
  }
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

    let newPizza=new Pizza(pizzaSize,pizzaCrust,pizzaToppings,pizzaDelivery)
   
    let totalPrice=((newPizza.pricePerSize()+newPizza.pizzaCrustPrice()+newPizza.toppingsPrice())*pizzaQuantity)+newPizza.deliveryPrice()


    $('.order-quantity').text('')
    $('.order-size').text('')
    $('.order-crust').text('')
    $('.order-dfees').text('')
    $('.order-toppings').text('')


    $('.order-quantity').text(pizzaQuantity)
    $('.order-size').text(`${pizzaSize} .... ${newPizza.pricePerSize()}`)
    $('.order-crust').text(`${pizzaCrust} .... ${newPizza.pizzaCrustPrice()}`)
    $('.order-dfees').text(`Kshs ${newPizza.deliveryPrice()}`)
    newPizza.pizzaToppings.map(topping=>{
      $('.order-toppings').append(topping + ' ')
    })
    $('.order-toppings').append(` .... ${newPizza.toppingsPrice()}`)
    $('.order-total').text(totalPrice)
    let pizzaLocation
    if(pizzaDelivery===true){
        pizzaLocation=$('#delivery-location').val()
        alert(`Your order will be delivered to your location ${pizzaLocation}`)
    }
   
  })
})