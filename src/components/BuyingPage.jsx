

export default function BuyingPage(){
    const [isBuyOrder, setIsBuyOrder] = useState(true);

  const currentPrice = 100; // Hardcoded current market price
  const energyBalance = 50; // Hardcoded energy balance
  const buyOrders = [
    { price: 105, quantity: 10 },
    { price: 110, quantity: 5 },
  ];
  const sellOrders = [
    { price: 95, quantity: 8 },
    { price: 90, quantity: 12 },
  ];

  return (
    <div className="container mx-auto py-10 bg-gray-100 min-h-screen">
      <div className="card mb-6 p-4 border rounded-lg shadow-md bg-slate-300">
        <h2 className="text-xl font-bold">Trading Dashboard</h2>
        <p>Current Market Price: {currentPrice} wei</p>
        <p>Your Energy Balance: {energyBalance} units</p>
      </div>

      <div className="card mb-6 p-4 mx-60 border rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Place an Order</h2>
        <div className="flex gap-4 items-center mt-4">
          <button
            className={`px-4 py-2 rounded-lg ${isBuyOrder ? "bg-green-500 text-white" : "bg-gray-200"}`}
            onClick={() => setIsBuyOrder(true)}
          >
            Buy Order
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${!isBuyOrder ? "bg-red-500 text-yellow" : "bg-gray-200"}`}
            onClick={() => setIsBuyOrder(false)}
          >
            Sell Order
          </button>
        </div>

        <div className="mt-4 grid gap-4 grid-cols-2">
          <input
            type="text"
            placeholder="Price (wei)"
            className="border rounded-lg p-2"
          />
          <input
            type="text"
            placeholder="Quantity (units)"
            className="border rounded-lg p-2"
          />
        </div>

        <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg">
          Place Order
        </button>
      </div>

      <div className="card mb-6 p-4 border rounded-lg shadow-md mx-20">
        <h2 className="text-lg font-semibold">Order Book</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-md font-medium">Buy Orders</h3>
            <ul>
              {buyOrders.map((order, index) => (
                <li key={index}>
                  {order.quantity} units @ {order.price} wei
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-md font-medium">Sell Orders</h3>
            <ul>
              {sellOrders.map((order, index) => (
                <li key={index}>
                  {order.quantity} units @ {order.price} wei
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}