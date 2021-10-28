import React from 'react';



export default function MealInstructions (props)  {
    console.log ('props',props)
    let instructions = props.meal.strInstructions.split('\n');
    return (
        <div className="mealInstructions">
            {instructions.map (instruction => {
                return (
                    <p>{instruction}</p>
                )
            })}

        </div>
    );
}