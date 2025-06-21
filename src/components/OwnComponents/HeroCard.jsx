import React from "react";
import { Button } from "../ui/button";

const HeroCard = () => {
  return (
    <div className="w-full h-[230px] md:h-[480px] bg-cover bg-center flex flex-col justify-center items-center gap-2 rounded-xl"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfTZ68s3zq4WOiBI85MPVWav8R-B_6s7_htNwcdo79jeM19j9Hjfm53Bt0FHnrtIjzj-wl_8A5lABbQldoKLWqrWUkZXiNlJzZjAT_avpyNt-rNMX6BftVEZVe99yDFVgCSbzK0B9CLeqMziun31YQgSa18_n2SoCXDi2IJ5ir6-l1UwAYUqWxhgM3ZcSYiq_L7xxw_bb1N0_6y7mHPtG3D45F6i0DoA8ZfSgxbHL-Lspr7yCm7XX4CLuAl3v4uJ6Q6oA1EKaQdSUu")`
  }}>

        <h1 className="text-3xl md:text-4xl font-bold">Burger Bliss</h1>
        <p className="text-center">
          Crafting the perfect burger experience with fresh ingredients and bold
          flavors.
        </p>
        <Button className='md:my-6'>View Menu</Button>

    </div>
  );
};

export default HeroCard;
