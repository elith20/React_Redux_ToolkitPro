import aboutlogo from "../../images/about_us..png"
import "../About/About.css"
import { useState } from "react"

export default function About(){
      return <>
        <h2>About Us</h2>
        <div className="background">
            <img src={aboutlogo} alt="about_image"></img>
        </div>
        <h2> Info you have to know!!!</h2>
        <div className = "text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quisquam ex tempora delectus saepe iste
                incidunt ducimus quas in voluptatem deleniti accusamus eum, atque voluptas pariatur quo accusantium architect
                consequatur eius cumque distinctio unde. Blanditiis quam nesciunt laudantium doloribus quisquam sed neque, a,
                beatae fuga, architecto culpa! Cum dolore nostrum cumque voluptas, mollitia omnis voluptatum maxime iusto.
                Minus, nemo ea.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quisquam ex tempora delectus saepe iste
                incidunt ducimus quas in voluptatem deleniti accusamus eum,  atque voluptas pariatur quo accusantium architecto
                consequatur eius cumque distinctio unde. Blanditiis quam nesciunt laudantium doloribus quisquam sed neque, a,
                beatae fuga, architecto culpa! Cum dolore nostrum cumque voluptas, mollitia omnis voluptatum maxime iusto.
                Minus, nemo ea.
            </p>
        </div>
    </>
}