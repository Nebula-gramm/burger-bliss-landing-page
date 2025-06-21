import BurgerCard from "./components/OwnComponents/BurgerCard";
import Footer from "./components/OwnComponents/Footer";
import Header from "./components/OwnComponents/Header";
import HeroCard from "./components/OwnComponents/HeroCard";


const App = () => {
  return (
    // Body div
    <div className="font-primary bg-[#1C171C] text-white mx-auto h-auto">
      {/* Header Part */}

      <div className="border-b-1">
        <div className="max-w-6xl mx-auto">
          <Header></Header>
        </div>
      </div>

      {/* main content */}
      <div className="max-w-5xl mx-auto py-6 px-4 flex flex-col justify-center">
        <div>
          <HeroCard />
        </div>
        <div>
          <h1 className="mt-4 mb-2 md:mt-8 text-xl font-md md:font-bold md:text-2xl">
            Our Signature Burgers
          </h1>
        </div>

        <div>
          <BurgerCard initial={{ scale: 0 }} animate={{ scale: 1 }}
            heading={"The Classic"}
            content={
              "A juicy beef patty topped with crisp lettuce, ripe tomatoes, and our signature sauce, all nestled in a toasted bun."
            }
            price={"$9.99"}
            url={
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAOD30KAjYEksA6Lf0RbF_RPPTURWBnzfbEto7Lj09nJ8qYNyB1stBL1mDhOCXt662FYTHnWkginv70Sfbma7SGFke3R0xK40yHDFuuWCclt3TZ4cLX5sczVpVUW6ba720GNUyjK2iVrOEa2bfaU-0DEctSowR8s25bq455INlyQe2RS7GOe9yFbVnv8pZavS9Tyj5j4GFHi0Shzjovb1ALQfDoh2vLP3K-kA7Fwkzqg4fuTWKgWTxhjrI_MTF-NrrarTmbjJKt7sX6"
            }
          />
          <BurgerCard
            heading={"The Spicy"}
            content={
              "For those who like it hot! This burger features a spicy chicken patty, jalapenos, pepper jack cheese, and a fiery chipotle mayo."
            }
            price={"$10.99"}
            url={
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCedg5QUeS5KOYN0NUVmZFymSNnlsXHBa2Fx0uVJW5Qvk_OCRwlsvC9sW0X06RFaeg7mrFLW1gMsisk_QhtkSLJqLL_xD8yCxgYuK-szvfbfXx3BVmPr8AWpwPK6oj4UOr3GBJBAfpM8AaSPmovhRsu7Jd0OBBsL8hxkpzXDCRzVuNPLVq7AohnQVYX-wxmU9C5wm-59NXHyLiqVYVmcodVpwHNS-giFrM4rUJh_1irpBVJ8h_znBnFMFL-93nEo4eQv6RkQ6kxI1CB"
            }
          />
          <BurgerCard
            heading={"The Veggie"}
            content={
              " A delicious vegetarian option with a plant-based patty, avocado, sprouts, and a tangy lemon-herb aioli."
            }
            price={"$11.99"}
            url={
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBuzBJpDU-4qbnJRjHVfAfNydPGY8JM4-EuIt3uAnAXA96cYDfGbUN0Lx6Cxl1lIveMZWraxlgCjI2nkuq_7edbr847y0HzuvbtOPDL9Q1HpwlAEKgJ3B6Q3sWpfD2z94rarQyd3HWR9cmLuinBAPZBsZ3zPP2y3TZ2Jsy-dRW0w5aL5p6vbtNQxK3xlZLxmVVvEmFDOK2H7QxRnHuEJmfjvpTfABfbkZS5Ab_bmDiAzAHqmNBlC3OBv3F_PhYnlUrbcywhu3aCJy8v"
            }
          />
        </div>

        <div>
          <h1 className="mt-4 mb-2 md:mt-8 text-xl font-md md:font-bold md:text-2xl">Find Us</h1>
        </div>
        <div>
          <BurgerCard
            heading={"Our Location"}
            content={
              "Visit us at 123 Main Street, Anytown, USA. We're open daily from 11 AM to 10 PM."
            }
            price={"Get Directions"}
            url={
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAlzidcTyqcn8cSJ1qjvExTWxzyQ92TQZyj3vi2GzGfd6T9gh-zunapDhbASkxR8LGcoo7qeYdyQVMlmgqLQeTmUqYBsCWxzUTIypwrKoHJc4xFTAhDG9J5RzmpiXfKMVM3CwRurvqjKUJrmwSbktlDQolZQWo-l0ZnMAU0MUkYw0YmLrRLAqllv5oOqB6lyBTeLBck-ZLtJ4HZW7txJkBPtT7YlnbHIdtR2g0N6YagNkKrAesQQlcdaV-fEIzsHnCPzdB4lISvvM7v"
            }
          />
        </div>
        <div><Footer/></div>
      </div>
    </div>
  );
};

export default App;
