var CartItem = React.createClass({

  calculateTotal: function() {
    return Math.round(this.props.price * this.props.qty * 100) / 100;
  },

  render: function() {
    return (
      <div key={this.props.key} className='cart-line'>
        <div className='cart-line__name'>{this.props.name}</div>
        <div className='cart-line__quantity'>{this.props.qty}</div>
        <div className='cart-line__price'>{this.props.price}</div>
        <div className='cart-line__change-qty'>
          <a className='cart-line__qty-up'>+</a>
          <a className='cart-line__qty-down'>-</a>
        </div>
        <div className='cart-line__total'>{this.calculateTotal()}</div>
      </div>
    );
  }

});





var AllCartItems = React.createClass({

  render: function() {
    var rows = [];
    JSON.parse(this.props.cartItems).forEach(function(cartItem) {
      rows.push(<CartItem key={cartItem.id} name={cartItem.name} qty={cartItem.qty} price={cartItem.price}/>);
    });
    return (
      <section className='all-cart-items'>
        <h1 className='all-cart-items__heading'>Cart Items</h1>
        {rows}
      </section>
    );
  }

});





var Totals = React.createClass({

  render: function() {
    return (
      <section className='totals'>
        <h1 className='totals__heading'>Totals</h1>
      </section>
    );
  }

});





var Basket = React.createClass({

  render: function() {
    return (
      <main className='basket'>
        <AllCartItems className='basket__items' cartItems={this.props.cartItems}/>
        <Totals className='basket__totals' />
      </main>
    );
  }

});





React.render(
  <Basket cartItems={JSON.stringify(cartItems)}/>,
  document.getElementById('react-basket')
);