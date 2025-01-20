function Shop({ data, addCart }) {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 my-14">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-md flex flex-col justify-end shadow-lg px-5"
              >
                <img
                  src={item.image}
                  className="h-[300px] object-contain mb-4"
                />
                <h2 className="text-lg">{item.title}</h2>
                <p className="text-sm pt-2 line-clamp-3">{item.description}</p>
                <div className="flex justify-between items-center py-5">
                  <p className="font-black text-black">Rs.{item.price}</p>
                  <button
                    onClick={() => addCart(item)}
                    className="bg-orange-500 py-1 px-2 text-white font-bold rounded-sm hover:scale-105 transition ease-linear"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Shop;
